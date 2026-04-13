import { Code, PenNib, GraduationCap, ArrowRight, Sparkle } from '@phosphor-icons/react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ServicesSectionProps {
  scrollToSection: (section: string) => void;
}

const ServicesSection = ({ scrollToSection }: ServicesSectionProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation();

  return (
    <section id="services" tabIndex={-1}>
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="text-center max-w-2xl mx-auto mb-16"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
          <Sparkle size={14} weight="fill" />
          Services
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display transition-colors">What I Do</h2>
        <p className="text-slate-600 dark:text-slate-400 transition-colors">Services tailored for modern needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Service Card 1: Web Development */}
        <article 
          ref={card1Ref as React.RefObject<HTMLElement>}
          className="group relative bg-white dark:bg-slate-950 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/[0.02] border border-slate-200 dark:border-white/10 p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-3 shadow-lg dark:shadow-none hover:shadow-cyan-200/50 dark:hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)] flex flex-col overflow-hidden"
          style={{
            opacity: card1Visible ? 1 : 0,
            transform: card1Visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s',
          }}
        >
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

          <div className="mb-6 flex justify-between items-start relative z-10">
            <div className="relative">
              <Code size={40} weight="duotone" className="text-cyan-600 dark:text-cyan-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full"></div>
            </div>
            <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/30 px-2 py-1 rounded uppercase bg-cyan-50 dark:bg-cyan-950/30 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 group-hover:border-cyan-400/60 transition-all duration-300">
              Tech
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 relative z-10 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">Web Development</h3>
          <p className="text-xs text-slate-500 dark:text-cyan-200/70 font-mono mb-4 relative z-10">Front-end focused · Growing into backend</p>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
            I build clean, responsive websites using HTML, CSS, and JavaScript, with a strong focus on usability and structure. I'm continuously expanding into backend technologies, aiming to create optimized and meaningful web experiences.
          </p>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5 relative z-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-2">Currently Working With</p>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
                {['HTML', 'CSS', 'JavaScript', 'Backend Concepts', '+ exploring others'].map((item) => (
                  <li
                    key={item}
                    className="text-xs bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded border border-cyan-200 dark:border-cyan-500/10 hover:border-cyan-400/40 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Service Card 2: Writing */}
        <article 
          ref={card2Ref as React.RefObject<HTMLElement>}
          className="group relative bg-white dark:bg-slate-950 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/[0.02] border border-slate-200 dark:border-white/10 p-8 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-3 shadow-lg dark:shadow-none hover:shadow-purple-200/50 dark:hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)] flex flex-col overflow-hidden"
          style={{
            opacity: card2Visible ? 1 : 0,
            transform: card2Visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
          }}
        >
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

          <div className="mb-6 flex justify-between items-start relative z-10">
            <div className="relative">
              <PenNib size={40} weight="duotone" className="text-purple-600 dark:text-purple-400 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12" />
              <div className="absolute inset-0 bg-purple-400/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full"></div>
            </div>
            <span className="text-xs font-bold text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-400/30 px-2 py-1 rounded uppercase bg-purple-50 dark:bg-purple-950/30 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 group-hover:border-purple-400/60 transition-all duration-300">
              Creative
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 relative z-10 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">Writing</h3>
          <p className="text-xs text-slate-500 dark:text-purple-200/70 font-mono mb-4 relative z-10">Founder — nihmathullahthewriter</p>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
            Writing is at the core of who I am. I write under <span className="text-slate-800 dark:text-white font-medium">nihmathullahthewriter</span> and collaborate with various platforms. My work includes Islamic articles, poetry, stories, scripts, and personalized writing, crafted with depth, clarity, and emotion.
          </p>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5 relative z-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-2">Focus Areas</p>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Writing focus areas">
                {['Islamic Writing', 'Poetry', 'Storytelling', 'Scripts', 'Personalized'].map((item) => (
                  <li
                    key={item}
                    className="text-xs bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded border border-purple-200 dark:border-purple-500/10 hover:border-purple-400/40 hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Service Card 3: Tutoring */}
        <article 
          ref={card3Ref as React.RefObject<HTMLElement>}
          className="group relative bg-white dark:bg-slate-950 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/[0.02] border border-slate-200 dark:border-white/10 p-8 rounded-2xl hover:border-green-400/50 transition-all duration-500 hover:-translate-y-3 shadow-lg dark:shadow-none hover:shadow-green-200/50 dark:hover:shadow-[0_20px_50px_rgba(34,197,94,0.2)] flex flex-col overflow-hidden"
          style={{
            opacity: card3Visible ? 1 : 0,
            transform: card3Visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
          }}
        >
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:via-green-500/5 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>

          <div className="mb-6 flex justify-between items-start relative z-10">
            <div className="relative">
              <GraduationCap size={40} weight="duotone" className="text-green-600 dark:text-green-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6" />
              <div className="absolute inset-0 bg-green-400/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full"></div>
            </div>
            <span className="text-xs font-bold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-400/30 px-2 py-1 rounded uppercase bg-green-50 dark:bg-green-950/30 group-hover:bg-green-100 dark:group-hover:bg-green-500/20 group-hover:border-green-400/60 transition-all duration-300">
              Education
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 relative z-10 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300">Tutoring</h3>
          <p className="text-xs text-slate-500 dark:text-green-200/70 font-mono mb-4 relative z-10">Grade 6–11 · ICT & Islamic Studies</p>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
            I provide tutoring for Grade 6–11 students in ICT and Islamic Studies, focusing on strong fundamentals, clear understanding, and confidence-building. My approach is patient, practical, and tailored to each learner.
          </p>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5 relative z-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-2">Subjects</p>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Tutoring subjects">
                {['ICT', 'Islamic Studies'].map((item) => (
                  <li
                    key={item}
                    className="text-xs bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 px-2 py-1 rounded border border-green-200 dark:border-green-500/10 hover:border-green-400/40 hover:bg-green-100 dark:hover:bg-green-500/20 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => scrollToSection('contact')}
          className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 dark:bg-transparent hover:bg-white dark:hover:bg-white/5 border border-slate-200 dark:border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
          aria-label="Navigate to contact section"
        >
          <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 text-sm">
            Have an idea? <span className="text-cyan-600 dark:text-cyan-400 font-medium group-hover:text-cyan-500 dark:group-hover:text-cyan-300">Let's build, write, or learn together.</span>
          </span>
          <ArrowRight size={16} weight="bold" className="text-slate-500 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
