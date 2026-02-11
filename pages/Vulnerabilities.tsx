
import React, { useState } from 'react';
import { AlertCircle, Filter, Search, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import { Severity } from '../types';

const Vulnerabilities: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const mockVulnerabilities = [
    { id: 'V-001', title: 'SQL Injection in /api/login', severity: Severity.CRITICAL, status: 'Open', target: 'app.example.com', date: '2025-05-10' },
    { id: 'V-002', title: 'Reflected XSS in search parameter', severity: Severity.HIGH, status: 'In Progress', target: 'shop.example.com', date: '2025-05-11' },
    { id: 'V-003', title: 'Exposed S3 Bucket with Public Access', severity: Severity.HIGH, status: 'Open', target: 's3.amazonaws.com/backup-v2', date: '2025-05-09' },
    { id: 'V-004', title: 'Outdated jQuery Version (v1.12.4)', severity: Severity.MEDIUM, status: 'Resolved', target: 'legacy.example.com', date: '2025-05-08' },
    { id: 'V-005', title: 'Missing Security Headers (HSTS, CSP)', severity: Severity.LOW, status: 'Open', target: 'blog.example.com', date: '2025-05-12' },
  ];

  const getSeverityColor = (sev: Severity) => {
    switch(sev) {
      case Severity.CRITICAL: return 'bg-red-500 text-white';
      case Severity.HIGH: return 'bg-orange-500 text-white';
      case Severity.MEDIUM: return 'bg-yellow-500 text-slate-900';
      case Severity.LOW: return 'bg-blue-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Open': return <AlertCircle size={14} className="text-red-500" />;
      case 'In Progress': return <Clock size={14} className="text-yellow-500" />;
      case 'Resolved': return <CheckCircle size={14} className="text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Vulnerability <span className="text-pink-500">Log</span></h1>
          <p className="text-slate-500">Consolidated list of all security findings across your digital infrastructure.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
            <input type="text" placeholder="Search vulnerabilities..." className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500" />
          </div>
          <button className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 text-xs uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Finding</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Target</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Detected</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {mockVulnerabilities.map((v) => (
                <tr key={v.id} className="hover:bg-slate-800/20 transition-colors cursor-pointer group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getSeverityColor(v.severity)} bg-opacity-10`}>
                        <AlertCircle size={18} className={getSeverityColor(v.severity).replace('bg-', 'text-').split(' ')[0]} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-200">{v.title}</p>
                        <p className="text-xs text-slate-500 font-mono">{v.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${getSeverityColor(v.severity)}`}>
                      {v.severity}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-400 font-mono">{v.target}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      {getStatusIcon(v.status)}
                      {v.status}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-4">
                      <span className="text-xs text-slate-500">{v.date}</span>
                      <ChevronRight size={16} className="text-slate-700 group-hover:text-indigo-400 transition-colors" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vulnerabilities;
