import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for individuals & small businesses getting online',
    features: [
      'Single-page website (Landing page)',
      'Modern, mobile-responsive design',
      'WhatsApp chat integration',
      'Google Maps integration',
      'Basic SEO setup',
      'Fast loading & optimized performance',
      '2 rounds of revisions',
      '1 month free technical support',
    ],
    bestFor: 'Best for portfolios, personal brands & simple business pages',
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses & restaurants',
    features: [
      'Up to 5 custom-designed pages',
      'Unique design & brand styling',
      'Fully responsive (mobile & tablet)',
      'Advanced SEO optimization',
      'WhatsApp & social media integration',
      'Google Analytics setup',
      'FREE domain (1st year)',
      'FREE hosting (1st 6 months)',
      '3 rounds of revisions',
      '3 months free support',
    ],
    bestFor: 'Highly suitable for restaurants, cafés & local businesses',
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Premium',
    description: 'Complete digital solution for established businesses',
    features: [
      'Unlimited pages',
      'Fully custom UI/UX design',
      'Contact form & lead capture',
      'E-commerce functionality (if required)',
      'CMS integration',
      'Payment gateway setup',
      'Custom animations & effects',
      'Advanced security features',
      'FREE domain & hosting (1st year)',
      'Priority support',
      '6 months free maintenance',
      'Unlimited revisions',
    ],
    bestFor: 'Best for large businesses, online stores & brands',
    cta: 'Get Started',
    popular: false,
  },
];

const Pricing = () => {
  const handleContact = () => {
    window.open("https://wa.me/94769066840?text=Hi! I'm interested in your web services.", '_blank');
  };

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Packages</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            The Right Package for Your Business
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Choose a package that fits your needs. Contact us for a custom quote tailored to your project.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} handleContact={handleContact} />
          ))}
        </div>

        {/* Mobile & Tablet: Swipeable Scroll */}
        <div className="lg:hidden">
          <div
            className="flex gap-4 pb-6 -mx-4 px-4 snap-x snap-mandatory overflow-x-scroll"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {packages.map((pkg, index) => (
              <div key={pkg.name} className="snap-center shrink-0 w-[300px] sm:w-[340px] pt-5">
                <PricingCard pkg={pkg} index={index} handleContact={handleContact} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-2">
            {packages.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>

        {/* Contact Notice */}
        <div className="max-w-3xl mx-auto mt-10 p-4 rounded-xl bg-card border border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <span className="text-primary font-semibold">💬 Get a Custom Quote:</span> Pricing varies based on your requirements.{' '}
            <button onClick={handleContact} className="text-primary hover:underline font-semibold">
              Contact us on WhatsApp
            </button>{' '}
            and we'll put together a quote tailored to your project.
          </p>
        </div>

      </div>
    </section>
  );
};

const PricingCard = ({ pkg, index, handleContact }: { pkg: typeof packages[0]; index: number; handleContact: () => void }) => (
  <div
    className={`relative flex flex-col gap-5 p-6 pt-8 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1 group ${
      pkg.popular
        ? 'bg-primary/5 border-primary/50 shadow-lg shadow-primary/10'
        : 'bg-card border-border hover:border-primary/40'
    }`}
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    {/* Popular Badge */}
    {pkg.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 sm:left-5 sm:translate-x-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide shadow whitespace-nowrap">
        <Star className="w-3 h-3 fill-current" />
        Most Popular
      </span>
    )}

    {/* Header */}
    <div>
      <h3 className="font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors">
        {pkg.name}
      </h3>
      <p className="text-muted-foreground text-xs">{pkg.description}</p>
    </div>

    {/* Divider */}
    <div className="border-t border-border" />

    {/* Features */}
    <ul className="flex flex-col gap-2.5 flex-1">
      {pkg.features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-xs text-foreground/80">
          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
          {feature}
        </li>
      ))}
    </ul>

    {/* Best For */}
    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
      <p className="text-[11px] text-foreground/70">{pkg.bestFor}</p>
    </div>

    {/* CTA */}
    <Button
      onClick={handleContact}
      size="lg"
      className={`w-full ${
        pkg.popular
          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
          : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
      }`}
    >
      {pkg.cta}
    </Button>
  </div>
);

export default Pricing;