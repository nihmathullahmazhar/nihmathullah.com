import { Link } from 'react-router-dom';
import { X, Globe, CheckCircle, ArrowRight } from '@phosphor-icons/react';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

const PromoModal = ({ isOpen, onClose }: PromoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden animate-fade-in ring-1 ring-slate-200 dark:ring-white/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all backdrop-blur-md"
        >
          <X size={20} weight="bold" />
        </button>

        {/* Content */}
        <div className="flex flex-col">
          {/* Header Image/Pattern */}
          <div className="h-32 bg-gradient-to-r from-cyan-600 to-purple-600 relative overflow-hidden flex items-end p-6">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:50px_50px] opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 text-white/10 rotate-12 transform scale-150 pointer-events-none">
              <Globe size={144} weight="duotone" />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md mb-2 border border-white/20 shadow-sm">
                Professional Services
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">Web Development Services</h3>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Need a professional website for your business? I offer complete web development services from stunning landing pages to full e-commerce solutions.
            </p>

            {/* Neat Features List */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
              {['Landing Pages', 'E-Commerce Sites', 'Custom Development', '24h Response Time'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle size={16} weight="fill" className="text-cyan-600 dark:text-cyan-400" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Price & CTA */}

              <Link
                to="/web-services"
                onClick={onClose}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center justify-center gap-2 group"
              >
                <span>Explore Services</span>
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="text-[10px] text-center text-slate-400 dark:text-slate-500">
              View pricing, portfolio & contact options
            </p>
          </div>
        </div>
      </div>
  );
};

export default PromoModal;
