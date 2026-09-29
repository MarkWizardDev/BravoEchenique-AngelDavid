import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, BarChart3, Search, Mail, CheckCircle2, Clock, Trash2, FileSpreadsheet, ExternalLink } from 'lucide-react';
import { EmailLog } from '../types';

interface ReportingTabProps {
  isOpen: boolean;
  onClose: () => void;
  logs: EmailLog[];
  onClearLogs: () => void;
}

export default function ReportingTab({ isOpen, onClose, logs, onClearLogs }: ReportingTabProps) {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedLog, setSelectedLog] = useState<EmailLog | null>(null);

  if (!isOpen) return null;

  const filteredLogs = logs.filter(
    (log) =>
      log.senderName.toLowerCase().includes(filterQuery.toLowerCase()) ||
      log.senderEmail.toLowerCase().includes(filterQuery.toLowerCase()) ||
      log.subject.toLowerCase().includes(filterQuery.toLowerCase()) ||
      log.id.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const handleExportCSV = () => {
    if (logs.length === 0) return;

    // Build RFC 4180 compliant CSV
    const headers = ['Log ID', 'Timestamp', 'Sender Name', 'Sender Email', 'Recipient Email', 'Subject', 'Message Snippet', 'Status'];
    
    const rows = logs.map((log) => [
      `"${log.id}"`,
      `"${new Date(log.timestamp).toLocaleString()}"`,
      `"${log.senderName.replace(/"/g, '""')}"`,
      `"${log.senderEmail.replace(/"/g, '""')}"`,
      `"${log.recipient}"`,
      `"${log.subject.replace(/"/g, '""')}"`,
      `"${log.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      `"${log.status}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `nexatech_email_logs_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-5xl h-[88vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-sky-200 overflow-hidden"
      >
        {/* Header Bar */}
        <div className="px-6 py-4.5 bg-gradient-to-r from-sky-900 via-sky-800 to-blue-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/20 text-sky-200 border border-sky-400/30">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Reporting & Communications Tab</h2>
              <p className="text-xs text-sky-200">
                Email transmission audit log and CSV data export
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Export Logs to CSV Button (Explicit user prompt requirement) */}
            <button
              type="button"
              onClick={handleExportCSV}
              disabled={logs.length === 0}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-emerald-300"
              title="Download all transmission records as CSV"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export Logs to CSV</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-sky-800 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Close reporting tab"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action / Metric Stats Row */}
        <div className="px-6 py-3.5 bg-sky-50/70 border-b border-sky-100 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Mail className="w-4 h-4 text-sky-600" />
              <span>Total Inquiries: <strong className="font-mono text-sky-900">{logs.length}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Target: <strong className="font-mono text-slate-700">james@zeusguy.xyz</strong></span>
            </div>
          </div>

          {/* Search within logs */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Search logs..."
                className="pl-8 pr-3 py-1 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-sky-500"
              />
            </div>
            {logs.length > 0 && (
              <button
                type="button"
                onClick={onClearLogs}
                className="p-1.5 text-xs text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                title="Clear transmission logs"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Logs Table Area */}
        <div className="flex-1 overflow-auto p-6">
          {logs.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">No Inquiries Sent Yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mt-1">
                Submissions sent via the Contact Us template will automatically be recorded here with complete audit timestamps.
              </p>
            </div>
          ) : (
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Log ID</th>
                    <th className="py-3 px-4">Timestamp</th>
                    <th className="py-3 px-4">Sender</th>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Recipient</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-sky-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-sky-800">{log.id}</td>
                      <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                        {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-sans font-medium">
                        {log.senderName}
                        <div className="text-[10px] text-slate-400 font-mono">{log.senderEmail}</div>
                      </td>
                      <td className="py-3 px-4 text-slate-700 font-sans max-w-xs truncate">
                        {log.subject}
                      </td>
                      <td className="py-3 px-4 text-slate-500">{log.recipient}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{log.status}</span>
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedLog(log)}
                          className="text-xs font-semibold text-sky-600 hover:text-sky-800 underline font-sans"
                        >
                          View Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between shrink-0">
          <span>Log retention: Local browser session memory and storage.</span>
          <button
            type="button"
            onClick={handleExportCSV}
            disabled={logs.length === 0}
            className="text-xs font-semibold text-sky-700 hover:underline disabled:opacity-30 disabled:no-underline"
          >
            Download CSV Format
          </button>
        </div>
      </motion.div>

      {/* Selected Log Inspector Modal */}
      <AnimatePresence>
        {selectedLog && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/40">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-white rounded-xl p-6 shadow-xl border border-sky-200"
            >
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <h4 className="text-sm font-bold text-slate-900">Message Detail — {selectedLog.id}</h4>
                <button
                  type="button"
                  onClick={() => setSelectedLog(null)}
                  className="p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400">Timestamp:</span>
                  <div className="font-mono text-slate-800">{new Date(selectedLog.timestamp).toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-slate-400">From:</span>
                  <div className="font-semibold text-slate-800">{selectedLog.senderName} &lt;{selectedLog.senderEmail}&gt;</div>
                </div>
                <div>
                  <span className="text-slate-400">To:</span>
                  <div className="font-semibold text-sky-700">{selectedLog.recipient}</div>
                </div>
                <div>
                  <span className="text-slate-400">Subject:</span>
                  <div className="font-bold text-slate-900">{selectedLog.subject}</div>
                </div>
                <div>
                  <span className="text-slate-400">Message Content:</span>
                  <div className="mt-1 p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 whitespace-pre-wrap font-mono text-[11px] leading-relaxed max-h-48 overflow-auto">
                    {selectedLog.message}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedLog(null)}
                  className="px-4 py-2 text-xs font-semibold bg-sky-600 text-white rounded-lg hover:bg-sky-500"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
