import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    id: 'luxury-restaurant',
    title: 'Luxury Restaurant',
    category: 'Restaurants',
    description: 'Elegant fine dining restaurant showcase with premium design',
    image: '/assets/img/luxury-resturant.webp',
  },
  {
    id: 'dental',
    title: 'Dental Clinic',
    category: 'Healthcare',
    description: 'Professional dental clinic with appointment booking and services',
    image: '/assets/img/dental.webp',
  },
  {
    id: 'gym',
    title: 'Gym & Fitness Center',
    category: 'Fitness',
    description: 'Modern gym website with memberships and class schedules',
    image: '/assets/img/gym.webp',
  },
  {
    id: 'resort',
    title: 'Resort & Hotel',
    category: 'Hospitality',
    description: 'Luxury resort with room showcases and booking integration',
    image: '/assets/img/resort.webp',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Our Work</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            Featured Demo Samples
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            A glimpse of what we can build — across restaurants, healthcare, fitness, hospitality, and more.
          </p>
        </div>

        {/* Desktop Grid — 4 columns */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile & Tablet: Swipeable Scroll */}
        <div className="lg:hidden mb-8">
          <div className="overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="snap-center w-[280px] sm:w-[320px]">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {featuredProjects.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105"
            style={{ background: 'var(--gradient-primary)' }}
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: typeof featuredProjects[0]; index: number }) => (
  <Link
    to={`/sample/${project.id}`}
    className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 h-full"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    {/* Image */}
    <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover Icon */}
      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <ExternalLink className="w-4 h-4 text-primary-foreground" />
      </div>
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col gap-1">
      <span className="text-[11px] font-mono text-primary uppercase tracking-wider">
        {project.category}
      </span>
      <h3 className="text-base font-display font-semibold group-hover:text-primary transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-xs text-muted-foreground">{project.description}</p>
    </div>
  </Link>
);

export default FeaturedProjects;