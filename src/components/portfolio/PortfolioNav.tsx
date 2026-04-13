import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, X, Sun, Moon } from '@phosphor-icons/react';

interface PortfolioNavProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const PortfolioNav = ({ activeSection, scrollToSection, theme, toggleTheme }: PortfolioNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

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
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 font-bold text-3xl tracking-tighter cursor-pointer hover:scale-105 transition-transform"
            aria-label="Navigate to home section"
          >
            <span className="text-slate-900 dark:text-white transition-colors">NMA</span>
            <span className="text-cyan-600 dark:text-cyan-400">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {['About', 'Services', 'Work', 'Journey', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-xs font-bold uppercase tracking-widest transition-all duration-300 pb-3 group ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label={`Navigate to ${item} section`}
                aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 origin-left ${
                    activeSection === item.toLowerCase() ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                ></span>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-slate-300 dark:bg-white/50 group-hover:w-full transition-all duration-300 origin-left ${
                    activeSection === item.toLowerCase() ? 'hidden' : ''
                  }`}
                ></span>
              </button>
            ))}
            <Link
              to="/web-services"
              className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors pb-3"
            >
              Web Services
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle light/dark mode"
            >
              {theme === 'dark' ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
            </button>

            {/* Mobile Menu Trigger */}
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
          {['Home', 'About', 'Services', 'Work', 'Journey', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`relative text-3xl font-bold uppercase tracking-widest transition-all ${
                activeSection === item.toLowerCase()
                  ? 'text-cyan-600 dark:text-cyan-400 scale-110'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              ></span>
            </button>
          ))}
          <Link
            to="/web-services"
            className="text-2xl font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Web Services
          </Link>
        </div>
      )}
    </>
  );
};

export default PortfolioNav;
