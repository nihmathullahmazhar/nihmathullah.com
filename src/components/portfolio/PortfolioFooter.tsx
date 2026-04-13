import { Code, FigmaLogo, ChalkboardTeacher, PenNib, Book, Article, FileCode, LinkedinLogo, GithubLogo, YoutubeLogo, TiktokLogo, InstagramLogo, FacebookLogo } from '@phosphor-icons/react';

const PortfolioFooter = () => {
  return (
    <footer className="relative py-12 overflow-hidden border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#020202] transition-colors duration-300" role="contentinfo">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-100/30 dark:from-cyan-900/5 to-transparent pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Animated Marquee with Specialties */}
        <div className="mb-12 overflow-hidden border-b border-slate-200 dark:border-white/5 pb-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Marquee Content - Doubled for loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span className="inline-flex items-center gap-2 mx-6 text-slate-500 text-sm font-medium tracking-wide">
                  <Code size={16} weight="fill" className="text-cyan-600 dark:text-cyan-400" /> Web Development
                </span>
                <span className="inline-flex items-center gap-2 mx-6 text-slate-500 text-sm font-medium tracking-wide">
                  <FigmaLogo size={16} weight="fill" className="text-purple-600 dark:text-purple-400" /> UI/UX Design
                </span>
                <div className="inline-flex items-center gap-2 mx-6 text-slate-500 text-sm font-medium tracking-wide">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full" style={{ backgroundColor: '#21759b', color: 'white', fontWeight: 'bold', fontSize: '0.75rem' }}>
                    W
                  </div>
                  WordPress
                </div>
                <span className="inline-flex items-center gap-2 mx-6 text-slate-500 text-sm font-medium tracking-wide">
                  <ChalkboardTeacher size={16} weight="fill" className="text-green-600 dark:text-green-400" /> Tutoring
                </span>
                <span className="inline-flex items-center gap-2 mx-6 text-slate-500 text-sm font-medium tracking-wide">
                  <PenNib size={16} weight="fill" className="text-pink-600 dark:text-pink-400" /> Creative Writing
                </span>
                <span className="inline-flex items-center gap-2 mx-6 text-slate-500 text-sm font-medium tracking-wide">
                  <Book size={16} weight="fill" className="text-purple-600 dark:text-purple-400" /> Poetry
                </span>
                <span className="inline-flex items-center gap-2 mx-6 text-slate-500 text-sm font-medium tracking-wide">
                  <Article size={16} weight="fill" className="text-cyan-600 dark:text-cyan-400" /> Articles
                </span>
                <span className="inline-flex items-center gap-2 mx-6 text-slate-500 text-sm font-medium tracking-wide">
                  <FileCode size={16} weight="fill" className="text-green-600 dark:text-green-400" /> Scripting
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Nihmathullah M. Azhar</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Building digital experiences & crafting stories.</p>
          </div>

          {/* Social Links */}
          <nav className="flex justify-center md:justify-end gap-3" aria-label="Social media links">
            <a
              href="https://www.linkedin.com/in/nihmathullahmazhar/"
              className="w-10 h-10 bg-white/50 dark:bg-white/5 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 hover:border-cyan-400/30 dark:hover:border-cyan-500/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={16} weight="fill" className="text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400" />
            </a>
            <a
              href="https://github.com/nihmathullahmazhar"
              className="w-10 h-10 bg-white/50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-slate-500/10 border border-slate-200 dark:border-white/10 hover:border-slate-400/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <GithubLogo size={16} weight="fill" className="text-slate-400 hover:text-slate-900 dark:hover:text-white" />
            </a>
            <a
              href="https://youtube.com/@nihmathullahmazhar?si=CMmAnTV8UX4Sw5Lu"
              className="w-10 h-10 bg-white/50 dark:bg-white/5 hover:bg-red-100 dark:hover:bg-red-500/10 border border-slate-200 dark:border-white/10 hover:border-red-400/30 dark:hover:border-red-500/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <YoutubeLogo size={16} weight="fill" className="text-slate-400 hover:text-red-500 dark:hover:text-red-400" />
            </a>
            <a
              href="https://www.tiktok.com/@_nihmathullah_"
              className="w-10 h-10 bg-white/50 dark:bg-white/5 hover:bg-pink-100 dark:hover:bg-pink-500/10 border border-slate-200 dark:border-white/10 hover:border-pink-400/30 dark:hover:border-pink-500/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <TiktokLogo size={16} weight="fill" className="text-slate-400 hover:text-pink-500 dark:hover:text-pink-400" />
            </a>
            <a
              href="https://www.instagram.com/_nihmathullah_/"
              className="w-10 h-10 bg-white/50 dark:bg-white/5 hover:bg-purple-100 dark:hover:bg-purple-500/10 border border-slate-200 dark:border-white/10 hover:border-purple-400/30 dark:hover:border-purple-500/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramLogo size={16} weight="fill" className="text-slate-400 hover:text-purple-600 dark:hover:text-purple-400" />
            </a>
            <a
              href="https://web.facebook.com/nihmathullah.m.azhar.7/"
              className="w-10 h-10 bg-white/50 dark:bg-white/5 hover:bg-blue-100 dark:hover:bg-blue-500/10 border border-slate-200 dark:border-white/10 hover:border-blue-400/30 dark:hover:border-blue-500/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <FacebookLogo size={16} weight="fill" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400" />
            </a>
          </nav>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-white/5">
          <p className="text-xs text-slate-400 dark:text-slate-500">© 2025 Nihmathullah M. Azhar. All rights reserved.</p>

          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
            <span>Designed & Built by</span>
            <span className="text-slate-900 dark:text-white font-medium">Me</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
