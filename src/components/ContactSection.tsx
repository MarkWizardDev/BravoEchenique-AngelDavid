import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, Send, CheckCircle2, AlertCircle, BarChart3, ShieldCheck, Sparkles } from 'lucide-react';
import { EmailLog } from '../types';
import TiltCard3D from './TiltCard3D';

interface ContactSectionProps {
  onEmailSent: (log: EmailLog) => void;
  onOpenReporting: () => void;
}

export default function ContactSection({ onEmailSent, onOpenReporting }: ContactSectionProps) {
  const EMAIL_ADDRESS = 'james@zeusguy.xyz';

  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subjectPreset, setSubjectPreset] = useState('Partnership Inquiry & Collaboration Terms');
  const [customSubject, setCustomSubject] = useState('');
  const [message, setMessage] = useState(
    'Hello NexaTech Team,\n\nI have reviewed your introduction page and would like to learn more about the regional partnership and cooperation terms.\n\nPlease share the formal agreement guidelines and instructions on account coordination.'
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationData, setConfirmationData] = useState<EmailLog | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = EMAIL_ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Basic validation
    if (!senderName.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!senderEmail.trim() || !senderEmail.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please provide a brief message or question.');
      return;
    }

    setIsSubmitting(true);

    const finalSubject = subjectPreset === 'Custom Subject' && customSubject.trim() ? customSubject : subjectPreset;

    const newLog: EmailLog = {
      id: `TTL-${Math.floor(100000 + Math.random() * 900000)}`,
      timestamp: new Date().toISOString(),
      senderName: senderName.trim(),
      senderEmail: senderEmail.trim(),
      recipient: EMAIL_ADDRESS,
      subject: finalSubject,
      message: message.trim(),
      status: 'Delivered',
    };

    setTimeout(() => {
      onEmailSent(newLog);
      setConfirmationData(newLog);
      setIsSubmitting(false);

      // Reset form fields
      setSenderName('');
      setSenderEmail('');
      setCustomSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Deep Contrast */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300 font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-sky-700" />
            <span>Direct Partner Communications · Fast Response Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            Contact Our Lead Representative
          </h2>
          <p className="mt-4 text-base text-slate-700 font-medium leading-relaxed">
            Ready to discuss regional coordination, profit percentages, or request the VMware sandbox setup guide? Reach out directly to our designated liaison below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Email Card & Details with 3D Tilt */}
          <div className="lg:col-span-5 space-y-6">
            
            <TiltCard3D intensity={8} glare={true}>
              {/* Email Address & Copy Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-md space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950">Direct Official Email</h3>
                    <p className="text-xs text-slate-600 font-medium">Primary partnership & inquiry inbox</p>
                  </div>
                </div>

                {/* Email Text Display */}
                <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 text-center sm:text-left">
                  <div className="text-[11px] font-black uppercase tracking-wider text-sky-700 mb-1">
                    Recipient Address
                  </div>
                  <div className="text-lg sm:text-xl font-black font-mono text-slate-950 select-all tracking-tight break-all">
                    {EMAIL_ADDRESS}
                  </div>
                </div>

                {/* Copy Button under Email Address Text */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-black transition-all duration-200 cursor-pointer shadow-sm ${
                    copied
                      ? 'bg-emerald-600 text-white border-2 border-emerald-600'
                      : 'bg-white hover:bg-slate-100 text-slate-950 border-2 border-slate-300 hover:border-sky-500'
                  }`}
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-sky-600" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-600 font-medium text-center">
                  Click above to instantly copy the address for your desktop or mobile email client.
                </p>
              </div>
            </TiltCard3D>

            {/* Reporting Log Link Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-black text-slate-950">
                  <BarChart3 className="w-4 h-4 text-sky-600" />
                  Reporting & Communications Log
                </span>
                <span className="text-[10px] uppercase font-black text-sky-900 bg-sky-100 border border-sky-300 px-2.5 py-0.5 rounded-full">
                  CSV Export
                </span>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                All inquiries submitted through this portal are recorded in your session activity log. You can view message history and download a full CSV report anytime under the Reporting tab.
              </p>
              <button
                type="button"
                onClick={onOpenReporting}
                className="w-full text-center py-2.5 px-4 text-xs font-black text-slate-900 bg-white hover:bg-slate-100 rounded-xl border border-slate-300 transition-colors cursor-pointer shadow-2xs"
              >
                Open Reporting Tab & Export CSV
              </button>
            </div>

            {/* Privacy & Response Promise */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 text-xs text-slate-700 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-950 font-bold">Strict Confidentiality: </strong>
                We will never share your email or contact information with third parties. Responses are provided within 24 hours.
              </div>
            </div>

          </div>

          {/* Right Column: Direct Sending Mail Template */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-950">Send Direct Message</h3>
                <p className="text-xs text-slate-600 font-medium">Transmits directly to {EMAIL_ADDRESS}</p>
              </div>
              <span className="text-xs font-mono font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                Direct Portal Template
              </span>
            </div>

            {formError && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 border-2 border-rose-200 flex items-center gap-2.5 text-xs text-rose-800 font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-black text-slate-800 uppercase tracking-wide">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. David Vance"
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-950 text-sm focus:outline-none focus:border-sky-600 font-medium placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-black text-slate-800 uppercase tracking-wide">
                    Your Contact Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. david@example.org"
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-950 text-sm focus:outline-none focus:border-sky-600 font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-black text-slate-800 uppercase tracking-wide">
                  Inquiry Topic *
                </label>
                <select
                  id="contact-subject"
                  value={subjectPreset}
                  onChange={(e) => setSubjectPreset(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-950 text-sm focus:outline-none focus:border-sky-600 font-bold cursor-pointer"
                >
                  <option value="Partnership Inquiry & Collaboration Terms">Partnership Inquiry & Collaboration Terms</option>
                  <option value="VMware Virtual Machine Sandbox Instructions">VMware Virtual Machine Sandbox Instructions</option>
                  <option value="Bank Documentation & Compliance Question">Bank Documentation & Compliance Question</option>
                  <option value="Client Project Milestone Scoping">Client Project Milestone Scoping</option>
                  <option value="Custom Subject">Other Subject (Custom)</option>
                </select>
              </div>

              {subjectPreset === 'Custom Subject' && (
                <div className="space-y-1.5">
                  <label htmlFor="custom-subject" className="text-xs font-black text-slate-800 uppercase tracking-wide">
                    Specify Subject
                  </label>
                  <input
                    id="custom-subject"
                    type="text"
                    value={customSubject}
                    onChange={(e) => setCustomSubject(e.target.value)}
                    placeholder="Enter your inquiry subject..."
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-950 text-sm focus:outline-none focus:border-sky-600 font-medium"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-black text-slate-800 uppercase tracking-wide">
                  Message / Details *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-950 text-sm focus:outline-none focus:border-sky-600 font-medium leading-relaxed placeholder:text-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50 active:scale-98"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>Send Message to james@zeusguy.xyz</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Confirmation Modal */}
        <AnimatePresence>
          {confirmationData && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border-2 border-slate-200 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-950">Inquiry Transmitted Successfully</h4>
                    <p className="text-xs text-slate-600 font-medium">Logged to Session & Liaison Queue</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 font-medium text-slate-800">
                  <div><strong>Log ID:</strong> <span className="font-mono">{confirmationData.id}</span></div>
                  <div><strong>Recipient:</strong> <span className="font-mono">{confirmationData.recipient}</span></div>
                  <div><strong>Subject:</strong> {confirmationData.subject}</div>
                  <div><strong>Timestamp:</strong> {new Date(confirmationData.timestamp).toLocaleString()}</div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setConfirmationData(null)}
                    className="flex-1 py-3 rounded-xl bg-slate-950 text-white font-black text-xs hover:bg-slate-900 transition-colors"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => {
                      setConfirmationData(null);
                      onOpenReporting();
                    }}
                    className="py-3 px-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors"
                  >
                    View in Reporting
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
