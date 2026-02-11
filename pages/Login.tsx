
import React from 'react';
import { ShieldCheck, Lock, Mail, Github, Eye, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl mb-6 shadow-xl shadow-indigo-600/20">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-slate-500">Secure access to the RedVapt platform</p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 px-1">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs text-indigo-400 hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3 pl-12 pr-12 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/20 transition-all active:scale-95">
              Sign In
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest text-slate-600 font-bold">
              <span className="bg-slate-900 px-4">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-sm font-medium transition-colors border border-slate-700">
              <Chrome size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-sm font-medium transition-colors border border-slate-700">
              <Github size={18} /> Github
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          Don't have an account? <Link to="/book-demo" className="text-indigo-400 font-bold hover:underline">Book a Demo</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
