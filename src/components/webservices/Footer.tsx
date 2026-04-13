import { Link } from 'react-router-dom';
import { Code, Globe, Headphones, MessageCircle, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-white/5 bg-[#0a0a0a]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg">Nihmathullah</span>
                <span className="block text-xs text-cyan-400 font-medium">Web Services</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional web development services crafted with passion. Building digital experiences that drive results.
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              
              <a  href="https://wa.me/94769066840"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-400/30 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-slate-400 hover:text-green-400" />
              </a>
              
               <a href="https://www.instagram.com/_nihmathullah_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-400/30 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-slate-400" />
              </a>
              
               <a href="https://web.facebook.com/nihmathullah.m.azhar.7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-400/30 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm">
              <Code className="w-4 h-4 text-cyan-500" />
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'Landing Pages & Websites',
                'Social Media Management',
                'Content & Copywriting',
                'SEO & Digital Marketing',
                'Website Maintenance',
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-purple-500" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Personal Portfolio
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm">
              <Headphones className="w-4 h-4 text-green-500" />
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-400">
                <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
                <a href="https://wa.me/94769066840" className="hover:text-cyan-400 transition-colors">
                  +94 76 906 6840
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                <a href="mailto:contact@nihmathullah.com" className="hover:text-cyan-400 transition-colors">
                  nihmathullahmazhar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {currentYear} Nihmathullah Web Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs">
              <Link to="/terms-and-conditions" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Refund Policy
              </Link>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span>Crafted with</span>
              <span className="text-red-500">❤</span>
              <span>by</span>
              <Link to="/" className="text-cyan-400 font-medium hover:underline">
                Nihmathullah
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;