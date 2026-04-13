import { User, Sparkle } from '@phosphor-icons/react';
import TiltCard from './TiltCard';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 md:py-20" tabIndex={-1}>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div 
          ref={imageRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: imageVisible ? 1 : 0,
            transform: imageVisible ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0.95)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <TiltCard>
            <div className="relative group">
              {/* Animated Glow Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-purple-500/40 rounded-2xl rotate-2 opacity-40 group-hover:opacity-60 group-hover:rotate-3 group-hover:scale-105 transition-all duration-700 ease-out blur-2xl"
                aria-hidden="true"
                style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
              ></div>

              {/* Main Portrait Box */}
              <div
                className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden aspect-square border border-slate-200 dark:border-slate-800/80 group-hover:border-cyan-500/60 shadow-lg dark:group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500 flex items-center justify-center"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                {/* Fallback Icon */}
                <User size={72} weight="duotone" className="text-slate-300 dark:text-slate-700/50 absolute z-0 transition-opacity duration-300 group-hover:opacity-0" aria-hidden="true" />

                {/* Portrait Image */}
                <img
                  src="/assets/img/dp.png"
                  alt="Portrait of Nihmathullah M. Azhar"
                  className="w-full h-full object-cover z-10 relative transition-all duration-700 ease-out group-hover:scale-[1.08]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />

                {/* Gradient Overlay - appears on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20"></div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
          }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
            <Sparkle size={14} weight="fill" />
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 font-display text-center md:text-left transition-colors">About Me</h2>

          <div className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg space-y-6 text-center md:text-left transition-colors">
            <p>
              Curiosity has always guided my path. What began as an interest in technology slowly evolved into a deeper understanding—that creating something only
              matters when it brings value to others.
            </p>
            <p>
              I'm <strong className="text-slate-900 dark:text-white font-bold">Nihmathullah Mohamed Azhar</strong>, an aspiring web developer, creative writer, and
              lifelong learner. I explore technology to build meaningful solutions, writing to express ideas and stories, and tutoring as a way to share knowledge
              and grow together. From <span className="text-cyan-600 dark:text-cyan-400 font-semibold">HTML, CSS, JavaScript, and Python</span> to{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Poems, Stories, Scripts, and Personalized Writing,</span> I enjoy turning ideas into
              something people can connect with and use.
            </p>
            <p>
              With a background in <span className="text-purple-600 dark:text-purple-400 font-semibold">IT, Business Management, and English</span>, I value clear
              communication, thoughtful problem-solving, and continuous self-improvement. I believe growth comes from learning, creating, and teaching with purpose.
            </p>
            <p className="font-mono text-cyan-700 dark:text-cyan-200">
              The journey has just begun, and the story is far from finished
              <span className="inline-block w-2.5 h-5 ml-1 bg-cyan-600 dark:bg-cyan-400 align-middle animate-blink" aria-hidden="true"></span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-slate-200 dark:border-white/10 pt-8">
            <div className="text-center md:text-left">
              <h3 className="text-slate-900 dark:text-white font-bold mb-1">Languages</h3>
              <p className="text-sm text-slate-500">English, Tamil, Sinhala</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-slate-900 dark:text-white font-bold mb-1">Focus</h3>
              <p className="text-sm text-slate-500">Web Eng. & Writing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
