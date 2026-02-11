
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import AIScanner from './pages/AIScanner';
import About from './pages/About';
import Services from './pages/Services';
import Tools from './pages/Tools';
import Vulnerabilities from './pages/Vulnerabilities';
import Reports from './pages/Reports';
import Login from './pages/Login';
import BookDemo from './pages/BookDemo';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#020617] text-slate-100">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ai-scanner" element={<AIScanner />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/vulnerabilities" element={<Vulnerabilities />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book-demo" element={<BookDemo />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[0%] right-[-5%] w-[35%] h-[35%] bg-pink-600/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </Router>
  );
};

export default App;
