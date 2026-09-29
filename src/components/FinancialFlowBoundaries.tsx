import { motion } from 'motion/react';
import { ShieldCheck, FileCheck, AlertTriangle, ArrowRight, Building, CheckCircle2, Lock, Scale, HelpCircle, Eye, CreditCard, AlertCircle, Sparkles } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

export default function FinancialFlowBoundaries() {
  const principles = [
    {
      title: 'Written Agreement Before Work',
      description: 'All payments, fees, commissions, revenue shares, and reimbursements must be formally agreed upon in writing before any technical work begins.',
    },
    {
      title: 'Explicit Transparency on Parties & Amounts',
      description: 'Every party must clearly understand who pays whom, why the payment is made, the exact calculation method, and precise due dates.',
    },
    {
      title: 'Direct Business Accounts',
      description: 'Tala Tech operates using appropriate business or commercial payment accounts in its own corporate name whenever legally and practically feasible.',
    },
    {
      title: 'No Intermediary Fund Holding',
      description: 'Partners are never asked to receive, hold, forward, or transfer money on behalf of Tala Tech without a verified, clearly documented, and lawful business reason.',
    },
    {
      title: 'Separation of Personal Accounts',
      description: 'Personal bank accounts must never be used as substitutes for business accounts where doing so would violate banking terms, platform rules, or regulations.',
    },
    {
      title: 'Zero Fund Concealment',
      description: 'No participant will ever be asked to conceal the source, destination, commercial purpose, or true legal ownership of any funds.',
    },
    {
      title: 'Strict KYC / AML & Regulatory Adherence',
      description: 'No participant should ever bypass KYC/AML procedures, bank controls, payment processor rules, tax obligations, or regulatory safeguards.',
    },
    {
      title: 'Complete Audit Documentation',
      description: 'Every financial transaction must be supported by official commercial invoices, signed contracts, client escrow receipts, and audit records.',
    },
    {
      title: 'Jurisdictional Responsibility',
      description: 'Each party is independently responsible for adhering to tax obligations, currency reporting, and financial laws in their respective jurisdiction.',
    },
    {
      title: 'Right to Pause on Ambiguity',
      description: 'If any proposed payment flow appears unusual, unclear, or involves third-party routing, pause immediately and obtain independent legal or financial advice.',
    },
    {
      title: 'Strict Credential Privacy',
      description: 'Tala Tech will never request passwords, online banking credentials, OTP/2FA codes, or unrestricted access to any private financial accounts.',
    },
    {
      title: 'Software Services Distinction',
      description: 'We strictly distinguish legitimate software engineering deliverables and documented revenue-sharing agreements from unrelated money transmission.',
    },
  ];

  const verifyChecklist = [
    {
      step: 1,
      title: 'Confirm the Written Agreement',
      detail: 'Ensure a signed contract or written agreement exists outlining project deliverables and exact share terms.',
    },
    {
      step: 2,
      title: 'Confirm Recipient & Payment Details',
      detail: 'Verify the identity of the recipient, official business account names, and documented payment methods.',
    },
    {
      step: 3,
      title: 'Confirm the Purpose & Amount',
      detail: 'Verify that the dollar amount matches the agreed milestone invoice and covers legitimate software work.',
    },
    {
      step: 4,
      title: 'Keep Invoices & Transaction Records',
      detail: 'Retain PDF invoices, platform escrow statements, and bank confirmation receipts for tax and accounting records.',
    },
    {
      step: 5,
      title: 'Contact Your Bank if Anything Is Unusual',
      detail: 'Reach out to your financial institution or payment platform immediately if any request or transfer feels irregular.',
    },
  ];

  return (
    <section id="boundaries" className="py-24 bg-slate-50 relative z-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header with Deep Contrast */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300 font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-sky-700" />
            <span>Compliance, Integrity & Governance · Documented & Lawful</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            Financial-Flow Boundaries
          </h2>
          <p className="mt-4 text-base text-slate-700 font-medium leading-relaxed">
            Tala Tech is committed to absolute transparency, legally compliant practices, and informed consent. We engineer high-quality software—we do not engage in unauthorized financial intermediation or opaque fund transfers.
          </p>
        </div>

        {/* 3D Flow Diagram Card with Luminous Starlight Specular Glare */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-400/25 via-sky-400/15 to-blue-500/25 blur-xl pointer-events-none" />
          
          <TiltCard3D intensity={8} glare={true}>
            <div className="rounded-3xl bg-white/95 backdrop-blur-md p-6 sm:p-8 border-2 border-sky-200/90 shadow-xl shadow-sky-950/5 relative overflow-hidden">
              {/* Sweeping Shimmer Beam */}
              <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-sweep-beam pointer-events-none" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-sky-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-100 to-cyan-100 text-sky-700 flex items-center justify-center font-bold shadow-2xs">
                    <Scale className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span>Documented 2-Tier Financial Flow</span>
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    </h3>
                    <p className="text-xs text-slate-500">
                      Transparent, verifiable transaction architecture with full audit trail
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Legally Compliant</span>
                </span>
              </div>

              {/* Tier 1: Client to Tala Tech */}
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-bold text-sky-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B63E5] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">1</span>
                    <span>Tier 1: Client Milestone Payment to Tala Tech</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center p-4 rounded-2xl bg-sky-50/70 border border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="md:col-span-4 p-3.5 rounded-xl bg-white border border-sky-200 shadow-2xs">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-sky-600" />
                        <span>Client / Enterprise</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Funds official milestone via escrow (Upwork / Direct Contract)
                      </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-center justify-center text-center px-2 relative">
                      <div className="text-[11px] font-bold text-sky-700 flex items-center gap-1.5">
                        <span>Agreed Commercial Payment</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0B63E5]" />
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Standard software development milestone invoice
                      </div>
                      {/* Animated Flow Pulse Particle */}
                      <motion.div
                        animate={{ x: [-40, 40], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff] absolute -bottom-1"
                      />
                    </div>

                    <div className="md:col-span-4 p-3.5 rounded-xl bg-white border border-sky-200 shadow-2xs">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#0B63E5]" />
                        <span>Tala Tech Hub</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Official commercial business account in Tala Tech's name
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tier 2: Tala Tech to Eligible Participant */}
                <div>
                  <div className="text-[11px] font-bold text-sky-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B63E5] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">2</span>
                    <span>Tier 2: Documented Revenue Share Distribution</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:border-emerald-200 transition-colors">
                    <div className="md:col-span-4 p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Tala Tech Hub</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Disburses partner compensation based on completed contracts
                      </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-center justify-center text-center px-2 relative">
                      <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                        <span>Documented Revenue Share</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Supported by written compensation agreements & tax records
                      </div>
                      {/* Animated Flow Pulse Particle */}
                      <motion.div
                        animate={{ x: [-40, 40], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
                        className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] absolute -bottom-1"
                      />
                    </div>

                    <div className="md:col-span-4 p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Eligible Participant</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Verified regional collaborator with confirmed identity & records
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crucial Intermediary Warning Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-50/95 border border-amber-200 flex items-start gap-3 shadow-2xs">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>Important Notice on Financial Responsibility:</strong> Tala Tech will <strong>never ask you to act as an unregulated financial intermediary</strong>, funnel untracked third-party funds, or bypass established banking rules. If any proposed transaction is not completely understood or cannot be independently verified, participants must pause and decline to proceed.
                </div>
              </div>
            </div>
          </TiltCard3D>
        </div>

        {/* 12 Core Principles Grid */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-cyan-600" />
              <span>Core Financial Principles & Safeguards</span>
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Twelve binding operational commitments governing all agreements and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, index) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -4, borderColor: '#38bdf8', scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-sky-100 shadow-2xs space-y-2 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-sky-100 group-hover:bg-cyan-100 text-sky-800 group-hover:text-cyan-800 font-mono font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                    {index + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0B63E5] transition-colors">
                    {p.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* "Verify Before You Pay" Checklist */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/70 to-white/95 backdrop-blur-md border-2 border-sky-200 shadow-lg shadow-sky-950/5 relative overflow-hidden">
          {/* Sweeping Shimmer Beam */}
          <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-sweep-beam pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-sky-200/80 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0B63E5] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>Verify Before You Pay Checklist</span>
                  <Sparkles className="w-4 h-4 text-cyan-500" />
                </h3>
                <p className="text-xs text-slate-500">
                  Essential safety protocols for transparent, verified transactions
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-100/90 px-3.5 py-1.5 rounded-full border border-sky-300 w-fit shadow-2xs">
              5-Point Verification Protocol
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative z-10">
            {verifyChecklist.map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-4 rounded-2xl bg-white border border-sky-100 shadow-2xs space-y-2 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs font-bold font-mono flex items-center justify-center mb-2">
                    {item.step}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-bold text-cyan-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Mandatory Step</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Reminder */}
          <div className="mt-6 pt-4 border-t border-sky-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 relative z-10">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-cyan-600 shrink-0" />
              <span>Questions regarding a transaction invoice or verification? Contact our team directly.</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-[#0B63E5] hover:from-sky-500 hover:to-blue-600 text-white font-bold transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap"
            >
              <span>Contact Compliance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
