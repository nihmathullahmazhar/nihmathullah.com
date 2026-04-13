import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, Globe, Smartphone, Zap, Star } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Now Accepting New Projects</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              We Build Websites That{' '}
              <span className="gradient-text">Grow Your Business</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Modern, fast, and professional websites for businesses across the world.
              From landing pages to full websites — built to attract customers and boost credibility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 glow-effect"
                style={{ background: 'var(--gradient-primary)' }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/our-work')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '5+', label: 'Projects Completed' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: '24h', label: 'Response Time' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Mockup */}
          <div className="hidden lg:flex items-center justify-center relative h-[500px]">

            {/* Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl" />

            {/* Main browser mockup card */}
            <div className="relative z-10 w-full max-w-sm bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">

              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <div className="flex-1 h-5 rounded-md bg-background/80 ml-2 flex items-center px-3">
                  <span className="text-[10px] text-muted-foreground">nihmathullah.com/web-services</span>
                </div>
              </div>

              {/* Fake nav */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-background/60 border-b border-border/50">
                <div className="w-12 h-3 bg-primary/50 rounded-sm" />
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-2 bg-secondary rounded-sm" />
                  <div className="w-8 h-2 bg-secondary rounded-sm" />
                  <div className="w-8 h-2 bg-secondary rounded-sm" />
                  <div className="w-10 h-5 bg-primary/30 rounded-md" />
                </div>
              </div>

              {/* Hero section */}
              <div className="px-4 pt-4 pb-3 bg-gradient-to-br from-primary/10 via-background to-background border-b border-border/50">
                <div className="h-4 bg-primary/50 rounded w-3/4 mb-2" />
                <div className="h-4 bg-primary/30 rounded w-1/2 mb-3" />
                <div className="h-2.5 bg-secondary rounded w-full mb-1.5" />
                <div className="h-2.5 bg-secondary rounded w-4/5 mb-3" />
                <div className="flex gap-2">
                  <div className="h-7 w-24 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-[8px] text-primary-foreground font-semibold">Get Started →</span>
                  </div>
                  <div className="h-7 w-20 bg-secondary border border-border rounded-lg" />
                </div>
              </div>

              {/* Services row */}
              <div className="px-4 py-3 border-b border-border/50">
                <div className="h-2 bg-primary/30 rounded w-1/3 mb-2.5" />
                <div className="grid grid-cols-3 gap-2">
                  {[Globe, Smartphone, Zap].map((Icon, i) => (
                    <div key={i} className="bg-secondary/80 border border-border rounded-lg p-2 flex flex-col gap-1">
                      <Icon className="w-4 h-4 text-primary" />
                      <div className="h-1.5 bg-muted-foreground/20 rounded w-full" />
                      <div className="h-1.5 bg-muted-foreground/20 rounded w-2/3" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial strip */}
              <div className="px-4 py-3 flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {['bg-blue-400', 'bg-purple-400', 'bg-green-400'].map((color, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${color} border border-card`} />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <div className="h-1.5 bg-secondary rounded w-20" />
                </div>
                <div className="ml-auto h-6 w-16 bg-primary/20 border border-primary/30 rounded-lg" />
              </div>
            </div>

            {/* Floating badge — top right */}
            <div className="absolute top-6 -right-2 bg-card border border-border rounded-xl px-3 py-2 shadow-lg z-20 animate-float">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium">Mobile Responsive</span>
              </div>
            </div>

            {/* Floating badge — middle left */}
            <div className="absolute top-1/2 -left-6 bg-card border border-border rounded-xl px-3 py-2 shadow-lg z-20 animate-float" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs font-medium">WhatsApp Ready</span>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute bottom-10 -right-4 bg-primary/10 border border-primary/20 rounded-xl px-3 py-2 shadow-lg z-20 animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-primary flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> SEO Optimized
                </span>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute bottom-6 -left-2 bg-card border border-border rounded-xl px-3 py-2 shadow-lg z-20 animate-float" style={{ animationDelay: '1.8s' }}>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xs flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </span>
                <span className="text-xs font-medium text-muted-foreground">5.0</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
