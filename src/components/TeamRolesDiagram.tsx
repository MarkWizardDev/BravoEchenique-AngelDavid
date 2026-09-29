import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, UserCheck, Briefcase, ArrowRight, ArrowLeftRight, Check, ShieldCheck, Cpu, Building2, Wallet, Sparkles } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

export default function TeamRolesDiagram() {
  const [selectedEntity, setSelectedEntity] = useState<'team' | 'you' | 'client'>('you');
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      title: '1. Project Scoping & Contract',
      description: 'Client contracts via platform (Upwork/Freelancer). Tala Tech drafts the full technical proposal and architecture.',
      flow: 'Client ➔ Tala Tech Proposal',
    },
    {
      title: '2. Escrow Funding & Account Setup',
      description: 'Client funds escrow. You ensure verified account presence (with optional isolated VMware VM security).',
      flow: 'Client Escrow ➔ Verified Account',
    },
    {
      title: '3. Technical Development & QA',
      description: 'Tala Tech developers code features, unit test, build UI/UX, and submit pull requests. Zero coding required from you.',
      flow: 'Tala Tech Engineering ➔ Deliverables',
    },
    {
      title: '4. Milestone Approval & Payment',
      description: 'Client approves the deliverables. Platform releases funds directly into your verified bank account.',
      flow: 'Platform Escrow ➔ Your Bank Account',
    },
    {
      title: '5. Fixed Profit Distribution',
      description: 'You retain your agreed fixed profit percentage. You remit the agreed engineering balance with complete receipts.',
      flow: 'Your Payout ➔ Retain Your % ➔ Remit Balance',
    },
  ];

  const entityDetails = {
    team: {
      name: 'Our Team (Tala Tech)',
      tag: '100% Remote Philippine Team',
      roleType: '100% Technical Aspects',
      icon: Cpu,
      color: 'from-sky-600 to-blue-700',
      textColor: 'text-sky-700',
      bgLight: 'bg-sky-50',
      borderColor: 'border-sky-300',
      responsibilities: [
        'Full-stack web & mobile application engineering handled remotely (React, Node, Python, Mobile)',
        'Writing clean, tested, production-ready codebases and asynchronous Git management',
        'Reviewing client technical specifications and architecting scalable databases',
        'Resolving pull requests, automated bug tracking, and deploying to cloud infrastructure',
        'Managing all direct client technical communication, sprint reviews, and progress demos',
      ],
      skillsNeeded: 'Senior Software Architecture, Full-Stack Development, CI/CD Cloud Automation',
    },
    you: {
      name: 'You (The Regional Partner)',
      tag: 'Local Regional Presence',
      roleType: 'Non-Technical Aspects Only',
      icon: UserCheck,
      color: 'from-cyan-500 to-sky-600',
      textColor: 'text-cyan-700',
      bgLight: 'bg-cyan-50/80',
      borderColor: 'border-cyan-300',
      responsibilities: [
        'Establishing formal written revenue-share agreements and scope verification',
        'Optional VMware virtual machine environment for sandboxed client communication & data isolation',
        'Receiving documented revenue-share compensation supported by official invoices & contracts',
        'Maintaining complete transaction receipts and accounting records for tax compliance',
        'Zero financial intermediary actions—strictly distinguishing software revenue from money transmission',
      ],
      skillsNeeded: 'No IT or coding experience required. Basic communication, professional integrity & attention to detail.',
    },
    client: {
      name: 'The Client (International)',
      tag: 'Commercial Client',
      roleType: 'Project Sponsor & Client',
      icon: Building2,
      color: 'from-slate-700 to-slate-900',
      textColor: 'text-slate-800',
      bgLight: 'bg-slate-100',
      borderColor: 'border-slate-300',
      responsibilities: [
        'Proposing software scopes, feature specifications, and milestone deadlines',
        'Depositing project milestones into secure marketplace escrow (Upwork / Direct contract)',
        'Reviewing code deliverables and staging environments created by Tala Tech',
        'Authorizing milestone releases upon successful code deployment and quality testing',
      ],
      skillsNeeded: 'Business or Product Management, Product Ownership',
    },
  };

  const currentEntity = entityDetails[selectedEntity];
  const IconComponent = currentEntity.icon;

  return (
    <section id="roles" className="py-24 bg-slate-50 border-b border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Deep Contrast */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300 font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>Interactive 3-Party Architecture · 3D Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            The Role of Both Sides
          </h2>
          <p className="mt-4 text-base text-slate-700 font-medium leading-relaxed">
            Our collaboration is built on a clear, clean boundary: <strong>Tala Tech handles 100% of the technical coding</strong>, while you manage the regional partnership. Click each 3D card to inspect duties.
          </p>
        </div>

        {/* 3D Interactive 3-Node Diagram Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-12">
          
          {/* 1. Tala Tech Node */}
          <TiltCard3D intensity={10} glare={true}>
            <button
              onClick={() => setSelectedEntity('team')}
              className={`w-full text-left p-6 sm:p-7 rounded-3xl transition-all duration-200 border-2 cursor-pointer h-full flex flex-col justify-between ${
                selectedEntity === 'team'
                  ? 'border-sky-600 bg-white shadow-xl ring-4 ring-sky-100'
                  : 'border-slate-200 bg-white hover:border-sky-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full bg-sky-100 text-sky-900">
                    Our Team
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-950">Tala Tech</h3>
                <div className="text-xs font-bold text-sky-700 mt-0.5">100% Remote Philippine Team</div>
                <p className="text-xs text-slate-700 font-medium mt-3 leading-relaxed">
                  Builds 100% of software, web development, coding, and technical milestone deliveries.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-sky-600 flex items-center gap-1">
                <span>Click to view details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </TiltCard3D>

          {/* 2. You (Regional Partner) Node */}
          <TiltCard3D intensity={10} glare={true}>
            <button
              onClick={() => setSelectedEntity('you')}
              className={`w-full text-left p-6 sm:p-7 rounded-3xl transition-all duration-200 border-2 cursor-pointer h-full flex flex-col justify-between ${
                selectedEntity === 'you'
                  ? 'border-cyan-500 bg-white shadow-xl ring-4 ring-cyan-100'
                  : 'border-slate-200 bg-white hover:border-cyan-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-sky-600 text-white flex items-center justify-center shadow-md">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900">
                    You (Partner)
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-950">You</h3>
                <div className="text-xs font-bold text-cyan-800 mt-0.5">Regional Facilitator</div>
                <p className="text-xs text-slate-700 font-medium mt-3 leading-relaxed">
                  Handles documented communication, contract verification, and receives invoiced revenue share.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-cyan-700 flex items-center gap-1">
                <span>Click to view details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </TiltCard3D>

          {/* 3. The Client Node */}
          <TiltCard3D intensity={10} glare={true}>
            <button
              onClick={() => setSelectedEntity('client')}
              className={`w-full text-left p-6 sm:p-7 rounded-3xl transition-all duration-200 border-2 cursor-pointer h-full flex flex-col justify-between ${
                selectedEntity === 'client'
                  ? 'border-slate-900 bg-white shadow-xl ring-4 ring-slate-200'
                  : 'border-slate-200 bg-white hover:border-slate-400 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full bg-slate-200 text-slate-900">
                    Global Market
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-950">Client</h3>
                <div className="text-xs font-bold text-slate-700 mt-0.5">International Enterprise</div>
                <p className="text-xs text-slate-700 font-medium mt-3 leading-relaxed">
                  Proposes software features, funds milestone escrow, and reviews live deliverables.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-800 flex items-center gap-1">
                <span>Click to view details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </TiltCard3D>

        </div>

        {/* Detailed Inspection Card with Deep Contrast */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEntity}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-black text-slate-950">{currentEntity.name}</h4>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-300">
                      {currentEntity.tag}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-sky-700 mt-0.5">{currentEntity.roleType}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-100 text-xs text-slate-800 border border-slate-200 max-w-sm font-medium">
                <strong>Skills Expected:</strong> {currentEntity.skillsNeeded}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs font-black uppercase tracking-wider text-slate-600 mb-3">
                Key Responsibilities & Commitments:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentEntity.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
