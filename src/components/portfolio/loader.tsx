import { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [loaderText, setLoaderText] = useState('');

  useEffect(() => {
    const targetText = "Nihmathullah M. Azhar";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let iteration = 0;
    let interval: NodeJS.Timeout | null = null;

    const startDecryption = () => {
      interval = setInterval(() => {
        setLoaderText(
          targetText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return targetText[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration >= targetText.length) {
          if (interval) clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 1000);
        }

        iteration += 1 / 3;
      }, 50);
    };

    const initialTimeout = setTimeout(startDecryption, 500);

    return () => {
      clearTimeout(initialTimeout);
      if (interval) clearInterval(interval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center font-mono">
      <div className="text-xl md:text-5xl font-bold text-white tracking-wider text-center px-4 mb-8 whitespace-nowrap overflow-hidden">
        {loaderText}
        <span className="animate-pulse text-cyan-400">_</span>
      </div>

      <div className="w-48 md:w-64 h-1 bg-slate-800 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-cyan-500 w-full animate-loading origin-left"></div>
      </div>

      <p className="text-slate-500 text-[10px] md:text-xs mt-4 uppercase tracking-[0.2em] animate-pulse">
        Initializing System...
      </p>

      <style>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
        .animate-loading {
          animation: loading 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;