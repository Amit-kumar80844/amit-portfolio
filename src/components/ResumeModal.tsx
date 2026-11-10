import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  ExternalLink, 
  Printer, 
  Check, 
  Loader2,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { profileData } from '../content/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 100% Reliable Programmatic PDF Download
  const handleDownloadPdf = async () => {
    setDownloading(true);
    try {
      const response = await fetch('/Amit_Kumar_Resume.pdf');
      if (!response.ok) {
        throw new Error('Could not fetch PDF directly');
      }
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Amit_Kumar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.warn('Blob download failed, falling back to direct anchor:', err);
      // Fallback
      const fallbackLink = document.createElement('a');
      fallbackLink.href = '/Amit_Kumar_Resume.pdf';
      fallbackLink.download = 'Amit_Kumar_Resume.pdf';
      fallbackLink.target = '_blank';
      fallbackLink.rel = 'noopener noreferrer';
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } finally {
      setDownloading(false);
    }
  };

  // Robust Print Handler
  const handlePrint = () => {
    // 1. Try native print in current window
    try {
      window.print();
    } catch (e) {
      console.warn('Native window.print failed in current frame', e);
    }

    // 2. Also prepare print window as fallback for sandboxed iframes
    const resumeElement = document.getElementById('resume-printable-content');
    if (resumeElement) {
      const printWindow = window.open('', '_blank', 'width=900,height=1000');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Amit Kumar — Resume</title>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                  line-height: 1.45;
                  color: #111827;
                  background: #ffffff;
                  margin: 20px auto;
                  max-width: 800px;
                  padding: 20px;
                }
                h1 { font-size: 26px; margin: 0 0 4px 0; font-weight: bold; }
                h2 { font-size: 16px; margin: 0 0 8px 0; color: #374151; font-weight: normal; }
                h3 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1.5px solid #d1d5db; padding-bottom: 4px; margin: 18px 0 10px 0; font-weight: bold; color: #1f2937; }
                h4 { font-size: 14px; margin: 0; font-weight: bold; color: #000; }
                ul { margin: 6px 0 0 0; padding-left: 18px; }
                li { font-size: 12px; margin-bottom: 4px; color: #374151; }
                p { font-size: 12px; margin: 4px 0; color: #374151; }
                .sub-text { font-size: 11px; color: #6b7280; font-family: monospace; }
                .flex-row { display: flex; justify-content: space-between; align-items: baseline; }
                @media print {
                  body { margin: 0; padding: 0; }
                  @page { margin: 1.2cm; size: A4 portrait; }
                }
              </style>
            </head>
            <body>
              ${resumeElement.innerHTML}
              <script>
                window.onload = function() {
                  window.focus();
                  setTimeout(function() { window.print(); }, 250);
                };
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto no-print">
      <div 
        className={`relative w-full ${isPrintMode ? 'max-w-5xl h-[96vh]' : 'max-w-4xl max-h-[92vh]'} bg-[#0e110f] border border-white/10 rounded-2xl shadow-2xl my-4 overflow-hidden flex flex-col transition-all duration-300`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 bg-[#141815] shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#0284C7] dark:text-[#b7f36b]" />
            <h2 id="resume-title" className="text-sm sm:text-base font-bold text-[#F3F4EF]">
              Amit Kumar — Curriculum Vitae
            </h2>
            <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-gray-300 border border-white/10">
              Verified PDF
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Download Original PDF Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              title="Download official PDF file directly"
            >
              {downloading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Downloading...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-300" />
                  <span>Saved to Downloads</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* View PDF in New Tab */}
            <a
              href="/Amit_Kumar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-gray-200 bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
              title="Open full PDF file in browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            {/* Print View Trigger */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-gray-200 bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
              title="Open system print dialog / save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print View</span>
            </button>

            {/* Toggle Full Clean View */}
            <button
              onClick={() => setIsPrintMode(!isPrintMode)}
              className="p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              title={isPrintMode ? "Standard modal view" : "Expanded clean document view"}
            >
              {isPrintMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Formatted Resume Sheet */}
        <div 
          id="resume-printable-content"
          className="p-6 sm:p-12 overflow-y-auto space-y-7 bg-[#ffffff] text-[#111827] font-sans selection:bg-[#0284C7] selection:text-white print-only-resume"
        >
          {/* Header */}
          <div className="border-b border-gray-300 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black font-heading">
                Amit Kumar
              </h1>
              <span className="text-xs sm:text-sm font-mono text-gray-700 font-semibold">
                Backend Engineer · B.Tech CSE (2023–2027)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-xs font-mono text-gray-600">
              <a href="mailto:amitkr80844@gmail.com" className="hover:underline text-blue-700">amitkr80844@gmail.com</a>
              <span>·</span>
              <span>+91-8002068364</span>
              <span>·</span>
              <a href="https://www.linkedin.com/in/amit-kumar21/" target="_blank" rel="noreferrer" className="hover:underline text-blue-700">linkedin.com/in/amit-kumar21</a>
              <span>·</span>
              <a href="https://leetcode.com/u/Amit_maur/" target="_blank" rel="noreferrer" className="hover:underline text-blue-700">leetcode.com/u/Amit_maur</a>
              <span>·</span>
              <span>IIIT Kottayam, India</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2.5">
              Education
            </h3>
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-bold text-sm text-black">
                Indian Institute of Information Technology, Kottayam
              </h4>
              <span className="text-xs font-mono text-gray-600">Aug 2023 – May 2027</span>
            </div>
            <p className="text-xs text-gray-700 mb-1.5">
              Bachelor of Technology in Computer Science and Engineering · <strong>CGPA: 8.26 / 10</strong>
            </p>
            <p className="text-xs text-gray-600">
              <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2.5">
              Experience
            </h3>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-sm text-black">
                  Software Developer Intern — AutonoPros
                </h4>
                <span className="text-xs font-mono text-gray-600">Jan 2026 – Apr 2026 · Remote</span>
              </div>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5 mt-1.5">
                <li>Developed Android (Kotlin) and Flutter application features, contributing to the migration from a native Android application to a cross-platform solution.</li>
                <li>Created reusable Flutter UI components and integrated REST APIs using a modular architecture, reducing codebase duplication and improving development velocity.</li>
                <li>Delivered over 60% of the Flutter application’s core functionality, accelerating project progress and ensuring on-time completion of assigned deliverables.</li>
              </ul>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2.5">
              Featured Projects
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-xs text-black">
                    API Rate Limiter SDK · <span className="font-normal font-mono text-gray-600">Java, Spring Boot, Redis, Docker</span>
                  </h4>
                  <a href="https://github.com/Amit-kumar80844/api-rate-limiter-sdk" target="_blank" rel="noreferrer" className="text-[11px] font-mono text-blue-600 hover:underline">GitHub</a>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1">
                  <li>Engineered a Redis-backed distributed rate-limiting SDK for microservices with global and service-level throttling.</li>
                  <li>Implemented Token Bucket and Sliding Window Counter algorithms using Redis Lua scripts for atomic, consistent, and scalable request throttling.</li>
                  <li>Load-tested the system with 100,000+ requests, successfully throttling 99.995% of excess traffic without service degradation.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-xs text-black">
                    Store Management System · <span className="font-normal font-mono text-gray-600">Django REST Framework, MongoDB, Python, React.js, Gemini API, Razorpay</span>
                  </h4>
                  <a href="https://github.com/Amit-kumar80844/store-management-system" target="_blank" rel="noreferrer" className="text-[11px] font-mono text-blue-600 hover:underline">GitHub</a>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1">
                  <li>Developed RESTful backend services using Django REST Framework and MongoDB to manage inventory, sales, employees, and customer operations.</li>
                  <li>Integrated Gemini API to generate real-time inventory and sales insights, Razorpay for secure online payments, and automated Gmail alert system for low stock.</li>
                  <li>Implemented JWT authentication, role-based access control, and scalable REST APIs while leading a team of 4 developers.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-xs text-black">
                    Image Downloader · <span className="font-normal font-mono text-gray-600">Kotlin, Spring Boot, Retrofit, Coroutines, MVVM</span>
                  </h4>
                  <a href="https://github.com/Amit-kumar80844/image-downloader-android" target="_blank" rel="noreferrer" className="text-[11px] font-mono text-blue-600 hover:underline">GitHub</a>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1">
                  <li>Developed an image downloading application with a Kotlin Android client and Spring Boot backend for image retrieval and management.</li>
                  <li>Built REST APIs for image URL validation, download processing, and reliable handling of external image resources.</li>
                  <li>Integrated Retrofit, Coroutines, and MVVM architecture to enable asynchronous networking and responsive user experiences.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2.5">
              Technical Skills
            </h3>
            <div className="text-xs text-gray-700 space-y-1.5">
              <p><strong>Programming Languages:</strong> C, C++, Java, Kotlin, Python</p>
              <p><strong>Backend Development:</strong> Spring Boot, Django REST Framework, GCP, REST APIs, Rate Limiting</p>
              <p><strong>Android Development:</strong> Jetpack Compose, XML Layouts, MVVM, Retrofit, Coroutines, Hilt, Room DB, CameraX</p>
              <p><strong>Databases & Caching:</strong> MongoDB, MySQL, Redis (Lua Scripting), SQLite / Room</p>
              <p><strong>DevOps & Tools:</strong> Docker, Kubernetes, Git, GitHub Workflows, Linux / POSIX</p>
            </div>
          </div>

          {/* Extra-Curricular */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2.5">
              Extra-Curricular Activities & Achievements
            </h3>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              <li>
                <strong>750+ DSA Problems Solved:</strong> Across LeetCode (<a href="https://leetcode.com/u/Amit_maur/" target="_blank" rel="noreferrer" className="text-blue-600 underline">@Amit_maur</a>), Codeforces, and GeeksforGeeks with a peak LeetCode rating of 1551.
              </li>
              <li>
                <strong>OpenMF Mifos Mobile:</strong> Contributed to Login Screen input validation (<a href="https://github.com/openMF/mifos-mobile/pull/2834" target="_blank" rel="noreferrer" className="text-blue-600 underline">PR #2834 Merged</a>) under mentor guidance.
              </li>
              <li>
                <strong>AlgoUniversity DP Camp:</strong> Selected among top 1,000 from 40,000+ national applicants (<a href="https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/amit-kumar.png" target="_blank" rel="noreferrer" className="text-blue-600 underline">Certificate</a>).
              </li>
              <li>
                <strong>Telstra Software Engineering Job Simulation:</strong> Built Spring Boot APIs, Cucumber automated test suites, and SonarQube code quality audits.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
