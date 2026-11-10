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

    // Also attempt automatic trigger via dynamic anchor click
    try {
      const link = document.createElement('a');
      link.href = constructMailtoUrl();
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback handled by rendered success card
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span 
            className="text-xs font-mono tracking-wider uppercase font-semibold block mb-2"
            style={{ color: 'var(--accent)' }}
          >
            07. Initiate Dialogue
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Get in touch.
          </h2>
          <p 
            className="text-xs font-mono mt-2 max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Currently open for Backend Engineering internships & new grad software roles. Let's discuss microservices or distributed systems.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels vs. Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Primary Email Box */}
              <div 
                className="p-6 rounded-2xl border transition-all"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-strong)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="text-xs font-mono uppercase tracking-wider font-semibold block"
                    style={{ color: 'var(--accent)' }}
                  >
                    Direct Email
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                    Replies within 24h
                  </span>
                </div>
                
                <div 
                  className="text-base sm:text-lg font-bold mb-4 break-all font-mono"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {profileData.email}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleCopyEmail(profileData.email)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors cursor-pointer"
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
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors hover:scale-[1.02]"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                    title="Open directly in Gmail Web"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Gmail</span>
                  </a>

                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors hover:scale-[1.02]"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                    title="Open in your default mail application"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Mail Client</span>
                  </a>
                </div>
              </div>

              {/* Verified Profiles */}
              <div 
                className="p-6 rounded-2xl border space-y-3"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <span 
                  className="text-xs font-mono uppercase tracking-wider block mb-1 font-semibold"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Verified Networks
                </span>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border transition-colors text-xs font-mono group"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    <span>LinkedIn (in/amit-kumar21)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border transition-colors text-xs font-mono group"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    <span>GitHub (@Amit-kumar80844)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={profileData.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border transition-colors text-xs font-mono group"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    <span>LeetCode (@Amit_maur)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

            <div 
              className="pt-6 border-t text-xs font-mono mt-6"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
            >
              <span className="block mb-0.5 font-semibold" style={{ color: 'var(--text-primary)' }}>Location:</span>
              <span>IIIT Kottayam, Kerala & Patna, Bihar, India</span>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div 
              className="p-6 sm:p-8 rounded-2xl border transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <h3 
                className="text-lg font-bold mb-2 flex items-center justify-between"
                style={{ color: 'var(--text-primary)' }}
              >
                <span>Send a Message</span>
                <span className="text-[11px] font-mono font-normal" style={{ color: 'var(--text-secondary)' }}>
                  Direct Transmission
                </span>
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-mono mb-1.5"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none"
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
                        className="block text-xs font-mono mb-1.5"
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
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none"
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
                      className="block text-xs font-mono mb-1.5"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Backend Role Inquiry / Distributed Systems Problem"
                      className="w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none"
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
                      className="block text-xs font-mono mb-1.5"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, technical problem, or team..."
                      className="w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none resize-none"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-semibold rounded-xl font-mono flex items-center justify-center gap-2 transition-all cursor-pointer hover:opacity-90 shadow-md"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--bg-main)',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              ) : (
                <div className="space-y-5 mt-4">
                  <div 
                    className="p-5 rounded-xl border space-y-3"
                    style={{
                      backgroundColor: 'var(--accent-muted)',
                      borderColor: 'var(--border-strong)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                      <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                        Message Prepared for Amit Kumar!
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      Your message is formatted and ready to be delivered to <strong style={{ color: 'var(--text-primary)' }}>{profileData.email}</strong>. Choose your preferred dispatch channel below:
                    </p>
                  </div>

                  {/* Summary Details */}
                  <div 
                    className="p-4 rounded-xl border text-xs font-mono space-y-2"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <div><strong style={{ color: 'var(--text-primary)' }}>Sender:</strong> {formData.name} ({formData.email})</div>
                    <div><strong style={{ color: 'var(--text-primary)' }}>Subject:</strong> {formData.subject || 'Engineering Inquiry'}</div>
                    <div className="pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Content Preview:</strong>
                      <div className="mt-1 p-2 rounded bg-black/10 dark:bg-black/30 text-[11px] whitespace-pre-wrap max-h-32 overflow-y-auto">
                        {formData.message}
                      </div>
                    </div>
                  </div>

                  {/* Dispatch Action Options */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={constructGmailWebUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow cursor-pointer"
                      style={{
                        backgroundColor: 'var(--accent)',
                        color: 'var(--bg-main)',
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Send Instantly via Gmail Web (Recommended)</span>
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href={constructMailtoUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-3 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-1.5 border transition-all text-center"
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
                        className="py-2.5 px-3 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-1.5 border transition-all text-center cursor-pointer"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {copiedMessage ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedMessage ? 'Message Copied!' : 'Copy Full Text'}</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full text-center text-xs font-mono mt-3 hover:underline cursor-pointer"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      ← Edit Message Details
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
