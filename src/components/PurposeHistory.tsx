import { motion } from 'motion/react';
import { Globe, Shield, Clock, Laptop, CheckCircle2, Wifi, Sparkles } from 'lucide-react';
import remoteWorkstationImg from '../assets/images/filipino_remote_engineer_workstation_1790626356894.jpg';
import TiltCard3D from './TiltCard3D';

export default function PurposeHistory() {
  const milestones = [
    {
      year: 'Year 1–2',
      title: 'Remote Engineering Inception',
      description:
        'Established our specialized, fully remote engineering unit in the Philippines. Standardized remote Git workflows, automated testing, and agile sprint delivery.',
    },
    {
      year: 'Year 3–4',
      title: 'Distributed Delivery & Trust',
      description:
        'Built an unblemished track record delivering 70+ complex web apps and SaaS architectures remotely, upholding strict code quality and data privacy.',
    },
    {
      year: 'Year 5–6',
      title: 'Freelance Platform Excellence',
      description:
        'Successfully completed enterprise and mid-market web contracts across global platforms such as Upwork and Freelancer, serving clients in North America, Europe, and Asia-Pacific.',
    },
    {
      year: 'Today & Beyond',
      title: 'Global Expansion & Co-Partnership',
      description:
        'Opening regional co-partnerships worldwide to expand our presence in multiple international markets with our transparent, fixed-percentage profit distribution model.',
    },
  ];

  return (
    <section id="story" className="py-24 bg-white border-b border-slate-200 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Deep Contrast */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300 font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>Our Journey & Strategic Vision · 100% Distributed Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            A Purpose Built on Trust, Quality & Global Expansion
          </h2>
          <p className="mt-4 text-base text-slate-700 font-medium leading-relaxed">
            Operating as an all-remote engineering unit across the Philippines, Tala Tech bridges high-caliber technical software development with global regional partners.
          </p>
        </div>

        {/* 2-Column: Timeline & Realistic Engineering Imagery in 3D Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 6-Year Timeline with High Contrast */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 border-l-2 border-sky-300 space-y-8">
              {milestones.map((m, index) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-sky-600 shadow-sm" />

                  <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-sky-400 transition-colors shadow-2xs space-y-1">
                    <span className="text-xs font-mono font-black text-sky-700 uppercase tracking-wider">
                      {m.year}
                    </span>
                    <h3 className="text-base font-black text-slate-950">{m.title}</h3>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed pt-1">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Tilt Card with High-Res Remote Engineering Photo */}
          <div className="lg:col-span-5">
            <TiltCard3D intensity={10} glare={true}>
              <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-xl space-y-5">
                
                {/* Photo of Philippine Remote Engineering Workstation */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                  <img
                    src={remoteWorkstationImg}
                    alt="Authentic remote software engineer workstation in the Philippines with multi-monitor coding setup"
                    className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white space-y-0.5">
                      <div className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                        Real Engineering Hub
                      </div>
                      <div className="text-xs font-bold text-slate-100">
                        Manila Metro & Distributed Philippine Hubs
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Core Operating Principles with Solid High Contrast */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-950">100% Fully Remote Culture</h4>
                      <p className="text-[11px] text-slate-700 font-medium leading-relaxed mt-0.5">
                        Asynchronous agility, cloud CI/CD, and fast GitHub PR turnaround with zero local office bloat.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-950">Bank-Documented Integrity</h4>
                      <p className="text-[11px] text-slate-700 font-medium leading-relaxed mt-0.5">
                        Clean commercial invoices, formal milestone receipts, and strict tax compliance in all jurisdictions.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-300 flex items-start gap-3">
                    <Laptop className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-slate-950">Zero Coding Required by You</h4>
                      <p className="text-[11px] text-slate-700 font-medium leading-relaxed mt-0.5">
                        You never write a line of code or attend sprint scrums. Tala Tech delivers complete software.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard3D>
          </div>

        </div>
      </div>
    </section>
  );
}
