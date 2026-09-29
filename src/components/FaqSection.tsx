import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle, Shield, Monitor, Lock, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';
import { FaqItem } from '../types';
import TiltCard3D from './TiltCard3D';

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'role' | 'financial' | 'security' | 'trust'>('all');
  const [openIds, setOpenIds] = useState<number[]>([1, 4, 5]); // Default open key questions

  const faqData: FaqItem[] = [
    {
      id: 1,
      question: 'What is my role in this?',
      answer:
        'You would allow us to access your computer remotely and use your account when necessary to complete the required verification process. You are not required to have any technical skills.\n\nIf you are concerned about giving us access to your personal computer, you may install VMware and provide access to a virtual machine instead. This can help keep your personal files and information separate from the work environment.',
      category: 'role',
      securityNote: 'VMware Recommended: Running a Virtual Machine completely sandboxes your personal documents, passwords, and photos from remote sessions.',
    },
    {
      id: 2,
      question: 'I know nothing about IT. Is that okay?',
      answer:
        'Yes. You are not required to have any technical or IT skills. We will provide the necessary guidance and instructions.',
      category: 'role',
    },
    {
      id: 3,
      question: "Why don't you use your own account?",
      answer:
        'We are looking to expand our services into international markets. Working with clients in your region would allow us to explore new business opportunities and expand our market presence.',
      category: 'trust',
    },
    {
      id: 4,
      question: 'Which bank account will be used to receive the money—mine or yours?',
      answer:
        "NexaTech uses appropriate business or commercial payment accounts in its own name whenever legally and practically possible.\n\nIn any documented revenue-sharing collaboration, participants receive agreed compensation directly, but should never be asked to receive, hold, forward, or transfer funds on our behalf without a clearly documented, lawful business reason that has been independently verified. Personal accounts must never be used as unauthorized substitutes for business accounts where this violates bank policies, platform terms, or applicable law.\n\nAll financial transactions must be supported by official commercial invoices, receipts, and written agreements. If any proposed flow is unusual or unclear, pause immediately and consult independent legal or financial counsel.",
      category: 'financial',
      securityNote: 'Compliance Protocol: See our Financial-Flow Boundaries section. Never act as an unregulated money transmitter or bypass KYC/AML banking safeguards.',
    },
    {
      id: 5,
      question: 'How much will I be paid for this work?',
      answer:
        'You will receive a fixed percentage of the income generated, based on the formal written terms of our agreement. All payments, fees, commissions, revenue shares, and reimbursements must be agreed upon in writing before any technical work begins, detailing exactly who pays whom, the calculation method, and payment due dates.',
      category: 'financial',
      securityNote: 'Documented Compensation: Every disbursement is accompanied by an itemized commercial invoice and accounting statement for your local tax filings.',
    },
    {
      id: 6,
      question: 'How can I trust you?',
      answer:
        'We are an experienced team and have been working in this field for more than six years. We aim to maintain transparency and respect our clients and partners.\n\nYou should review the agreement carefully and verify our company and business information before proceeding. If you become uncomfortable with the arrangement, you should be able to stop participating in accordance with the agreed terms.',
      category: 'trust',
      securityNote: 'Zero Lock-in: You maintain complete control of your environment and can revoke remote access or end participation at any time.',
    },
    {
      id: 7,
      question: 'What kind of work does your company do?',
      answer:
        'We develop web, mobile, and software applications for clients. Our team handles the technical development, code reviews, quality assurance, and deployments across cloud environments.',
      category: 'role',
    },
    {
      id: 8,
      question: 'Is this safe for my computer?',
      answer:
        'Yes. We operate with strict respect for your privacy and security. For partners who prefer total separation between personal files and work tasks, we fully support and guide the setup of a VMware virtual machine.\n\nA virtual machine acts as a separate, isolated sandbox on your PC, ensuring zero access to your host operating system, private files, or personal accounts.',
      category: 'security',
      securityNote: 'Data Isolation: Work occurs exclusively inside the sandboxed VM container without host OS disk access.',
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqData, selectedCategory, searchQuery]);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-b border-slate-200 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Deep Contrast */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300 font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
            <HelpCircle className="w-4 h-4 text-sky-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            Clear Answers to Important Questions
          </h2>
          <p className="mt-4 text-base text-slate-700 font-medium leading-relaxed">
            We believe in total transparency. Review our detailed responses regarding roles, banking compliance, technical expectations, and security practices.
          </p>
        </div>

        {/* High-Contrast Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQ questions (e.g. computer, bank, IT skills, VMware, trust)..."
              className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-slate-300 rounded-2xl text-slate-950 font-medium placeholder:text-slate-500 text-sm focus:outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* High-Contrast Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border-2 border-slate-200 shadow-xs">
            {[
              { id: 'all', label: 'All Questions (8)' },
              { id: 'role', label: 'Your Role & Hardware' },
              { id: 'financial', label: 'Financial & Banking' },
              { id: 'trust', label: 'Company Trust & Experience' },
              { id: 'security', label: 'Security & VMware' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List - 3D Modern High-Contrast Cards */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-300 p-8">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <div className="text-slate-800 font-bold text-base">No questions found matching your search.</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs font-bold text-sky-600 hover:underline"
              >
                Reset search filter
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <motion.div
                  key={faq.id}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden bg-white shadow-sm ${
                    isOpen ? 'border-sky-500 shadow-md ring-2 ring-sky-100' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-sky-100 text-slate-800 group-hover:text-sky-700 font-mono font-black text-xs flex items-center justify-center shrink-0 border border-slate-200 transition-colors">
                        0{faq.id}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-sky-700 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 space-y-4">
                          <div className="text-slate-800 text-sm leading-relaxed whitespace-pre-line font-medium pl-11">
                            {faq.answer}
                          </div>

                          {faq.securityNote && (
                            <div className="ml-11 p-3.5 rounded-xl bg-sky-50 border-2 border-sky-200 flex items-start gap-2.5 text-xs text-sky-950 font-medium">
                              <Shield className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                              <span>{faq.securityNote}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* VMware Safe Sandbox Callout Card with 3D Depth */}
        <div className="mt-14">
          <TiltCard3D intensity={6} glare={true}>
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-300 shadow-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center shrink-0 shadow-md">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-black uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Zero-Risk Local Sandbox</span>
                    </div>
                    <h4 className="text-lg font-black text-slate-950">
                      Need 100% Personal Data Isolation? Use VMware Virtual Machine
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed max-w-2xl font-medium">
                      If you prefer not to share host screen access, you can run VMware Workstation Player (free). Our team will provide step-by-step setup assistance so all client interactions remain completely sandboxed inside the virtual machine.
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-all shadow-md shrink-0 whitespace-nowrap active:scale-95"
                >
                  Request Sandbox Guide
                </a>
              </div>
            </div>
          </TiltCard3D>
        </div>

      </div>
    </section>
  );
}
