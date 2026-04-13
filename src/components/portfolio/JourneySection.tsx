import { GraduationCap, Certificate, Code, Desktop, Sparkle } from '@phosphor-icons/react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const JourneySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: currentRef, isVisible: currentVisible } = useScrollAnimation();
  const { ref: milestonesRef, isVisible: milestonesVisible } = useScrollAnimation();

  return (
    <section id="journey" className="relative py-8 md:py-12" tabIndex={-1}>
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="text-center mb-12 md:mb-16"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
          <Sparkle size={14} weight="fill" />
          Education
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display transition-colors">Academic Journey</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
          My educational path has been a blend of technical discipline, business acumen, and linguistic refinement.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Current Studies Section */}
        <div 
          ref={currentRef as React.RefObject<HTMLDivElement>}
          className="mb-16"
          style={{
            opacity: currentVisible ? 1 : 0,
            transform: currentVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s',
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={24} weight="fill" className="text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Current Studies</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* IDM Diploma */}
            <article className="group relative bg-white dark:bg-slate-950 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-2 dark:border-cyan-500/20 rounded-2xl p-6 overflow-hidden hover:border-cyan-400/50 dark:hover:border-cyan-500/50 shadow-lg dark:shadow-none transition-all duration-500">
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 rounded-full uppercase">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
                  Pursuing
                </span>
              </div>

              {/* Background Icon */}
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code size={200} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
              </div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 pr-24 transition-colors">Intl. Diploma in Web Engineering</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono transition-colors">IDM Nations Campus</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 px-3 py-1.5 rounded-lg border border-cyan-200 dark:border-cyan-500/20">Full Stack</span>
                  <span className="text-xs bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 px-3 py-1.5 rounded-lg border border-cyan-200 dark:border-cyan-500/20">Engineering Principles</span>
                  <span className="text-xs bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 px-3 py-1.5 rounded-lg border border-cyan-200 dark:border-cyan-500/20">Database</span>
                </div>
              </div>
            </article>

            {/* BSc Computer Science */}
            <article className="group relative bg-white dark:bg-slate-950 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-2 dark:border-blue-500/20 rounded-2xl p-6 overflow-hidden hover:border-blue-400/50 dark:hover:border-blue-500/50 shadow-lg dark:shadow-none transition-all duration-500">
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-full uppercase">
                  <span className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400 animate-pulse"></span>
                  Starting Feb 2026
                </span>
              </div>

              {/* Background Icon */}
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Desktop size={200} weight="duotone" className="text-blue-600 dark:text-blue-400" />
              </div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 pr-24 transition-colors">BSc (Hons) Computer Science</h4>
                <p className="text-xs text-slate-600 dark:text-slate-500 leading-relaxed transition-colors">Awarded by the University of Staffordshire (UK), delivered at APIIT.</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                <span className="text-xs bg-blue-50 dark:bg-cyan-950/30 text-blue-700 dark:text-cyan-300 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-cyan-500/20">Cloud Technologies</span>
                <span className="text-xs bg-blue-50 dark:bg-cyan-950/30 text-blue-700 dark:text-cyan-300 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-cyan-500/20">Software Engineering</span>
                <span className="text-xs bg-blue-50 dark:bg-cyan-950/30 text-blue-700 dark:text-cyan-300 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-cyan-500/20">Data Structures & Algorithms</span>
              </div>
            </article>
          </div>
        </div>

        {/* Certified Milestones Section */}
        <div
          ref={milestonesRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: milestonesVisible ? 1 : 0,
            transform: milestonesVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Certificate size={24} weight="fill" className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Certified Milestones</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* APIIT Computing Foundation */}
            <article className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-purple-400/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white transition-colors">Computing Foundation</h4>
                <span className="text-xs font-bold bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20 whitespace-nowrap">COMPLETED</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 transition-colors">APIIT Sri Lanka</p>
            </article>

            {/* Foundation */}
            <article className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-purple-400/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white transition-colors">Undergraduate Foundation</h4>
                <span className="text-xs font-bold bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20 whitespace-nowrap">COMPLETED</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 transition-colors">AOG Campus (certified by ABE-UK)</p>
            </article>

            {/* English Diploma */}
            <article className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-purple-400/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white transition-colors">Diploma in English</h4>
                <span className="text-xs font-bold bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20 whitespace-nowrap">DISTINCTION</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 transition-colors">AOG Campus</p>
            </article>

            {/* Business Mgmt */}
            <article className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-purple-400/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white transition-colors">Diploma in Business Mgmt.</h4>
                <span className="text-xs font-bold bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20 whitespace-nowrap">DISTINCTION</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 transition-colors">AOG Campus</p>
            </article>

            {/* Spoken English */}
            <article className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-purple-400/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white transition-colors">Diploma in Spoken English</h4>
                <span className="text-xs font-bold bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20 whitespace-nowrap">DISTINCTION</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 transition-colors">AOG Campus</p>
            </article>

            {/* EdHat */}
            <article className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-purple-400/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white transition-colors">EdHat eKids Level 04</h4>
                <span className="text-xs font-bold bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20 whitespace-nowrap">DISTINCTION</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 transition-colors">IDM Nations Campus</p>
            </article>

            {/* School Education */}
            <article className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-purple-400/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white transition-colors">School Education (Grade 1-13)</h4>
                <span className="text-xs font-bold bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20 whitespace-nowrap">COMPLETED</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 transition-colors">Zahira College, Colombo</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
