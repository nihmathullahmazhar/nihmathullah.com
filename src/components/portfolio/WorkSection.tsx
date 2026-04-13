import { ArrowSquareOut, ArrowLeft, ArrowRight, HandSwipeLeft, Pulse, ChartBar, UserCircle, Desktop, BookOpenText, Sparkle } from '@phosphor-icons/react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const WorkSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation();

  return (
    <section id="work" tabIndex={-1}>
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="mb-12 flex justify-between items-end"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
            <Sparkle size={14} weight="fill" />
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display transition-colors">Featured Work</h2>
          <p className="text-slate-600 dark:text-slate-400 transition-colors">Highlights from development and writing.</p>
        </div>
        <div className="hidden md:flex gap-2" aria-hidden="true">
          <ArrowLeft size={24} weight="bold" className="text-slate-400 dark:text-slate-500" />
          <ArrowRight size={24} weight="bold" className="text-slate-800 dark:text-white" />
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden flex items-center gap-2 mb-4 px-1 text-cyan-600/70 dark:text-cyan-400/70 text-xs animate-pulse font-mono">
        <HandSwipeLeft size={18} weight="bold" />
        <span>Swipe to explore</span>
      </div>

      <div 
        ref={carouselRef as React.RefObject<HTMLDivElement>}
        className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar" 
        role="list" 
        aria-label="Featured projects"
        style={{
          opacity: carouselVisible ? 1 : 0,
          transform: carouselVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
        }}
      >
        {/* Project 1: Hospital Suite */}
        <article className="min-w-[85vw] md:min-w-[650px] snap-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col shadow-xl dark:shadow-none" role="listitem">
          <div className="h-72 md:h-96 grid grid-cols-2 gap-1 bg-slate-100 dark:bg-slate-950/50">
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center relative group overflow-hidden cursor-pointer block h-full" aria-label="View Patient Portal interface">
              <Pulse size={48} weight="duotone" className="text-cyan-500/50 absolute z-0" />
              <img
                src="/assets/img/Project1.png"
                alt="Patient Portal Interface screenshot"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity z-20" aria-hidden="true"></div>
              <span className="absolute bottom-4 left-4 text-xs font-bold text-cyan-800 dark:text-cyan-200 uppercase tracking-wider bg-white/80 dark:bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-white/20 dark:border-white/10 z-20">Patient Portal</span>
              <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 dark:border-white/10 backdrop-blur-md z-30" aria-hidden="true">
                <ArrowSquareOut size={16} weight="bold" className="text-slate-900 dark:text-white" />
              </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center relative group overflow-hidden cursor-pointer block h-full" aria-label="View Admin Dashboard interface">
              <ChartBar size={48} weight="duotone" className="text-blue-500/50 absolute z-0" />
              <img
                src="/assets/img/project2.png"
                alt="Admin Dashboard Interface screenshot"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity z-20" aria-hidden="true"></div>
              <span className="absolute bottom-4 left-4 text-xs font-bold text-blue-800 dark:text-blue-200 uppercase tracking-wider bg-white/80 dark:bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-white/20 dark:border-white/10 z-20">Admin Dashboard</span>
              <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 dark:border-white/10 backdrop-blur-md z-30" aria-hidden="true">
                <ArrowSquareOut size={16} weight="bold" className="text-slate-900 dark:text-white" />
              </div>
            </a>
          </div>

          <div className="p-8 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Hospital Management System</h3>
              <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/30 px-3 py-1 rounded-full uppercase tracking-wider bg-cyan-50 dark:bg-transparent">Full-Stack</span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors">
              A comprehensive healthcare management platform featuring patient portals, doctor consultation booking, e-pharmacy with shopping cart, payment gateway integration, and administrative backend with data visualization.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-2 flex items-center gap-2">
                  <UserCircle size={16} weight="fill" className="text-cyan-600 dark:text-cyan-400" /> Patient Portal
                </h4>
                <ul className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed space-y-1 ml-6 list-disc">
                  <li>Doctor search & consultation booking system</li>
                  <li>E-pharmacy with cart, checkout & payment processing</li>
                  <li>User authentication & profile management</li>
                  <li>Advanced search across doctors, services & medicines</li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-2 flex items-center gap-2">
                  <Desktop size={16} weight="fill" className="text-blue-600 dark:text-blue-400" /> Admin Dashboard
                </h4>
                <ul className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed space-y-1 ml-6 list-disc">
                  <li>Consultation management & booking confirmations</li>
                  <li>Payment processing (Cash, Card, Bank Transfer)</li>
                  <li>Automated receipt handling & verification</li>
                  <li>CRUD operations for doctors, services & inventory</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
              <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-3">Tech Stack</p>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                {['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'JSON API', 'Session Management', 'File Upload System'].map((tag) => (
                  <li key={tag} className="text-xs bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 font-mono hover:border-cyan-400/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Project 2: Anthology */}
        <article className="min-w-[85vw] md:min-w-[500px] snap-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all flex flex-col shadow-xl dark:shadow-none" role="listitem">
          <a href="https://www.instagram.com/nihmathullahthewriter/" target="_blank" rel="noopener noreferrer" className="h-72 md:h-96 bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center relative group overflow-hidden cursor-pointer block" aria-label="View Her Anthology book cover">
            <BookOpenText size={64} weight="duotone" className="text-purple-400/50 absolute z-0" />
            <img
              src="/assets/img/project3.png"
              alt="Her Anthology Book Cover"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 z-10"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/80 group-hover:opacity-80 transition-opacity z-20" aria-hidden="true"></div>
            <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 dark:border-white/10 backdrop-blur-md z-30" aria-hidden="true">
              <ArrowSquareOut size={16} weight="bold" className="text-slate-900 dark:text-white" />
            </div>
          </a>

          <div className="p-8 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Her</h3>
              <span className="text-xs font-bold text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-400/30 px-3 py-1 rounded-full uppercase tracking-wider bg-purple-50 dark:bg-transparent">Creative Writing</span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors">
              A serialized poetic collection exploring themes of connection and self. The project is structured as a decology (10 parts), with each segment unveiling a quartet of poems.
            </p>

            {/* Publication & Reading Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 transition-colors">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">10</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Parts</div>
              </div>
              <div className="text-center border-x border-slate-200 dark:border-white/5">
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">40+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Poems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">2</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Published</div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 mb-6 flex flex-col max-h-56 group-hover:border-purple-500/20 transition-colors">
              <div className="p-3 border-b border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#0f172a] rounded-t-xl z-10 shrink-0 transition-colors">
                <h4 className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-widest flex items-center justify-between">
                  The Decology
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal normal-case">Scroll to view</span>
                </h4>
              </div>

              <div className="overflow-y-auto p-3 no-scrollbar space-y-3" role="list" aria-label="Anthology series">
                <div className="flex items-center justify-between" role="listitem">
                  <span className="text-xs font-mono text-slate-800 dark:text-white">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">01.</span>Her Eyes
                  </span>
                  <span className="text-[10px] font-bold bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20 px-2 py-0.5 rounded-full">Posted</span>
                </div>

                <div className="flex items-center justify-between" role="listitem">
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-300">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">02.</span>The Realization Begins
                  </span>
                  <span className="text-[10px] font-bold bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-500/20 px-2 py-0.5 rounded-full">Announced</span>
                </div>

                {['Whispered Truths & Hidden Storms', 'Holding On, Letting Go', 'Distance in Motion', 'Dreams That Refuse to Die', 'The Quiet Acceptance', "Echoes of What Could've Been", 'Love That Learned to Stay', 'If She Ever Reads This'].map(
                  (title, idx) => (
                    <div key={idx} className="flex items-center justify-between opacity-50 hover:opacity-100 transition-opacity" role="listitem">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate pr-2">
                        <span className="text-slate-400 dark:text-slate-600 mr-2">{String(idx + 3).padStart(2, '0')}.</span>
                        {title}
                      </span>
                      <span className="text-[10px] font-bold bg-slate-200 dark:bg-slate-700/30 text-slate-500 dark:text-slate-500 border border-slate-300 dark:border-slate-700/30 px-2 py-0.5 rounded-full whitespace-nowrap">Dev</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mb-6 text-center">
              <p className="text-sm font-serif italic text-slate-700 dark:text-white/90 border-t border-b border-slate-200 dark:border-white/10 py-3 tracking-wide transition-colors">"This Was Always For You"</p>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <ul className="flex gap-2" role="list" aria-label="Project categories">
                <li className="text-xs bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded border border-purple-200 dark:border-purple-500/20 font-mono">Poetry</li>
                <li className="text-xs bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded border border-purple-200 dark:border-purple-500/20 font-mono">Decology</li>
              </ul>
              <span className="text-xs font-bold text-green-600 dark:text-green-400 flex items-center gap-2 bg-green-50 dark:bg-green-950/30 px-3 py-1 rounded-full border border-green-200 dark:border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" aria-hidden="true"></span>
                Ongoing Series
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WorkSection;
