import { Star, Quotes, HandSwipeLeft, ArrowLeft, ArrowRight } from '@phosphor-icons/react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Bloom Florals',
    content: 'Working with Nihmathullah was an absolute pleasure. They transformed my vision into a stunning website that perfectly represents my floral business. The attention to detail is remarkable!',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'David Chen',
    role: 'Founder, TechStart Solutions',
    content: 'Professional, responsive, and incredibly talented. Our new website has significantly improved our online presence and lead generation. Highly recommend their services!',
    rating: 5,
    avatar: 'DC',
  },
  {
    name: 'Priya Sharma',
    role: 'Manager, Spice Route Restaurant',
    content: 'The website exceeded all our expectations. It\'s beautiful, fast, and our customers love it. The booking integration works flawlessly. Great communication throughout!',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'Michael Brown',
    role: 'CEO, Brown & Associates Law',
    content: 'They delivered a sophisticated, professional website that truly reflects our firm\'s values. The process was smooth and the results speak for themselves.',
    rating: 5,
    avatar: 'MB',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Desktop Grid Navigation Hint */}
        <div className="hidden md:flex justify-end gap-2 mb-4" aria-hidden="true">
          <ArrowLeft size={24} weight="bold" className="text-muted-foreground" />
          <ArrowRight size={24} weight="bold" className="text-foreground" />
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center gap-2 mb-4 px-1 text-primary/70 text-xs animate-pulse font-mono">
          <HandSwipeLeft size={18} weight="bold" />
          <span>Swipe to see more</span>
        </div>

        {/* Testimonials - Swipeable on mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 md:pb-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-center group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quotes className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} weight="fill" size={16} className="text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;