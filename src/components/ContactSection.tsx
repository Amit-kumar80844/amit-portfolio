import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Code2
} from 'lucide-react';
import { profileData } from '../content/profile';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (emailToCopy = profileData.email) => {
    navigator.clipboard.writeText(emailToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const constructMailtoUrl = () => {
    const subject = formData.subject || `Engineering Inquiry from ${formData.name || 'Visitor'}`;
    const body = `Hi Amit,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nReply To: ${formData.email}`;
    return `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const constructGmailWebUrl = () => {
    const subject = formData.subject || `Engineering Inquiry from ${formData.name || 'Visitor'}`;
    const body = `Hi Amit,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nReply To: ${formData.email}`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profileData.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyFullMessage = () => {
    const textToCopy = `To: ${profileData.email}\nSubject: ${formData.subject || `Engineering Inquiry from ${formData.name}`}\n\nMessage:\n${formData.message}\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setSubmitted(true);

    try {
      const link = document.createElement('a');
      link.href = constructMailtoUrl();
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback handled by rendered success view
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 border-b transition-colors relative"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span 
              className="text-xs font-mono tracking-widest uppercase font-semibold"
              style={{ color: 'var(--accent)' }}
            >
              07 — Initiate Dialogue
            </span>
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>/ Opportunistic & Open Inquiries</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
            >
              Let's Build Resilient Systems.
            </h2>
            <p 
              className="text-sm max-w-md leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Open for Summer/Fall 2026 backend internships and 2027 full-time software engineering roles. Reach out directly or dispatch a message below.
            </p>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Email Hero Card */}
            <div 
              className="p-6 sm:p-8 rounded-lg border space-y-4"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent)' }}>
                  Primary Email Ingress
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                  Verified Invariant
                </span>
              </div>

              <div 
                className="text-lg sm:text-xl font-bold font-mono tracking-tight break-all"
                style={{ color: 'var(--text-primary)' }}
              >
                {profileData.email}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  onClick={() => handleCopyEmail(profileData.email)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded transition-colors cursor-pointer"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--bg-main)',
                  }}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profileData.email)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                  title="Open directly in Gmail Web"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Gmail Web</span>
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                  title="Open default email client"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mail Client</span>
                </a>
              </div>
            </div>

            {/* Verified Networks */}
            <div 
              className="p-6 rounded-lg border space-y-3"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <span className="text-xs font-mono uppercase tracking-wider block mb-2 font-semibold" style={{ color: 'var(--text-muted)' }}>
                Professional Networks & Code Repositories
              </span>

              {[
                { label: 'LinkedIn', handle: 'in/amit-kumar21', url: profileData.linkedin, icon: Linkedin },
                { label: 'GitHub', handle: '@Amit-kumar80844', url: profileData.github, icon: Github },
                { label: 'LeetCode', handle: '@Amit_maur (1551 Rating)', url: profileData.leetcode, icon: Code2 },
              ].map(({ label, handle, url, icon: Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded border transition-all hover:bg-white/[0.02] group text-xs font-mono"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    <span className="font-semibold">{label}</span>
                    <span style={{ color: 'var(--text-muted)' }}>— {handle}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: 'var(--text-muted)' }} />
                </a>
              ))}
            </div>

            {/* Location & Status Info */}
            <div 
              className="p-5 rounded-lg border text-xs font-mono space-y-2"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Current Physical Base:</span>
                <span>Kerala / Bihar, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Availability Window:</span>
                <span style={{ color: 'var(--accent)' }}>Summer / Fall 2026 & 2027</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Response Latency:</span>
                <span>&lt; 24 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Terminal (7 cols) */}
          <div className="lg:col-span-7">
            <div 
              className="p-6 sm:p-8 rounded-lg border transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Direct Message Dispatch
                  </h3>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    Draft message with automatic routing
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                  P2P Form
                </span>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-mono mb-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Linus Torvalds"
                        className="w-full px-4 py-2.5 rounded border text-sm transition-colors focus:outline-none"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-mono mb-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Your Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded border text-sm transition-colors focus:outline-none"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-xs font-mono mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Inquiry Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Backend Internship Opportunity / Distributed Architecture"
                      className="w-full px-4 py-2.5 rounded border text-sm transition-colors focus:outline-none"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-xs font-mono mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Message Payload *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss technical requirements, engineering culture, or role specifics..."
                      className="w-full px-4 py-3 rounded border text-sm transition-colors focus:outline-none resize-none leading-relaxed"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-xs font-mono font-semibold rounded flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:opacity-90"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--bg-main)',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Transmission via Mail Engine</span>
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div 
                    className="p-5 rounded border space-y-2"
                    style={{
                      backgroundColor: 'var(--accent-muted)',
                      borderColor: 'var(--border-strong)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                      <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                        Message Staged for Transmission!
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      Your message has been composed for <strong style={{ color: 'var(--text-primary)' }}>{profileData.email}</strong>. Select an immediate transmission method:
                    </p>
                  </div>

                  {/* Summary preview */}
                  <div 
                    className="p-4 rounded border text-xs font-mono space-y-2"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <div><strong style={{ color: 'var(--text-primary)' }}>Sender:</strong> {formData.name} ({formData.email})</div>
                    <div><strong style={{ color: 'var(--text-primary)' }}>Subject:</strong> {formData.subject || 'Engineering Inquiry'}</div>
                    <div className="pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Payload:</strong>
                      <div className="mt-1 p-2 rounded bg-black/20 text-[11px] whitespace-pre-wrap max-h-28 overflow-y-auto">
                        {formData.message}
                      </div>
                    </div>
                  </div>

                  {/* Dispatch Action Options */}
                  <div className="space-y-2.5">
                    <a
                      href={constructGmailWebUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer hover:opacity-90"
                      style={{
                        backgroundColor: 'var(--accent)',
                        color: 'var(--bg-main)',
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Send via Gmail Web Interface (Recommended)</span>
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href={constructMailtoUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-3 rounded text-xs font-mono font-medium flex items-center justify-center gap-1.5 border transition-all text-center"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Launch Mail Client</span>
                      </a>

                      <button
                        onClick={handleCopyFullMessage}
                        className="py-2.5 px-3 rounded text-xs font-mono font-medium flex items-center justify-center gap-1.5 border transition-all text-center cursor-pointer"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {copiedMessage ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedMessage ? 'Copied to Clipboard' : 'Copy Full Draft'}</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full text-center text-xs font-mono pt-2 cursor-pointer hover:underline"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      ← Re-edit message parameters
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
