import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { useTheme } from '../context/ThemeProvider';

interface StorageEngineProps {
  interactive?: boolean;
}

export const StorageEngine3D: React.FC<StorageEngineProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'all' | 'memtable' | 'wal' | 'l0' | 'l1'>('all');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [controlsCollapsed, setControlsCollapsed] = useState<boolean>(false);
  const { currentTheme, themeConfig } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // Detect software GL safely
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const scene = new THREE.Scene();
    const isLight = currentTheme === 'swiss-minimal';
    const fogColor = isLight ? '#E5E7EB' : (themeConfig.bgMain || '#090B0A');
    scene.fog = new THREE.FogExp2(fogColor, 0.04);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(5.5, 4.2, 6.5);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Studio Environment map
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    // Lighting: Accent-tinted key + ambient fill
    const accentColor = themeConfig.accent || '#b7f36b';
    const hemiLight = new THREE.HemisphereLight(accentColor, isLight ? '#cbd5e1' : '#101310', 0.85);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(isLight ? '#ffffff' : '#F3F4EF', isLight ? 1.4 : 1.8);
    dirLight.position.set(5, 8, 4);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(accentColor, 1.2);
    rimLight.position.set(-5, 3, -4);
    scene.add(rimLight);

    // Root Group for storage engine assembly
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Shared materials
    const darkMat = new THREE.MeshStandardMaterial({
      color: isLight ? '#334155' : '#141815',
      roughness: 0.25,
      metalness: 0.85,
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: accentColor,
      roughness: 0.15,
      metalness: 0.9,
    });
    const subtleMat = new THREE.MeshStandardMaterial({
      color: isLight ? '#94a3b8' : '#2a332c',
      roughness: 0.4,
      metalness: 0.6,
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: '#ffffff',
      roughness: 0.1,
      metalness: 0.1,
      transmission: isSoftwareGl ? 0 : 0.85,
      transparent: true,
      opacity: isSoftwareGl ? 0.4 : 0.9,
      ior: 1.5,
    });

    // 1. Foundation Ground Plinth (Base chassis)
    const baseGeo = new THREE.CylinderGeometry(3.2, 3.4, 0.2, 32);
    const baseMesh = new THREE.Mesh(baseGeo, darkMat);
    baseMesh.position.y = -0.1;
    rootGroup.add(baseMesh);

    // Subtle edge ring
    const ringGeo = new THREE.TorusGeometry(3.22, 0.03, 16, 64);
    ringGeo.rotateX(Math.PI / 2);
    const ringMesh = new THREE.Mesh(ringGeo, accentMat);
    ringMesh.position.y = 0.01;
    rootGroup.add(ringMesh);

    // 2. Memory Tier: Lock-Free SkipList MemTable (Top level tier, Y: 1.8)
    const memtableGroup = new THREE.Group();
    memtableGroup.position.y = 1.8;
    rootGroup.add(memtableGroup);

    // Core glass housing
    const memHousingGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.45, 24);
    const memHousing = new THREE.Mesh(memHousingGeo, glassMat);
    memtableGroup.add(memHousing);

    // SkipList tiers (stacked concentric geometric rings)
    for (let r = 0; r < 4; r++) {
      const skipTierGeo = new THREE.TorusGeometry(0.3 + r * 0.28, 0.025, 8, 32);
      skipTierGeo.rotateX(Math.PI / 2);
      const skipTierMesh = new THREE.Mesh(skipTierGeo, r === 3 ? accentMat : subtleMat);
      skipTierMesh.position.y = (r - 1.5) * 0.08;
      memtableGroup.add(skipTierMesh);
    }

    // SkipList nodes (mini cubes arranged circularly)
    const nodeGeo = new THREE.BoxGeometry(0.12, 0.1, 0.12);
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const node = new THREE.Mesh(nodeGeo, i % 2 === 0 ? accentMat : subtleMat);
      node.position.set(Math.cos(angle) * 0.9, 0, Math.sin(angle) * 0.9);
      memtableGroup.add(node);
    }

    // 3. Write-Ahead Log (WAL) Ring (Y: 1.1)
    const walGroup = new THREE.Group();
    walGroup.position.y = 1.1;
    rootGroup.add(walGroup);

    const walRingGeo = new THREE.TorusGeometry(1.8, 0.08, 12, 48);
    walRingGeo.rotateX(Math.PI / 2);
    const walRing = new THREE.Mesh(walRingGeo, subtleMat);
    walGroup.add(walRing);

    // 32KB Log Chunks array around perimeter
    const chunkGeo = new THREE.BoxGeometry(0.2, 0.25, 0.1);
    const chunkCount = 12;
    for (let i = 0; i < chunkCount; i++) {
      const angle = (i / chunkCount) * Math.PI * 2;
      const chunk = new THREE.Mesh(chunkGeo, i === 0 || i === 5 ? accentMat : darkMat);
      chunk.position.set(Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8);
      chunk.rotation.y = -angle;
      walGroup.add(chunk);
    }

    // 4. Immutable Level 0 SSTables (Y: 0.5)
    const l0Group = new THREE.Group();
    l0Group.position.y = 0.5;
    rootGroup.add(l0Group);

    const sstGeo = new THREE.BoxGeometry(0.7, 0.2, 0.5);
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2 + 0.3;
      const sst = new THREE.Mesh(sstGeo, darkMat);
      sst.position.set(Math.cos(angle) * 1.6, 0, Math.sin(angle) * 1.6);
      sst.rotation.y = -angle;
      l0Group.add(sst);

      // Bloom filter accent plate on top
      const filterGeo = new THREE.PlaneGeometry(0.6, 0.4);
      filterGeo.rotateX(-Math.PI / 2);
      const filterPlate = new THREE.Mesh(filterGeo, i === 1 ? accentMat : subtleMat);
      filterPlate.position.set(sst.position.x, 0.11, sst.position.z);
      filterPlate.rotation.y = -angle;
      l0Group.add(filterPlate);
    }

    // 5. Consolidated Level 1 Non-Overlapping SSTables (Y: 0.1)
    const l1Group = new THREE.Group();
    l1Group.position.y = 0.15;
    rootGroup.add(l1Group);

    const l1Geo = new THREE.BoxGeometry(0.85, 0.16, 0.4);
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const sst = new THREE.Mesh(l1Geo, subtleMat);
      sst.position.set(Math.cos(angle) * 2.3, 0, Math.sin(angle) * 2.3);
      sst.rotation.y = -angle;
      l1Group.add(sst);
    }

    // Contact shadow beneath
    const shadowGeo = new THREE.CircleGeometry(3.3, 32);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: '#000000',
      transparent: true,
      opacity: isLight ? 0.2 : 0.45,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = -0.21;
    rootGroup.add(shadowMesh);

    // Mouse / Interaction tracking
    let targetRotationY = 0;
    let targetRotationX = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 1.2;
      targetRotationX = y * 0.4;
    };

    container.addEventListener('mousemove', onPointerMove);

    // Animation Loop
    let animId = 0;

    const animate = () => {
      if (!isPaused) {
        rootGroup.rotation.y += 0.005;
        // Subtle layer rotation to represent concurrent execution
        memtableGroup.rotation.y += 0.01;
        walGroup.rotation.y -= 0.006;
      }

      // Smooth camera tilt towards mouse
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y * 0.1) * 0.02;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Resize handling
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousemove', onPointerMove);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [isPaused, currentTheme, themeConfig]);

  return (
    <div 
      className="relative w-full h-[480px] rounded-lg border overflow-hidden flex flex-col items-center justify-center transition-colors"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-strong)',
      }}
    >
      {/* 3D Scene Viewport */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Header Info */}
      <div className="absolute top-4 left-5 pointer-events-none">
        <span 
          className="text-[11px] font-mono tracking-wider uppercase block"
          style={{ color: 'var(--accent)' }}
        >
          Interactive Architecture Simulation
        </span>
        <h4 
          className="text-sm font-semibold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          LSM-Tree Tiered Memory & Storage Hierarchy
        </h4>
      </div>

      {/* Collapsible Bottom Control Dock adhering to Three.js UX directives */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[94vw] w-auto transition-transform duration-200">
        {!controlsCollapsed ? (
          <div 
            className="border rounded-md px-4 py-2.5 shadow-2xl flex items-center gap-3 backdrop-blur-md transition-colors"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div 
              className="flex items-center gap-2 text-xs font-mono"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="font-semibold" style={{ color: 'var(--accent)' }}>Tiers:</span>
              <span>MemTable</span>
              <span aria-hidden="true">·</span>
              <span>WAL 32KB</span>
              <span aria-hidden="true">·</span>
              <span>L0 SSTable</span>
              <span aria-hidden="true">·</span>
              <span>L1 Compaction</span>
            </div>

            <div 
              className="h-4 w-px mx-1" 
              style={{ backgroundColor: 'var(--border-subtle)' }} 
            />

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-xs px-2.5 py-1 rounded font-mono transition-colors border"
              style={{
                backgroundColor: 'var(--bg-main)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>

            <button
              onClick={() => setControlsCollapsed(true)}
              className="text-xs px-1.5 py-1 transition-colors hover:underline"
              style={{ color: 'var(--text-muted)' }}
              title="Collapse Dock"
            >
              ▾ Hide
            </button>
          </div>
        ) : (
          <button
            onClick={() => setControlsCollapsed(false)}
            className="border rounded-md px-3 py-1.5 text-xs font-mono transition-colors shadow-lg"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--accent)',
            }}
          >
            ▴ Show Simulation Controls
          </button>
        )}
      </div>
    </div>
  );
};
