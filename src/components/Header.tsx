import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, KeyRound, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalPass, setPortalPass] = useState('');
  const [portalError, setPortalError] = useState('');
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

  // Handle portal submit
  const handlePortalAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!portalPass) {
      setPortalError('Signature passcode required.');
    } else {
      setPortalError('Security clearance failure: Passcode inactive or expired.');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center px-6 md:px-12 ${
          isScrolled
            ? 'h-20 bg-white/95 backdrop-blur-md border-b border-[#07152E]/10 shadow-[0_8px_30px_rgba(7,21,46,0.05)]'
            : 'h-24 bg-white/90 backdrop-blur-md border-b border-[#07152E]/5 shadow-[0_4px_20px_rgba(7,21,46,0.02)]'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavigate('/')}
          >
            <div className={`w-8 h-8 flex items-center justify-center rounded-none font-sans font-bold text-lg tracking-tight transition-transform duration-300 group-hover:scale-110 bg-[#07152E] text-white`}>
              A
            </div>
            <span className="text-xl font-display font-semibold tracking-[0.25em] uppercase transition-colors duration-300 select-none">
              <span className="text-[#07152E]">Agaon</span>
              <span className="font-sans font-light text-[10px] tracking-[0.2em] ml-2 text-[#07152E]/55">
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
                      ? 'text-[#FF6B2C]'
                      : 'text-[#07152E]/75 hover:text-[#FF6B2C]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B2C]"
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
              onClick={() => {
                setPortalPass('');
                setPortalError('');
                setPortalOpen(true);
              }}
              className="px-8 py-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer rounded-none border border-[#07152E] text-[#07152E] hover:bg-[#FF6B2C] hover:border-[#FF6B2C] hover:text-white"
            >
              Client Portal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none transition-colors duration-300 text-[#07152E] hover:text-[#FF6B2C]"
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
              className="absolute top-full left-0 right-0 bg-white border-b border-[#07152E]/10 shadow-[0_15px_40px_rgba(0,0,0,0.085)] px-6 py-8 flex flex-col space-y-6 lg:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`text-left font-display text-xl font-medium py-2 border-b border-[#07152E]/5 flex justify-between items-center ${
                      location.pathname === item.path ? 'text-[#FF6B2C]' : 'text-[#07152E]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-30" />
                  </button>
                ))}
              </div>
              
              <div className="pt-4 flex flex-col">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setPortalPass('');
                    setPortalError('');
                    setPortalOpen(true);
                  }}
                  className="w-full bg-[#07152E] py-4 text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] rounded-none hover:bg-[#FF6B2C] transition-colors"
                >
                  Client Portal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Client Portal Modal */}
      <AnimatePresence>
        {portalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#07152E]/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white max-w-md w-full border border-[#07152E]/10 py-10 px-8 relative"
            >
              <button 
                onClick={() => setPortalOpen(false)}
                className="absolute top-6 right-6 text-[#07152E]/60 hover:text-[#07152E] transition-colors"
                aria-label="Close Portal"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#FF6B2C]/10 flex items-center justify-center text-[#FF6B2C] mb-6">
                  <Shield className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#07152E] mb-2">Agaon Client Portal</h3>
                <p className="text-[#07152E]/60 text-xs font-sans tracking-wide leading-relaxed max-w-xs mb-8">
                  Enter your enterprise credentials or active signature passcode to access blueprints, telemetry logs, and live timelines.
                </p>
              </div>

              <form onSubmit={handlePortalAccess} className="space-y-6">
                <div className="relative group">
                  <KeyRound className="absolute left-0 bottom-4 w-4 h-4 text-[#FF6B2C]" />
                  <input 
                    type="password" 
                    value={portalPass}
                    onChange={(e) => {
                      setPortalPass(e.target.value);
                      setPortalError('');
                    }}
                    placeholder="Signature Passcode"
                    className="w-full bg-transparent border-b border-[#07152E]/10 pb-3 pl-8 text-sm focus:outline-none focus:border-[#FF6B2C] transition-colors rounded-none text-[#07152E] placeholder:text-[#07152E]/30 font-mono"
                  />
                </div>

                {portalError && (
                  <p className="text-red-500 font-sans text-xs tracking-wide leading-relaxed bg-red-50 p-3">
                    {portalError}
                  </p>
                )}

                <button 
                  type="submit"
                  className="w-full bg-[#07152E] text-white py-4 text-center font-sans font-bold text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#FF6B2C]"
                >
                  Verify Access Clearance
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-[#07152E]/5 text-center">
                <p className="text-[9px] font-sans text-[#07152E]/40 uppercase tracking-[0.15em] leading-relaxed">
                  Lost credentials? Reach out to your project supervisor or email proposals@agaon.co.in
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

