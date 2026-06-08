import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Estimator', path: '/estimator' }
  ];

  const handleNavigate = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 flex items-center px-6 md:px-12 border-b ${
        isScrolled
          ? 'bg-[#07152E]/95 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavigate('/')}
        >
          <div className="w-8 h-8 bg-[#FF6B2C] flex items-center justify-center rounded-sm font-bold text-[#07152E]">
            A
          </div>
          <span className="text-xl font-semibold tracking-widest uppercase text-white">
            Agaon <span className="font-light opacity-60">Construction</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide opacity-80 text-white">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className={`hover:text-[#FF6B2C] transition-colors cursor-pointer ${location.pathname === item.path ? 'text-[#FF6B2C]' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => handleNavigate('/contact')}
            className={`px-6 py-2 border text-xs uppercase tracking-widest transition-all cursor-pointer rounded-sm ${location.pathname === '/contact' ? 'bg-[#FF6B2C] border-[#FF6B2C] text-white' : 'border-white/20 text-white hover:bg-white hover:text-[#07152E]'}`}
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden space-x-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#07152E] border-b border-white/10 shadow-2xl px-6 py-8 flex flex-col space-y-6 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className="text-left font-sans text-base tracking-wide font-medium text-white hover:text-[#FF6B2C] py-2 border-b border-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="pt-4 flex flex-col mt-4">
              <button
                onClick={() => handleNavigate('/contact')}
                className="w-full bg-[#FF6B2C] py-3 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-sm"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

