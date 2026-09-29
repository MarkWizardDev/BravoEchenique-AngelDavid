import BrilliantLogo from './BrilliantLogo';
import { Globe2, Shield } from 'lucide-react';

interface FooterProps {
  onOpenReporting: () => void;
  onOpenSettings: () => void;
}

export default function Footer({ onOpenReporting, onOpenSettings }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-sky-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <BrilliantLogo size="md" theme="dark" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              NexaTech is an established remote software engineering unit based in the Philippines. Dedicated to over six years of ethical engineering, data privacy, and global expansion partnerships.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Manila, Philippines</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Bank Documented Compliance</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-slate-200 font-bold uppercase tracking-wider text-[11px]">
              Page Directory
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#story" className="hover:text-sky-300 transition-colors">
                  Company Purpose & 6-Year History
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-sky-300 transition-colors">
                  Team Roles (Our Team – You – Client)
                </a>
              </li>
              <li>
                <a href="#boundaries" className="hover:text-sky-300 transition-colors">
                  Financial-Flow Boundaries & Checklist
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-300 transition-colors">
                  Frequently Asked Questions (All 8)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-300 transition-colors">
                  Contact Us & Direct Mail
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-slate-200 font-bold uppercase tracking-wider text-[11px]">
              Direct Inquiry
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
              <div className="text-[11px] text-slate-400">Official Representative Email:</div>
              <a
                href="mailto:james@zeusguy.xyz"
                className="font-mono text-sky-300 font-semibold text-sm hover:underline block"
              >
                james@zeusguy.xyz
              </a>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={onOpenReporting}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 transition-colors text-xs font-semibold cursor-pointer"
              >
                View Reporting Logs
              </button>
              <button
                type="button"
                onClick={onOpenSettings}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs cursor-pointer"
              >
                Accessibility Mode
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} NexaTech Software Engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>WCAG 2.1 AA Compliant</span>
            <span aria-hidden="true">·</span>
            <span>VMware Sandbox Friendly</span>
            <span aria-hidden="true">·</span>
            <span>Philippine Registered Software Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
