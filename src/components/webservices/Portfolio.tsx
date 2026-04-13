import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MessageCircle } from 'lucide-react';

const projects = [
  // Restaurants
  { id: 'luxury-restaurant', title: 'Luxury Restaurant', category: 'Restaurants', description: 'Elegant fine dining restaurant showcase with premium design', image: '/assets/img/luxury-resturant.webp' },
  { id: 'bar-lounge', title: 'Bar & Lounge', category: 'Restaurants', description: 'Modern bar and lounge website with sophisticated ambiance', image: '/assets/img/bar-lounge.webp' },
  { id: 'cafe-coffee', title: 'Café & Coffee Shop', category: 'Restaurants', description: 'Artisan coffee shop experience with cozy atmosphere', image: '/assets/img/cafe.webp' },
  { id: 'fast-food', title: 'Fast Food Restaurant', category: 'Restaurants', description: 'Modern fast food and takeaway restaurant website', image: '/assets/img/fast-food.webp' },
  { id: 'cloud-kitchen', title: 'Cloud Kitchen & Delivery', category: 'Restaurants', description: 'Online delivery-focused cloud kitchen platform', image: '/assets/img/cloud-kitchen.webp' },
  { id: 'bakery-dessert', title: 'Bakery & Dessert Shop', category: 'Restaurants', description: 'Sweet treats and artisan bakery showcase', image: '/assets/img/bakery.webp' },
  { id: 'vegan-restaurant', title: 'Vegan Restaurant', category: 'Restaurants', description: 'Plant-based dining with sustainable practices', image: '/assets/img/vegan.webp' },
  { id: 'middle-eastern', title: 'Middle Eastern Restaurant', category: 'Restaurants', description: 'Authentic Middle Eastern cuisine and culture', image: '/assets/img/middle.webp' },
  { id: 'street-food', title: 'Street Food & Shawarma', category: 'Restaurants', description: 'Vibrant street food and shawarma shop', image: '/assets/img/streetfood.webp' },
  { id: 'general-restaurant', title: 'Family Restaurant', category: 'Restaurants', description: 'Welcoming family-style dining experience', image: '/assets/img/resturant.webp' },

  // Healthcare
  { id: 'dental', title: 'Dental Clinic', category: 'Healthcare', description: 'Professional dental clinic with appointment booking', image: '/assets/img/dental.webp' },
  { id: 'doctor', title: 'Medical', category: 'Healthcare', description: 'Doctor profile website with consultation booking', image: '/assets/img/doctor.webp' },

  // Fitness
  { id: 'trainer', title: 'Personal Trainer', category: 'Fitness', description: 'Personal trainer portfolio with programs and bookings', image: '/assets/img/trainer.webp' },
  { id: 'gym', title: 'Gym & Fitness Center', category: 'Fitness', description: 'Modern gym website with memberships and class schedules', image: '/assets/img/gym.webp' },

  // Services
  { id: 'plumber', title: 'Plumbing Services', category: 'Services', description: 'Local plumbing service with emergency contact', image: '/assets/img/plumber.webp' },
  { id: 'lawfirm', title: 'Law Firm', category: 'Services', description: 'Professional law firm showcasing practice areas', image: '/assets/img/lawfirm.webp' },
  { id: 'accounts', title: 'Accounting Firm', category: 'Services', description: 'Professional accounting and finance firm website', image: '/assets/img/accounts.webp' },
  { id: 'construction', title: 'Construction Company', category: 'Services', description: 'Construction company with project portfolio', image: '/assets/img/construction.webp' },

  // Professional
  { id: 'lawyer', title: 'Independent Lawyer', category: 'Professional', description: 'Personal lawyer portfolio with services and booking', image: '/assets/img/lawyer.webp' },
  { id: 'band', title: 'Music Band', category: 'Professional', description: 'Modern music band website with discography, events, and booking', image: '/assets/img/band.webp' },

  // Education
  { id: 'tuition', title: 'Tuition Center', category: 'Education', description: 'Educational institute with courses and enrollment', image: '/assets/img/tuition.webp' },

  // Salon & Wellness
  { id: 'wellness', title: 'Wellness & Spa', category: 'Salon & Wellness', description: 'Relaxing wellness center with services and packages', image: '/assets/img/wellness.webp' },
  { id: 'saloon', title: 'Salon & Beauty', category: 'Salon & Wellness', description: 'Beauty salon with pricing, profiles and booking', image: '/assets/img/saloon.webp' },

  // Hospitality
  { id: 'resort', title: 'Resort & Hotel', category: 'Hospitality', description: 'Luxury resort with room showcases and booking', image: '/assets/img/resort.webp' },
  { id: 'villa', title: 'Villa Rental', category: 'Hospitality', description: 'Premium villa rental with reservation system', image: '/assets/img/villa.webp' },

  // Property
  { id: 'realestate', title: 'Real Estate Agency', category: 'Property', description: 'Real estate agency with property listings and agents', image: '/assets/img/realestate.webp' },
  { id: 'realestate2', title: 'Property Listing Platform', category: 'Property', description: 'Modern property marketplace with advanced search', image: '/assets/img/realestate2.webp' },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Demo Samples</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Browse our demo portfolio across restaurants, healthcare, fitness, hospitality, and more.
            Each sample showcases what we can build for your business.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {category}
              {category === 'All' && (
                <span className="ml-1.5 text-[10px] opacity-60">({projects.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/sample/${project.id}`}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden bg-secondary relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category pill on image */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-[10px] font-mono text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Hover icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-1">
                <h3 className="text-sm font-display font-semibold group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-muted-foreground text-sm">No projects found in this category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto mt-16 p-6 sm:p-8 rounded-2xl bg-card border border-border text-center">
          <h3 className="font-display font-bold text-lg sm:text-xl mb-2">Don't see your industry?</h3>
          <p className="text-muted-foreground text-sm mb-6">
            We build websites for all kinds of businesses. Contact us and we'll discuss what we can create for you.
          </p>
          
           <a href="https://wa.me/94769066840?text=Hi! I'm interested in a website for my business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;