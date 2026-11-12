import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';
import { Scanner } from '@tailwindcss/oxide';

// Windows WASI filesystem fallback:
// When AppLocker/WDAC blocks native .node bindings, oxide falls back to WASI.
// In WASI preview1 on Windows, filesystem scanning cannot resolve drive roots (e.g. C:\).
// We patch Scanner.prototype.scan to walk source files via Node's native fs and extract candidates.
const origScan = Scanner.prototype.scan;
Scanner.prototype.scan = function () {
  const result = origScan ? origScan.call(this) : [];
  if (result && result.length > 0) return result;

  const candidates = new Set<string>();
  const scanDir = (dir: string) => {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git' || entry.name === '.agents') continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(fullPath);
        } else if (/\.(tsx|ts|jsx|js|html)$/.test(entry.name)) {
          try {
            const ext = path.extname(entry.name).slice(1);
            const content = fs.readFileSync(fullPath, 'utf-8');
            const found = this.getCandidatesWithPositions({ content, extension: ext });
            for (const item of found) {
              candidates.add(item.candidate);
            }
          } catch {}
        }
      }
    } catch {}
  };

  scanDir(process.cwd());
  return Array.from(candidates);
};

export default defineConfig(() => {
  return {
    plugins: [tailwindcss(), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
