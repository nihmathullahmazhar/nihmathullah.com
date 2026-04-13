import { useState, useEffect } from 'react';
import PortfolioNav from '@/components/portfolio/PortfolioNav';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import WorkSection from '@/components/portfolio/WorkSection';
import JourneySection from '@/components/portfolio/JourneySection';
import ContactSection from '@/components/portfolio/ContactSection';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter';
import PromoModal from '@/components/portfolio/PromoModal';
import Loader from '@/components/portfolio/loader';
import SEOHEAD  from '@/components/SEOHead';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showPromo, setShowPromo] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem('promoSeen');
    if (!hasSeenPromo && !isLoading) {
      const timer = setTimeout(() => setShowPromo(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const closePromo = () => {
    setShowPromo(false);
    sessionStorage.setItem('promoSeen', 'true');
  };

  const handlePromoContact = () => {
    closePromo();
    scrollToSection('contact');
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'journey', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <SEOHEAD 
        title="Nihmathullah M. Azhar - Web Developer & Writer | Professional Web Services Worldwide"
        description="Nihmathullah M. Azhar - Professional web developer and creative writer serving clients worldwide. Based in Sri Lanka, offering web development services globally: website design, landing pages, e-commerce solutions, and custom web applications. Portfolio showcasing international web projects and creative writing."
        path="/"
        keywords="nihmathullah, nihmathullah azhar, nihmathullah web services, web developer, web services, website design, web development, websites, web pages, landing pages, e-commerce websites, custom websites, professional web developer, web design, react developer, front-end developer, full-stack developer, business websites, restaurant websites, online stores, creative writer, web applications, responsive websites, affordable web design, international web developer, global web services, worldwide web development, sri lanka web developer, colombo"
      />
      <div className="min-h-screen font-sans overflow-x-hidden relative bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <PromoModal isOpen={showPromo} onClose={closePromo} onContact={handlePromoContact} />
        <PortfolioNav activeSection={activeSection} scrollToSection={scrollToSection} theme={theme} toggleTheme={toggleTheme} />

        {/* Dynamic Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[length:50px_50px] opacity-40 dark:opacity-[0.07] animate-grid-move" style={{ transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)' }}></div>
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"></div>
          <div className="absolute bottom-[0%] right-[-10%] w-[500px] h-[500px] bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"></div>
        </div>

        <main id="main-content" className="relative z-10 pt-24 pb-10 px-6 max-w-7xl mx-auto space-y-12 md:space-y-16">
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <ServicesSection scrollToSection={scrollToSection} />
          <WorkSection />
          <JourneySection />
          <ContactSection />
        </main>

        <PortfolioFooter />
      </div>
    </>
  );
};

export default Index;