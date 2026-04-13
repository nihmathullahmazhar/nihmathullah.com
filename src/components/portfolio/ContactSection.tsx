import { Link } from 'react-router-dom';
import { EnvelopeSimple, WhatsappLogo, Phone, CalendarCheck, Globe, ArrowRight, Sparkle } from '@phosphor-icons/react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden" tabIndex={-1}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-12 md:mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display tracking-tight transition-colors">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors">
            Have a project in mind or just want to chat? I'm currently open to new opportunities.
          </p>
        </div>

        {/* Contact Container */}
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
          }}
        >
          {/* Left: WhatsApp CTA */}
          <div className="relative bg-slate-900/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-800">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Available Now
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Chat with Us on WhatsApp
              </h3>
              <p className="text-slate-400 text-sm md:text-base">
                Get instant responses and discuss your project requirements directly. No forms, no waiting.
              </p>
            </div>

            <a
              href="https://wa.me/94722040073"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <WhatsappLogo size={22} weight="fill" />
              <span>Start Conversation</span>
              <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="bg-slate-900/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Phone size={22} weight="bold" className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:+94722040073" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                    +94 72 204 0073
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-slate-900/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <EnvelopeSimple size={22} weight="bold" className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:nihmathullahmazhar@gmail.com" className="text-white text-sm md:text-base font-medium hover:text-cyan-400 transition-colors truncate block">
                    nihmathullahmazhar@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-slate-900/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                  <CalendarCheck size={22} weight="bold" className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-white text-lg font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div 
          className="mt-8 max-w-5xl mx-auto"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s',
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Schedule Meeting */}
            <a
              href="https://calendar.app.google/rKT1dqEkiUHgD27g6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 text-white font-medium py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarCheck size={20} weight="bold" />
              <span>Schedule a Meeting</span>
            </a>

            {/* Web Services Link */}
            <Link
              to="/web-services#contact"
              className="flex items-center justify-center gap-3 bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 text-white font-medium py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Globe size={20} weight="bold" />
              <span>Need a website? Get started</span>
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;