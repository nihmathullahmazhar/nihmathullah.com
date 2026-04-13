const ProfileCard = () => (
  <div className="w-full max-w-md bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-xl dark:shadow-[0_0_50px_-12px_rgba(34,211,238,0.2)] overflow-hidden transition-colors duration-300">
    {/* Code Header */}
    <div className="bg-slate-100 dark:bg-[#121212] px-5 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="flex gap-2" role="presentation" aria-label="Window controls">
        <div className="w-3 h-3 rounded-full bg-red-500/80" aria-hidden="true"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" aria-hidden="true"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80" aria-hidden="true"></div>
      </div>
      <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
        <span>{'<>'}</span>
        <span>profile.json</span>
      </div>
    </div>
    {/* Code Body */}
    <div className="p-6 md:p-8 font-mono text-sm leading-8 text-slate-600 dark:text-slate-300 transition-colors duration-300" role="complementary" aria-label="Profile information in code format">
      <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-yellow-600 dark:text-yellow-200">Profile</span> <span className="text-slate-800 dark:text-white">=</span> {'{'}</p>
      <div className="pl-4 md:pl-6 border-l border-slate-200 dark:border-slate-800/50 ml-2">
        <p>name: <span className="text-green-600 dark:text-green-400">'Nihmathullah M. Azhar'</span>,</p>
        <p>roles: <span className="text-cyan-600 dark:text-cyan-400">[' Developer', 'Writer', ' Tutor']</span>,</p>
        <p>languages: <span className="text-orange-600 dark:text-orange-400">['Tamil', 'Sinhala', 'English']</span>,</p>
        <p>brand: <span className="text-purple-600 dark:text-purple-400">'#nihmathullahthewriter'</span>,</p>
        <p>status: <span className="text-green-600 dark:text-green-400 animate-pulse">'Open to Opportunities'</span></p>
      </div>
      <p>{'};'}</p>
    </div>
  </div>
);

export default ProfileCard;
