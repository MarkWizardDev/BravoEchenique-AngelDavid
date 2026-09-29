import { useState } from 'react';
import { motion } from 'motion/react';
import { DollarSign, Percent, Calculator, FileText, CheckCircle2, ShieldAlert, ArrowDownRight, Layers, CreditCard, Sparkles, Orbit } from 'lucide-react';
import TiltCard3D from './TiltCard3D';
import ThreeProfitCylinder from './3d/ThreeProfitCylinder';

export default function ProfitDistribution() {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(6500);
  const [partnerPercentage, setPartnerPercentage] = useState<number>(18);
  const [platformFeePercentage] = useState<number>(10); // Standard Upwork/Freelancer blended fee

  // Calculations
  const platformFees = (monthlyRevenue * platformFeePercentage) / 100;
  const netRevenueAfterPlatform = monthlyRevenue - platformFees;
  const partnerShare = (netRevenueAfterPlatform * partnerPercentage) / 100;
  const talaTechShare = netRevenueAfterPlatform - partnerShare;

  const presets = [
    { label: 'Starter (1–2 Projects)', revenue: 3500, percent: 15 },
    { label: 'Standard (Ongoing Sprints)', revenue: 7500, percent: 18 },
    { label: 'High-Volume (Enterprise)', revenue: 16000, percent: 20 },
  ];

  return (
    <section id="profit" className="py-24 bg-white border-b border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Deep Contrast */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300 font-extrabold text-xs uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>Core Program Focus · Equitable Value Exchange</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            Transparent Profit Distribution Model
          </h2>
          <p className="mt-4 text-base text-slate-700 font-medium leading-relaxed">
            Our global expansion is powered by mutual prosperity. As a regional partner, you receive a guaranteed, fixed percentage of the income generated from every successful client milestone.
          </p>
        </div>

        {/* Interactive Calculator & 3D Live Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Controls Column - Deep High Contrast */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 shadow-sm">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-950">Profit Split Simulator</h3>
                  <div className="text-xs text-slate-600 font-medium">Estimate your fixed monthly payout</div>
                </div>
              </div>

              {/* Preset Buttons */}
              <div className="hidden sm:flex items-center gap-1.5">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setMonthlyRevenue(preset.revenue);
                      setPartnerPercentage(preset.percent);
                    }}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white border border-slate-300 hover:border-sky-500 text-slate-800 hover:text-sky-700 transition-colors shadow-2xs cursor-pointer"
                  >
                    {preset.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Monthly Milestone Volume */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="revenue-range" className="text-xs font-black text-slate-800 uppercase tracking-wide">
                  Monthly Project Invoicing Volume
                </label>
                <span className="text-xl font-black text-sky-700 tabular-nums font-mono">
                  ${monthlyRevenue.toLocaleString()} <span className="text-xs text-slate-500 font-bold">USD</span>
                </span>
              </div>
              <input
                id="revenue-range"
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer h-2.5 bg-slate-200 rounded-lg"
                aria-label="Monthly Project Invoicing Volume in USD"
              />
              <div className="flex justify-between text-xs text-slate-600 font-bold font-mono">
                <span>$1,000/mo</span>
                <span>$12,500/mo</span>
                <span>$25,000/mo</span>
              </div>
            </div>

            {/* Slider 2: Partner Agreed Percentage */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label htmlFor="percent-range" className="text-xs font-black text-slate-800 uppercase tracking-wide">
                  Agreed Partner Profit Share
                </label>
                <span className="text-xl font-black text-emerald-700 tabular-nums font-mono">
                  {partnerPercentage}% <span className="text-xs text-slate-500 font-bold">Fixed</span>
                </span>
              </div>
              <input
                id="percent-range"
                type="range"
                min="10"
                max="30"
                step="1"
                value={partnerPercentage}
                onChange={(e) => setPartnerPercentage(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2.5 bg-slate-200 rounded-lg"
                aria-label="Agreed Partner Profit Share Percentage"
              />
              <div className="flex justify-between text-xs text-slate-600 font-bold font-mono">
                <span>10% (Entry)</span>
                <span>18% (Standard)</span>
                <span>30% (High-Tier)</span>
              </div>
            </div>

            {/* Platform Escrow Note */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1 shadow-2xs">
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span>Platform Escrow Deductions:</span>
                <span className="font-mono tabular-nums">~{platformFeePercentage}% (Upwork / Freelancer)</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                Platform fees are deducted by the marketplace before net escrow disbursement into your bank account.
              </p>
            </div>
          </div>

          {/* Real-Time Live Breakdown Results & Real 3D Cylinder */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Focus Card: Partner Profit with 3D Tilt */}
            <TiltCard3D intensity={10} glare={true}>
              <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-sky-500 shadow-xl relative overflow-hidden group">
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="text-xs font-black uppercase tracking-wider text-sky-900 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-300 flex items-center gap-1.5 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-sky-700" />
                    <span>Your Net Distribution (3D Real-Time)</span>
                  </span>
                  <span className="text-xs font-bold text-slate-700 font-mono">
                    {partnerPercentage}% of Net Escrow
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-7">
                    <div className="flex items-baseline gap-2 mb-2">
                      <motion.span
                        key={partnerShare}
                        initial={{ opacity: 0.8, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className="text-4xl sm:text-5xl font-black text-slate-950 tabular-nums font-mono"
                      >
                        ${Math.round(partnerShare).toLocaleString()}
                      </motion.span>
                      <span className="text-sm font-bold text-slate-600">USD / Month</span>
                    </div>

                    <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4">
                      Compensation is distributed in strict accordance with written partnership agreements and verified commercial invoices. Payments are documented with itemized receipts, ensuring full regulatory and tax compliance across all jurisdictions without unauthorized fund forwarding.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                      <div>
                        <div className="text-slate-600 text-[11px] font-bold">Annualized Projection</div>
                        <div className="text-lg font-black text-sky-900 font-mono tabular-nums">
                          ${Math.round(partnerShare * 12).toLocaleString()} / yr
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-600 text-[11px] font-bold">Technical Hours You Spend</div>
                        <div className="text-lg font-black text-emerald-700 font-mono">
                          0.0 Hours
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3D Interactive Profit Cylinder */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center p-2 rounded-2xl bg-slate-900 border border-slate-800">
                    <ThreeProfitCylinder partnerShare={partnerPercentage} className="w-full h-44" />
                    <div className="text-[10px] text-cyan-300 font-mono font-bold mt-1 text-center">
                      Cyan Top = You ({partnerPercentage}%) · Blue Base = Tala Tech
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard3D>

            {/* Tala Tech Development Share Card with Solid Contrast */}
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600 font-bold">
                <span className="text-slate-900 font-black">Tala Tech Engineering Share</span>
                <span className="font-mono tabular-nums">{100 - partnerPercentage}% remaining</span>
              </div>
              <div className="text-2xl font-black text-slate-950 font-mono tabular-nums">
                ${Math.round(talaTechShare).toLocaleString()} <span className="text-xs font-bold text-slate-600">USD</span>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Remitted to Tala Tech in the Philippines to fund developer salaries, cloud hosting, automated testing, and ongoing software delivery.
              </p>
            </div>

            {/* Quick Ledger Summary */}
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-800 font-bold flex flex-wrap items-center justify-between gap-2">
              <span>Gross Invoices: <strong className="font-mono text-slate-950">${monthlyRevenue.toLocaleString()}</strong></span>
              <span>Platform Fee: <strong className="font-mono text-slate-950">${Math.round(platformFees).toLocaleString()}</strong></span>
              <span>Net In Bank: <strong className="font-mono text-emerald-800">${Math.round(netRevenueAfterPlatform).toLocaleString()}</strong></span>
            </div>

          </div>

        </div>

        {/* 4-Step Settlement Protocol */}
        <div className="p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-sm">
          <h3 className="text-xl font-black text-slate-950 mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-sky-700" />
            <span>4-Step Documented Settlement Protocol</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Signed Agreement Prior to Work',
                desc: 'All payment terms, commission percentages, and project responsibilities are established in a formal, legally binding written agreement before technical development begins.',
              },
              {
                step: 2,
                title: 'Milestone Delivery & Invoicing',
                desc: 'Tala Tech completes and ships technical milestone deliverables. Commercial invoices and verified platform receipts are generated in official business accounts.',
              },
              {
                step: 3,
                title: 'Documented Revenue Share',
                desc: 'The agreed partner share is disbursed via documented, lawful banking or commercial payout channels with full KYC/AML compliance and itemized compensation records.',
              },
              {
                step: 4,
                title: 'Monthly Mutual Reconciliation',
                desc: 'Both parties receive itemized monthly accounting statements reconciling contract milestones, invoices, and disbursements for tax filings and independent audit verification.',
              },
            ].map((s) => (
              <div key={s.step} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-slate-900 text-cyan-400 font-mono font-black text-xs flex items-center justify-center">
                  0{s.step}
                </div>
                <h4 className="text-sm font-black text-slate-950 leading-snug">{s.title}</h4>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
