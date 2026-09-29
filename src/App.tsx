import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PurposeHistory from './components/PurposeHistory';
import TeamRolesDiagram from './components/TeamRolesDiagram';
import FinancialFlowBoundaries from './components/FinancialFlowBoundaries';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ReportingTab from './components/ReportingTab';
import SettingsModal from './components/SettingsModal';
import { EmailLog, UserSettings } from './types';

const STORAGE_KEY_SETTINGS = 'nexatech_user_settings_v1';
const STORAGE_KEY_LOGS = 'nexatech_email_logs_v1';

const defaultSettings: UserSettings = {
  highContrast: false,
  fontSize: 'normal',
  reducedMotion: false,
  screenReaderMode: false,
};

const initialSampleLogs: EmailLog[] = [
  {
    id: 'TTL-849102',
    timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
    senderName: 'David Vance',
    senderEmail: 'david.vance@example.org',
    recipient: 'james@zeusguy.xyz',
    subject: 'Partnership Inquiry & Collaboration Terms',
    message: 'Hello James, I am interested in exploring the non-technical regional partner role. Please send over the VMware sandbox instructions.',
    status: 'Delivered',
  },
  {
    id: 'TTL-719321',
    timestamp: new Date(Date.now() - 3600000 * 22).toISOString(),
    senderName: 'Elena Rostova',
    senderEmail: 'elena.rostova@techtrade.eu',
    recipient: 'james@zeusguy.xyz',
    subject: 'Banking Documentation & Compliance Question',
    message: 'Requesting verification invoice template for local banking compliance regarding Upwork client milestones.',
    status: 'Delivered',
  },
];

export default function App() {
  // Load settings with session persistence
  const [settings, setSettings] = useState<UserSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
      return saved ? JSON.parse(saved) : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  // Load email logs with session persistence
  const [emailLogs, setEmailLogs] = useState<EmailLog[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LOGS);
      return saved ? JSON.parse(saved) : initialSampleLogs;
    } catch {
      return initialSampleLogs;
    }
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isReportingOpen, setIsReportingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Persist settings whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  }, [settings]);

  // Persist logs whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(emailLogs));
    } catch (e) {
      console.error('Failed to save email logs:', e);
    }
  }, [emailLogs]);

  const handleUpdateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleResetSettings = () => {
    setSettings(defaultSettings);
  };

  const handleAddEmailLog = (newLog: EmailLog) => {
    setEmailLogs((prev) => [newLog, ...prev]);
  };

  const handleClearLogs = () => {
    setEmailLogs([]);
  };

  // Font size classes
  const fontSizeClass =
    settings.fontSize === 'xlarge'
      ? 'text-lg'
      : settings.fontSize === 'large'
      ? 'text-[17px]'
      : 'text-base';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 relative ${
        settings.highContrast ? 'high-contrast bg-[#E8F4FC]' : 'bg-[#F2F8FD]'
      } ${fontSizeClass}`}
    >
      {/* Screen Reader live status announcement if enabled */}
      {settings.screenReaderMode && (
        <div className="sr-only" aria-live="polite">
          High-accessibility screen reader mode enabled. NexaTech Introduction Page ready.
        </div>
      )}

      {/* Top Bar navigation */}
      <Navbar
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenReporting={() => setIsReportingOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        <Hero />
        <PurposeHistory />
        <TeamRolesDiagram />
        <FinancialFlowBoundaries />
        <FaqSection />
        <ContactSection
          onEmailSent={handleAddEmailLog}
          onOpenReporting={() => setIsReportingOpen(true)}
        />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenReporting={() => setIsReportingOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Reporting Tab Modal (with CSV export) */}
      <ReportingTab
        isOpen={isReportingOpen}
        onClose={() => setIsReportingOpen(false)}
        logs={emailLogs}
        onClearLogs={handleClearLogs}
      />

      {/* Settings Modal (Persisted high-contrast, accessibility toggles) */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onResetSettings={handleResetSettings}
      />
    </div>
  );
}
