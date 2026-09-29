export interface EmailLog {
  id: string;
  timestamp: string;
  senderName: string;
  senderEmail: string;
  recipient: string;
  subject: string;
  message: string;
  status: 'Sent' | 'Delivered' | 'Pending';
}

export interface UserSettings {
  highContrast: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  reducedMotion: boolean;
  screenReaderMode: boolean;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'role' | 'financial' | 'security' | 'trust';
  securityNote?: string;
}
