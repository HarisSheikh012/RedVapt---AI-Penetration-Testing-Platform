
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Info, ShieldCheck, Terminal, AlertCircle, FileText, Zap, Box } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
    { name: 'Services', path: '/services', icon: <Box size={18} /> },
    { name: 'AI Scanner', path: '/ai-scanner', icon: <Zap size={18} className="text-pink-500" /> },
    { name: 'Tools', path: '/tools', icon: <Terminal size={18} /> },
    { name: 'Vulnerabilities', path: '/vulnerabilities', icon: <AlertCircle size={18} /> },
    { name: 'Reports', path: '/reports', icon: <FileText size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-pink-500 to-indigo-600 p-2 rounded-lg">
          <ShieldCheck className="text-white" size={24} />
        </div>
        <div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-400">
            RedVapt
          </span>
          <p className="text-[10px] text-slate-500 leading-none">Automated Pentesting Platform</p>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isActive(item.path)
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {item.icon}
            {item.name}
            {item.name === 'AI Scanner' && (
              <span className="text-[8px] bg-pink-500 text-white px-1 rounded ml-1">AI</span>
            )}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login" className="hidden sm:block text-slate-400 hover:text-white text-sm font-medium">
          Login
        </Link>
        <Link to="/book-demo" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-pink-500/20 hover:scale-105 transition-transform flex items-center gap-2">
          <Zap size={16} />
          Book Demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
