import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { List, X, Sun, Moon } from '@phosphor-icons/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      if (location.pathname === '/web-services') {
        const sections = ['home', 'services', 'pricing', 'contact'];
        const scrollPosition = window.scrollY + 100; // Offset for navbar height
        
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (href: string) => {
    // If we're not on the web-services page, navigate there first
    if (location.pathname !== '/web-services') {
      navigate('/web-services');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-b border-slate-200 dark:border-cyan-500/40 shadow-sm dark:shadow-cyan-500/5'
            : 'bg-transparent border-b border-transparent dark:border-cyan-500/20'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/web-services"
            className="flex items-center gap-2 font-bold text-3xl tracking-tighter cursor-pointer hover:scale-105 transition-transform"
            aria-label="Navigate to web services home"
          >
            <span className="text-slate-900 dark:text-white transition-colors">NWS</span>
            <span className="text-cyan-600 dark:text-cyan-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const sectionName = link.href.replace('#', '');
              const isActive = activeSection === sectionName;
              
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-xs font-bold uppercase tracking-widest transition-all duration-300 pb-3 group ${
                    isActive
                      ? 'text-cyan-600 dark:text-cyan-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 origin-left ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-slate-300 dark:bg-white/50 group-hover:w-full transition-all duration-300 origin-left ${
                      isActive ? 'hidden' : ''
                    }`}
                  ></span>
                </button>
              );
            })}
            <Link
              to="/our-work"
              className="relative text-xs font-bold uppercase tracking-widest transition-all duration-300 pb-3 group text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              aria-label="View our work portfolio"
            >
              Our Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-300 dark:bg-white/50 group-hover:w-full transition-all duration-300 origin-left"></span>
            </Link>
            <Link
              to="/"
              className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors pb-3"
              aria-label="Go to main portfolio"
            >
              Portfolio
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle light/dark mode"
            >
              {isDark ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-[90] bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 animate-fade-in transition-colors duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {navLinks.map((link) => {
            const sectionName = link.href.replace('#', '');
            const isActive = activeSection === sectionName;
            
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-3xl font-bold uppercase tracking-widest transition-all ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400 scale-110'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                ></span>
              </button>
            );
          })}
          <Link
            to="/our-work"
            className="text-3xl font-bold uppercase tracking-widest transition-all text-slate-500 hover:text-slate-900 dark:hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Work
          </Link>
          <Link
            to="/"
            className="text-2xl font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;