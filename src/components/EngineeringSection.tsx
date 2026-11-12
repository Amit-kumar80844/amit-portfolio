import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowUpRight, X, ChevronRight, FileText } from 'lucide-react';
import { articlesData } from '../content/extraData';
import { TechnicalArticle } from '../types/portfolio';
import { StorageEngine3D } from './StorageEngine3D';

export const EngineeringSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<TechnicalArticle | null>(null);

  return (
    <section 
      id="engineering" 
      className="py-24 border-b transition-colors relative"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span 
              className="text-xs font-mono tracking-widest uppercase font-semibold block mb-3"
              style={{ color: 'var(--accent)' }}
            >
              05 — Systems Thinking & Writing
            </span>
            <h2 
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
            >
              Engineering Notes.
            </h2>
          </div>
          <p 
            className="text-sm max-w-md leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Technical breakdowns of storage engines, POSIX crash consistency, and lock-free concurrency.
          </p>
        </div>

        {/* 3D LSM Storage Engine Simulation + Featured Blueprint */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3D Interactive Simulation Viewport (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <StorageEngine3D />
          </div>

          {/* Accompanying Editorial Blueprint Synopsis (5 cols) */}
          <div 
            className="lg:col-span-5 p-6 sm:p-8 rounded-lg border flex flex-col justify-between transition-all"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono mb-3">
                <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                  Systems Architecture Blueprint
                </span>
                <span aria-hidden="true" style={{ color: 'var(--text-muted)' }}>·</span>
                <span style={{ color: 'var(--text-muted)' }}>C++20 & Storage Engines</span>
              </div>

              <h3 
                className="text-2xl font-bold mb-3 tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Modern C++20 LSM-Tree Storage Engine Architecture
              </h3>

              <p 
                className="text-xs sm:text-sm leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                An exhaustive breakdown of Log-Structured Merge-Trees across LevelDB, RocksDB, and Pebble. Covers directory fsync semantics, concurrent SkipLists, Monkey Bloom filter allocation, and leveled tombstone purging invariants.
              </p>

              <div 
                className="space-y-2 mb-6 text-xs font-mono"
                style={{ color: 'var(--text-secondary)' }}
              >
                <div className="flex items-start gap-2">
                  <span style={{ color: 'var(--accent)' }}>▸</span>
                  <span>Tombstone purging: bottom-most level mathematical proofs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ color: 'var(--accent)' }}>▸</span>
                  <span>POSIX directory metadata durability across power cuts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ color: 'var(--accent)' }}>▸</span>
                  <span>32KB chunked WAL framing with masked CRC32C checksums</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedArticle(articlesData[0])}
              className="w-full py-3 px-4 rounded text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--bg-main)',
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Full Architectural Article</span>
            </button>
          </div>

        </div>

        {/* Technical Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <article 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-6 rounded-lg border transition-all flex flex-col justify-between group cursor-pointer hover:border-opacity-100"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div>
                <div 
                  className="flex items-center gap-3 text-xs font-mono mb-3"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    <span>{article.publishedDate}</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h4 
                  className="text-base font-bold mb-2 transition-colors leading-snug group-hover:underline"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {article.title}
                </h4>

                <p 
                  className="text-xs leading-relaxed mb-6"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div 
                  className="pt-3 border-t flex items-center justify-between text-xs font-mono font-medium"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--accent)',
                  }}
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div 
            className="relative w-full max-w-3xl border rounded-lg shadow-2xl my-6 overflow-hidden max-h-[92vh] flex flex-col"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-strong)',
            }}
          >
            {/* Modal Header */}
            <div 
              className="p-5 sm:p-6 border-b flex items-center justify-between shrink-0"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono mb-1" style={{ color: 'var(--accent)' }}>
                  <span>{selectedArticle.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {selectedArticle.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded border transition-colors cursor-pointer hover:opacity-80"
                style={{
                  backgroundColor: 'var(--bg-main)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div 
              className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed font-sans"
              style={{ color: 'var(--text-secondary)' }}
            >
              <div className="whitespace-pre-wrap">
                {selectedArticle.contentMarkdown}
              </div>
            </div>

            {/* Modal Footer */}
            <div 
              className="p-4 border-t flex items-center justify-between shrink-0"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                Written by Amit Kumar
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-mono font-semibold rounded transition-colors cursor-pointer"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--bg-main)',
                }}
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
