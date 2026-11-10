import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowUpRight, X, ChevronRight } from 'lucide-react';
import { articlesData } from '../content/extraData';
import { TechnicalArticle } from '../types/portfolio';
import { StorageEngine3D } from './StorageEngine3D';

export const EngineeringSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<TechnicalArticle | null>(null);

  return (
    <section 
      id="engineering" 
      className="py-20 border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span 
              className="text-xs font-mono tracking-wider uppercase font-semibold block mb-2"
              style={{ color: 'var(--accent)' }}
            >
              05. Systems Thinking & Writing
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Engineering Notes & Deep Dives
            </h2>
          </div>
          <p 
            className="text-xs font-mono max-w-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            Rigorous architectural explorations of storage engines, POSIX durability invariants, and distributed concurrency.
          </p>
        </div>

        {/* Highlight 3D Simulation + Featured Blueprint */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3D Interactive Simulation Viewport (7 cols) */}
          <div className="lg:col-span-7">
            <StorageEngine3D />
          </div>

          {/* Accompanying Editorial Blueprint Synopsis (5 cols) */}
          <div 
            className="lg:col-span-5 flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl border transition-all"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div>
              <div 
                className="flex items-center gap-2 text-xs font-mono mb-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="font-semibold" style={{ color: 'var(--accent)' }}>Featured Technical Blueprint</span>
                <span aria-hidden="true">·</span>
                <span>C++20</span>
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
                Investigating the architectural lineages of Google's LevelDB, Meta's RocksDB, and CockroachDB's Pebble. Specifications include POSIX crash consistency via directory fsync, lock-free SkipLists, Monkey Bloom filter allocation, and leveled compaction invariants.
              </p>

              <div 
                className="space-y-2.5 mb-6 text-xs font-mono"
                style={{ color: 'var(--text-secondary)' }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>▸</span>
                  <span>Tombstone purging: bottom-most level mathematical proofs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>▸</span>
                  <span>POSIX directory metadata durability across power cuts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>▸</span>
                  <span>32KB chunked WAL framing with masked CRC32C checksums</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedArticle(articlesData[0])}
              className="w-full py-3 px-4 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-2 border transition-all cursor-pointer"
              style={{
                backgroundColor: 'var(--accent-muted)',
                borderColor: 'var(--border-strong)',
                color: 'var(--accent)',
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Full Architectural Blueprint</span>
            </button>
          </div>

        </div>

        {/* Technical Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <article 
              key={article.id}
              className="p-6 rounded-2xl border transition-all flex flex-col justify-between group cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                <div 
                  className="flex items-center gap-3 text-xs font-mono mb-3"
                  style={{ color: 'var(--text-secondary)' }}
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
                  className="text-base font-bold mb-2 transition-colors leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {article.title}
                </h4>

                <p 
                  className="text-xs leading-relaxed mb-4"
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
                        color: 'var(--text-secondary)',
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0e110f] border border-white/10 rounded-2xl shadow-2xl my-8 overflow-hidden max-h-[90vh] flex flex-col">
            
            <div className="p-6 border-b border-white/[0.08] bg-[#141815] flex items-center justify-between shrink-0">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#b7f36b] mb-1">
                  <span>{selectedArticle.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4EF]">
                  {selectedArticle.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 text-[#9A9F99] hover:text-[#F3F4EF] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#9A9F99] text-sm leading-relaxed prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap font-sans">
                {selectedArticle.contentMarkdown}
              </div>
            </div>

            <div className="p-4 border-t border-white/[0.08] bg-[#141815] flex items-center justify-between shrink-0">
              <span className="text-xs font-mono text-[#9A9F99]">
                Written by Amit Kumar
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-mono text-[#090B0A] bg-[#b7f36b] font-semibold rounded-lg hover:bg-[#c9f984] cursor-pointer"
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
