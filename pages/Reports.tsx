
import React from 'react';
import { FileText, Download, Eye, Calendar, ArrowUpRight, ShieldCheck, Share2 } from 'lucide-react';

const ReportCard = ({ title, type, date, issues, score }: any) => (
  <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
    <div className="flex items-center gap-4">
      <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400">
        <FileText size={32} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
          <span className="flex items-center gap-1 uppercase tracking-wider font-bold text-indigo-400">{type}</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">{issues} Issues Detected</span>
        </div>
      </div>
    </div>
    
    <div className="flex items-center gap-8 w-full sm:w-auto">
      <div className="hidden lg:block text-right">
        <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Security Score</p>
        <div className="flex items-center gap-2">
           <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
             <div className="h-full bg-green-500" style={{ width: `${score}%` }}></div>
           </div>
           <span className="text-sm font-bold text-green-500">{score}%</span>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <button className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors" title="View Report">
          <Eye size={20} />
        </button>
        <button className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors" title="Download PDF">
          <Download size={20} />
        </button>
      </div>
    </div>
  </div>
);

const Reports: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Security <span className="text-cyan-400">Reports</span></h1>
          <p className="text-slate-500">Access and manage all past penetration testing analysis.</p>
        </div>
        <button className="bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors hidden md:block">
          Generate New Report
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl text-center">
          <h4 className="text-slate-500 text-xs uppercase font-bold mb-2">Total Reports</h4>
          <p className="text-4xl font-bold">42</p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl text-center">
          <h4 className="text-slate-500 text-xs uppercase font-bold mb-2">High Severity</h4>
          <p className="text-4xl font-bold text-red-500">12</p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl text-center">
          <h4 className="text-slate-500 text-xs uppercase font-bold mb-2">Avg. Score</h4>
          <p className="text-4xl font-bold text-green-500">84%</p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl text-center">
          <h4 className="text-slate-500 text-xs uppercase font-bold mb-2">Completed Scans</h4>
          <p className="text-4xl font-bold text-indigo-500">156</p>
        </div>
      </div>

      <div className="space-y-4">
        <ReportCard title="Q2 Security Audit - Main Infrastructure" type="Full Scan" date="May 12, 2025" issues={8} score={92} />
        <ReportCard title="API Vulnerability Report" type="Deep Scan" date="May 08, 2025" issues={3} score={88} />
        <ReportCard title="Web Application Pentest (Staging)" type="Quick Scan" date="Apr 25, 2025" issues={14} score={65} />
        <ReportCard title="Weekly Security Pulse" type="Auto Scan" date="Apr 18, 2025" issues={2} score={98} />
        <ReportCard title="Asset Discovery Report" type="Recon Only" date="Apr 10, 2025" issues={0} score={100} />
      </div>

      <div className="mt-12 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex items-center justify-between">
         <div className="flex items-center gap-4">
           <Share2 className="text-indigo-400" />
           <div>
             <h4 className="font-bold">Automated Report Delivery</h4>
             <p className="text-sm text-slate-500">Setup recurring emails to your security team.</p>
           </div>
         </div>
         <button className="text-cyan-400 text-sm font-bold flex items-center gap-1 hover:underline">
           Configure Settings <ArrowUpRight size={14} />
         </button>
      </div>
    </div>
  );
};

export default Reports;
