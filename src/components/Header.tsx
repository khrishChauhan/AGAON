import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, KeyRound, ArrowRight } from 'lucide-react';
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
    { label: 'Home', path: '/' },
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

  // Determine if top nav is over dark background
  const isDarkPage = ['/services', '/contact'].includes(location.pathname);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center px-6 md:px-12 ${
          isScrolled
            ? 'h-20 bg-white/95 backdrop-blur-md border-b border-[#111844]/10 shadow-[0_8px_30px_rgba(17,24,68,0.05)]'
            : 'h-24 bg-white/90 backdrop-blur-md border-b border-[#111844]/5 shadow-[0_4px_20px_rgba(17,24,68,0.02)]'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavigate('/')}
          >
            <div className={`w-8 h-8 flex items-center justify-center rounded-none font-sans font-bold text-lg tracking-tight transition-transform duration-300 group-hover:scale-110 bg-[#111844] text-white`}>
              A
            </div>
            <span className="text-xl font-display font-semibold tracking-[0.25em] uppercase transition-colors duration-300 select-none">
              <span className="text-[#111844]">Agaon</span>
              <span className="font-sans font-light text-[10px] tracking-[0.2em] ml-2 text-[#7288AE]/55">
                CONSTRUCTION
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-10 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`relative py-1 transition-all duration-300 cursor-pointer select-none rounded-none ${
                    isActive
                      ? 'text-[#4B5694]'
                      : 'text-[#7288AE]/75 hover:text-[#4B5694]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4B5694]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button: Client Portal */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavigate('/contact')}
              className="px-8 py-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer rounded-none border border-[#111844] text-[#111844] hover:bg-[#4B5694] hover:border-[#4B5694] hover:text-white"
            >
              Client Portal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none transition-colors duration-300 text-[#111844] hover:text-[#4B5694]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
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
              className="absolute top-full left-0 right-0 bg-white border-b border-[#111844]/10 shadow-[0_15px_40px_rgba(0,0,0,0.085)] px-6 py-8 flex flex-col space-y-6 lg:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`text-left font-display text-xl font-medium py-2 border-b border-[#111844]/5 flex justify-between items-center ${
                      location.pathname === item.path ? 'text-[#4B5694]' : 'text-[#111844]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-30" />
                  </button>
                ))}
              </div>
              
              <div className="pt-4 flex flex-col">
                <button
                  onClick={() => handleNavigate('/contact')}
                  className="w-full bg-[#111844] py-4 text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] rounded-none hover:bg-[#4B5694] transition-colors"
                >
                  Client Portal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

