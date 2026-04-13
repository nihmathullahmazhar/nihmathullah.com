import { Code, Layout, Settings, Globe, Zap, Share2, PenTool, BarChart2, Star } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Landing Pages & One-Page Websites',
    description: 'High-impact websites built to convert visitors into customers. Ideal for small businesses that want fast results with a modern online presence.',
    features: ['Mobile & Tablet Responsive', 'Fast Loading Performance', 'SEO-Ready Structure'],
    popular: true,
  },
  {
    icon: Code,
    title: 'Full Website Development',
    description: 'Custom multi-page websites designed for growing businesses that need credibility, content, and scalability.',
    features: ['Custom UI/UX Design', 'CMS Integration', 'Analytics Setup'],
    popular: true,
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'We handle your social media presence so you can focus on running your business. Consistent posting, engagement, and growth across all platforms.',
    features: ['Content Planning & Scheduling', 'Instagram, Facebook & TikTok', 'Monthly Performance Reports'],
    popular: false,
  },
  {
    icon: PenTool,
    title: 'Content & Copywriting',
    description: 'Professional writing that speaks to your audience and drives action — from website copy to captions, blogs, and promotional content.',
    features: ['Website Copy & Landing Pages', 'Social Media Captions', 'Blog Posts & Articles'],
    popular: true,
  },
  {
    icon: Globe,
    title: 'Domain & Hosting Setup',
    description: 'Complete domain and hosting setup handled end-to-end for a hassle-free start.',
    features: ['Domain Registration', 'SSL Security Certificate', 'Business Email Setup'],
    popular: true,
  },
  {
    icon: Settings,
    title: 'Website Maintenance',
    description: 'Keep your website secure, updated, and running smoothly without technical worries.',
    features: ['Monthly Updates', 'Security Monitoring', 'Performance Optimization'],
    popular: false,
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    description: 'Improve speed, usability, and search visibility of your existing website.',
    features: ['Speed Optimization', 'SEO Audit', 'UX Improvements'],
    popular: false,
  },
  {
    icon: BarChart2,
    title: 'SEO & Digital Marketing',
    description: 'Get found on Google and grow your online reach with targeted SEO strategies and digital marketing tailored to your business.',
    features: ['Keyword Research & Strategy', 'On-Page SEO Optimization', 'Google Business Profile Setup'],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">What We Offer</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            Services Tailored for Your Success
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            From concept to launch and beyond, we provide comprehensive web and digital solutions that help your business grow online.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Mobile & Tablet: Swipeable Scroll */}
        <div className="lg:hidden">
          <div className="overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {services.map((service, index) => (
                <div key={service.title} className="snap-center w-[280px] sm:w-[320px]">
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          </div>
          {/* Scroll dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {services.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;

  return (
    <div
      className={`relative flex flex-col gap-5 p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1 group ${
        service.popular
          ? 'bg-primary/5 border-primary/50 shadow-lg shadow-primary/10'
          : 'bg-card border-border hover:border-primary/40'
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Popular Badge */}
      {service.popular && (
        <span className="absolute -top-3 left-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide shadow">
          <Star className="w-3 h-3 fill-current" />
          Popular
        </span>
      )}

      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
        service.popular
          ? 'bg-primary/20 group-hover:bg-primary/30'
          : 'bg-primary/10 group-hover:bg-primary/20'
      }`}>
        <Icon className="w-5 h-5 text-primary" />
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="font-display font-bold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;