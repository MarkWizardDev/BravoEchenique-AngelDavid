import { motion } from 'motion/react';
import { X, Eye, Type, Volume2, Sparkles, Check, RotateCcw } from 'lucide-react';
import { UserSettings } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: UserSettings;
  onUpdateSettings: (newSettings: Partial<UserSettings>) => void;
  onResetSettings: () => void;
}

export default function SettingsModal({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetSettings,
}: SettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-sky-100 overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-sky-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Eye className="w-5 h-5 text-sky-300" />
            <div>
              <h3 className="text-base font-bold">User Display & Accessibility Settings</h3>
              <p className="text-xs text-sky-200">WCAG 2.1 AA Compliant Preferences</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-sky-200 hover:text-white hover:bg-sky-800 transition-colors"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-6">
          
          {/* 1. High Contrast Text Mode (Explicit requirement: persists across sessions) */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-sky-50/60 border border-sky-100">
            <div className="space-y-1 pr-4">
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>High-Contrast Text Mode</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">
                  WCAG AAA
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sharpens font contrast to ultra-deep navy (#032b43) and reinforces structural borders for optimal readability.
              </p>
              <div className="text-[11px] text-sky-700 font-medium">
                ✓ Persists automatically across your browser sessions
              </div>
            </div>

            {/* Toggle switch */}
            <button
              type="button"
              role="switch"
              aria-checked={settings.highContrast}
              onClick={() => onUpdateSettings({ highContrast: !settings.highContrast })}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 ${
                settings.highContrast ? 'bg-sky-700' : 'bg-slate-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  settings.highContrast ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* 2. Text Scaling */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 uppercase tracking-wide">
              <span className="flex items-center gap-1.5">
                <Type className="w-4 h-4 text-sky-600" />
                Text Sizing Scale
              </span>
              <span className="text-sky-600 capitalize font-mono">{settings.fontSize}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'normal', label: 'Default (16px)' },
                { id: 'large', label: 'Large (18px)' },
                { id: 'xlarge', label: 'Extra Large (20px)' },
              ].map((size) => (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => onUpdateSettings({ fontSize: size.id as any })}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                    settings.fontSize === size.id
                      ? 'border-sky-600 bg-sky-50 text-sky-800 shadow-2xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Screen Reader Optimization Mode */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="space-y-0.5 pr-4">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-sky-600" />
                <span>Screen Reader Enhancements</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Activates explicit ARIA labels and contextual table narration tags.
              </p>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={settings.screenReaderMode}
              onClick={() => onUpdateSettings({ screenReaderMode: !settings.screenReaderMode })}
              className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                settings.screenReaderMode ? 'bg-sky-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200 ${
                  settings.screenReaderMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* 4. Reduced Motion Mode */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="space-y-0.5 pr-4">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Reduce Motion & Parallax</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Smooths out animations for enhanced vestibular comfort.
              </p>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={settings.reducedMotion}
              onClick={() => onUpdateSettings({ reducedMotion: !settings.reducedMotion })}
              className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                settings.reducedMotion ? 'bg-sky-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200 ${
                  settings.reducedMotion ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onResetSettings}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-sky-600 text-white rounded-lg hover:bg-sky-500 shadow-xs"
          >
            Apply & Save
          </button>
        </div>
      </motion.div>
    </div>
  );
}
