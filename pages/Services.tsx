
import React from 'react';
import { Search, ShieldCheck, Zap, FileText, Bug, Lock, Server, Cloud } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features }: any) => (
  <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-slate-600 transition-all group">
    <div className="p-4 bg-slate-800 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} className="text-cyan-400" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-500 mb-8">{description}</p>
    <ul className="space-y-3">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
          <ShieldCheck size={14} className="text-green-500" />
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-pink-500 font-bold tracking-widest text-xs uppercase">Capabilities</span>
        <h1 className="text-5xl font-bold mt-4 mb-6">Our Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">Security Services</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl">
          From automated discovery to deep exploitation testing, we provide a full spectrum of offensive security services powered by AI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={Search}
          title="Automated Recon"
          description="Surface-level asset discovery to map your entire digital footprint across domains and IPs."
          features={['Subdomain Enumeration', 'Cloud Bucket Discovery', 'OSINT Analysis']}
        />
        <ServiceCard 
          icon={Zap}
          title="Dynamic Scanning"
          description="Interactive vulnerability analysis of web applications and APIs using AI-driven crawling."
          features={['OWASP Top 10', 'API Endpoints', 'JavaScript Analysis']}
        />
        <ServiceCard 
          icon={Bug}
          title="Vulnerability Validation"
          description="Automated exploitation attempts to confirm findings and eliminate false positives."
          features={['Payload Customization', 'Non-destructive Testing', 'Evidence Capture']}
        />
        <ServiceCard 
          icon={Lock}
          title="Auth Testing"
          description="Deep testing of authentication mechanisms, sessions, and multi-factor logic."
          features={['JWT Analysis', 'Broken Access Control', 'Session Hijacking']}
        />
        <ServiceCard 
          icon={Server}
          title="Infrastructure Audit"
          description="Scanning server configurations, open ports, and vulnerable services."
          features={['SSH & SSL Audits', 'Database Security', 'Port Scanning']}
        />
        <ServiceCard 
          icon={FileText}
          title="Compliance Reporting"
          description="Detailed executive and technical reports mapped to industry standards like SOC2/PCI."
          features={['Custom Templates', 'Remediation Advice', 'PDF & JSON Export']}
        />
      </div>
    </div>
  );
};

export default Services;
