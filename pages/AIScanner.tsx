
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ShieldCheck, Terminal, AlertTriangle, Loader2, Sparkles, Target } from 'lucide-react';
import { GroqService } from '../services/groqService';
import { ChatMessage } from '../types';

const AIScanner: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "👋 Hello! I'm RedVapt AI, your intelligent pentesting assistant. I can scan domains for vulnerabilities using advanced AI detection. Simply provide a target domain or URL to begin automated security analysis.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [target, setTarget] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const groq = GroqService.getInstance();
    const response = await groq.chat(input);

    const botMessage: ChatMessage = {
      role: 'assistant',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const startScan = (domain: string) => {
    setTarget(domain);
    setInput(`Run a full security scan on ${domain}`);
    // The handleSend logic will trigger via state if we wanted to fully automate, 
    // but typically user clicks send.
  };

  return (
    <div className="pt-24 pb-12 px-6 h-screen flex flex-col max-w-6xl mx-auto">
      <header className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-pink-500/20 rounded-xl">
            <Bot className="text-pink-500" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              AI Security Scanner
              <Sparkles size={16} className="text-pink-400" />
            </h1>
            <p className="text-slate-500 text-sm">Powered by advanced vulnerability detection</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {/* Updated model label to Pro following the service upgrade */}
          <div className="px-3 py-1 bg-slate-800 rounded-lg border border-slate-700 text-xs font-mono text-cyan-400">
            MODEL: GEMINI-3-PRO
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-xs rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            Agent Ready
          </div>
        </div>
      </header>

      <div className="flex-1 bg-slate-900/20 border border-slate-800 rounded-3xl overflow-hidden flex flex-col">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-white" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl p-4 shadow-xl ${msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-slate-800/80 text-slate-200 border border-slate-700 rounded-tl-none'
                }`}>
                <div className="text-sm whitespace-pre-wrap leading-relaxed prose prose-invert">
                  {msg.content}
                </div>
                <div className={`text-[10px] mt-2 ${msg.role === 'user' ? 'text-blue-200' : 'text-slate-500'}`}>
                  {msg.timestamp.toLocaleTimeString()}
                </div>
              </div>
              {msg.role === 'user' && (
                <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4 justify-start">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Loader2 size={20} className="text-white animate-spin" />
              </div>
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl rounded-tl-none p-4">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-slate-950/40 border-t border-slate-800">
          <form onSubmit={handleSend} className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
              <Target size={20} />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter target domain or URL to scan (e.g., example.com)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-12 pr-16 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-slate-200 placeholder:text-slate-600"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
            >
              <Send size={20} />
            </button>
          </form>
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2 scrollbar-none">
            {['Scan airuniversity.edu.pk', 'Analyze subdomains for test.com', 'Check OWASP top 10'].map(query => (
              <button
                key={query}
                onClick={() => setInput(query)}
                className="whitespace-nowrap px-4 py-1.5 bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-full text-xs transition-colors"
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIScanner;
