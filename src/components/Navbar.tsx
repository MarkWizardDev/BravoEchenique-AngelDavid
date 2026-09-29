import { useState } from 'react';
import { Settings, BarChart3, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import BrilliantLogo from './BrilliantLogo';

interface NavbarProps {
  onOpenSettings: () => void;
  onOpenReporting: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenSettings, onOpenReporting }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Story & Purpose', href: '#story' },
    { label: 'Team Roles', href: '#roles' },
    { label: 'Profit Share', href: '#profit', highlight: true },
    { label: 'Financial Boundaries', href: '#boundaries' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-colors">
      {/* High-Contrast Luminous Accent Line */}
      <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-sky-600 to-blue-600 w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark with guaranteed space margin */}
        <a
          href="#"
          className="shrink-0 flex items-center pr-4 sm:pr-8 focus-visible:outline-2 focus-visible:outline-sky-500 rounded-lg p-1 -ml-1 transition-transform active:scale-98"
          aria-label="Tala Tech Home"
        >
          <BrilliantLogo size="md" />
        </a>

        {/* Zone 2: Navigation links with deep contrast and proper gap */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-bold text-slate-800"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-all duration-200 py-1 relative hover:text-sky-600 whitespace-nowrap group ${
                link.highlight ? 'text-sky-700 font-extrabold' : ''
              }`}
            >
              <span>{link.label}</span>
              {link.highlight && (
                <span className="ml-1.5 inline-flex items-center gap-0.5 text-[10px] uppercase font-black tracking-wider text-white bg-sky-600 px-2 py-0.5 rounded-full shadow-xs" aria-hidden="true">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-200" />
                  <span>Focus</span>
                </span>
              )}
              {/* Bottom active hover line */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-200 rounded-full" />
            </a>
          ))}
          {/* Reporting tab trigger button in nav */}
          <button
            onClick={onOpenReporting}
            className="flex items-center gap-1.5 py-1 text-slate-700 hover:text-sky-600 transition-colors font-bold whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500 rounded cursor-pointer"
            aria-label="Open Reporting and Email Logs Tab"
          >
            <BarChart3 className="w-4 h-4 text-sky-600" aria-hidden="true" />
            <span>Logs</span>
          </button>
        </nav>

        {/* Zone 3: Primary Actions with High Contrast */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-xl text-slate-700 hover:text-sky-700 hover:bg-slate-100 transition-colors border border-slate-200 focus-visible:outline-2 focus-visible:outline-sky-500 cursor-pointer shadow-2xs"
            title="Accessibility & Display Settings"
            aria-label="Accessibility & Display Settings"
          >
            <Settings className="w-5 h-5 text-slate-700" />
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-sm shadow-sky-600/30 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-sky-700 whitespace-nowrap active:scale-95"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-sky-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-900 hover:text-sky-600 transition-colors border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReporting();
            }}
            className="flex items-center gap-2 w-full py-2 text-base font-bold text-sky-700 border-b border-slate-100"
          >
            <BarChart3 className="w-4 h-4 text-sky-600" />
            <span>Reporting Logs & CSV Export</span>
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-2.5 px-4 text-sm font-bold text-white bg-sky-600 rounded-xl shadow-sm"
          >
            Get In Touch (james@zeusguy.xyz)
          </a>
        </div>
      )}
    </header>
  );
}
