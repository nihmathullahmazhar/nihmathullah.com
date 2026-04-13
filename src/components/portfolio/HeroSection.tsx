import { LinkedinLogo, GithubLogo, YoutubeLogo, TiktokLogo, InstagramLogo, FacebookLogo, EnvelopeSimple, ArrowDown } from '@phosphor-icons/react';
import TiltCard from './TiltCard';
import ProfileCard from './ProfileCard';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative" tabIndex={-1}>
      <div className="w-full lg:flex-1 space-y-8 md:space-y-10 animate-fade-in relative z-20 text-center md:text-left flex flex-col justify-center">
        <div>
          <h2 className="text-xl md:text-2xl font-light text-slate-500 dark:text-slate-400 mb-2 tracking-wide transition-colors">Hello, I'm</h2>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tight transition-colors">
            Nihmathullah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 animate-pulse">
              M. Azhar.
            </span>
          </h1>
        </div>

        <div className="space-y-4 pl-0 md:pl-6 border-l-0 md:border-l-2 border-cyan-500/50">
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-light transition-colors">
            Upcoming <strong className="text-slate-900 dark:text-white font-bold">Developer</strong> & <strong className="text-slate-900 dark:text-white font-bold">Writer</strong>.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto md:mx-0 leading-relaxed transition-colors">
            Founder of{' '}
            <a
              href="https://www.instagram.com/nihmathullahthewriter/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-500 dark:hover:text-purple-300 transition-colors hover:underline"
            >
              #nihmathullahthewriter
            </a>
            .
          </p>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 pt-4 text-xl md:text-3xl text-slate-400 dark:text-slate-400" aria-label="Social media links">
          <a href="https://www.linkedin.com/in/nihmathullahmazhar/" className="hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="LinkedIn profile">
            <LinkedinLogo weight="fill" />
          </a>
          <a href="https://github.com/nihmathullahmazhar" className="hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="GitHub profile">
            <GithubLogo weight="fill" />
          </a>
          <a href="https://youtube.com/@nihmathullahmazhar?si=CMmAnTV8UX4Sw5Lu" className="hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="YouTube channel">
            <YoutubeLogo weight="fill" />
          </a>
          <a href="https://www.tiktok.com/@_nihmathullah_" className="hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="TikTok profile">
            <TiktokLogo weight="fill" />
          </a>
          <a href="https://www.instagram.com/_nihmathullah_/" className="hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="Instagram profile">
            <InstagramLogo weight="fill" />
          </a>
          <a href="https://web.facebook.com/nihmathullah.m.azhar.7/" className="hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="Facebook profile">
            <FacebookLogo weight="fill" />
          </a>
          <a href="mailto:nihmathullahmazhar@gmail.com" className="hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="Email contact">
            <EnvelopeSimple weight="fill" />
          </a>
        </nav>
      </div>

      <div className="hidden md:flex flex-1 w-full lg:h-full items-center justify-center relative z-20" aria-hidden="true">
        <TiltCard>
          <ProfileCard />
        </TiltCard>
      </div>

      <div className="absolute bottom-4 left-0 w-full flex flex-col items-center gap-2 animate-bounce md:hidden opacity-50" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
        <ArrowDown size={16} weight="bold" className="text-cyan-500" />
      </div>
    </section>
  );
};

export default HeroSection;
