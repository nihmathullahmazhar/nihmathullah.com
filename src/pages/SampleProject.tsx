import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Tag, Layers } from 'lucide-react';

const projectDetails: Record<string, { title: string; category: string; description: string; features: string[]; image: string }> = {
  'luxury-restaurant': {
    title: 'Luxury Restaurant',
    category: 'Restaurant Website',
    description: 'An elegant fine dining restaurant showcase featuring premium design, menu presentations, and sophisticated ambiance.',
    features: ['Uber Integration', 'Digital Menu', 'Photo Gallery', 'Mobile Responsive'],
    image: '/assets/img/luxury-resturant.webp',
  },
  'bar-lounge': {
    title: 'Bar & Lounge',
    category: 'Restaurant Website',
    description: 'A modern bar and lounge website with event listings, drink menus, and nightlife atmosphere.',
    features: ['Event Calendar', 'Digital Menu', 'Photo Gallery', 'Social Integration'],
    image: '/assets/img/bar-lounge.webp',
  },
  'cafe-coffee': {
    title: 'Café & Coffee Shop',
    category: 'Restaurant Website',
    description: 'Artisan coffee shop website showcasing specialty drinks, pastries, and cozy atmosphere.',
    features: ['Digital Menu', 'Location Map', 'Uber Integration', 'About Story'],
    image: '/assets/img/cafe.webp',
  },
  'fast-food': {
    title: 'Fast Food Restaurant',
    category: 'Restaurant Website',
    description: 'Modern fast food and takeaway restaurant with quick ordering system and delivery options.',
    features: ['Quick Order System', 'Uber Integration', 'Menu Showcase', 'Mobile App Link'],
    image: '/assets/img/fast-food.webp',
  },
  'cloud-kitchen': {
    title: 'Cloud Kitchen & Delivery',
    category: 'Restaurant Website',
    description: 'Online delivery-focused cloud kitchen platform with streamlined ordering and menu management.',
    features: ['Uber Integration', 'Digital Menu', 'Multi-Platform Integration', 'Customer Reviews'],
    image: '/assets/img/cloud-kitchen.webp',
  },
  'bakery-dessert': {
    title: 'Bakery & Dessert Shop',
    category: 'Restaurant Website',
    description: 'Sweet treats and artisan bakery showcase with custom cake orders and daily specials.',
    features: ['Digital Menu', 'Custom Orders', 'Daily Specials', 'Pick-up System'],
    image: '/assets/img/bakery.webp',
  },
  'vegan-restaurant': {
    title: 'Vegan Restaurant',
    category: 'Restaurant Website',
    description: 'Plant-based dining with sustainable practices and health-conscious menu options.',
    features: ['Digital Menu', 'Nutrition Info', 'Sustainability Story', 'Recipe Blog'],
    image: '/assets/img/vegan.webp',
  },
  'middle-eastern': {
    title: 'Middle Eastern Restaurant',
    category: 'Restaurant Website',
    description: 'Authentic Middle Eastern cuisine with traditional recipes and cultural storytelling.',
    features: ['Digital Menu', 'Cultural Stories', 'Catering Services', 'Event Booking'],
    image: '/assets/img/middle.webp',
  },
  'street-food': {
    title: 'Street Food & Shawarma',
    category: 'Restaurant Website',
    description: 'Vibrant street food and shawarma shop with quick service and authentic flavors.',
    features: ['Digital Menu', 'Location Info', 'Order Ahead', 'Special Deals'],
    image: '/assets/img/streetfood.webp',
  },
  'general-restaurant': {
    title: 'Family Restaurant',
    category: 'Restaurant Website',
    description: 'Welcoming family-style dining experience with diverse menu and comfortable atmosphere.',
    features: ['Digital Menu', 'Kids Options', 'Party Booking', 'Photo Gallery'],
    image: '/assets/img/resturant.webp',
  },
  'dental': {
    title: 'Dental Clinic',
    category: 'Healthcare',
    description: 'Professional dental clinic website with appointment booking, services overview, and patient resources.',
    features: ['Online Appointments', 'Service Pages', 'Doctor Profiles', 'Contact Form'],
    image: '/assets/img/dental.webp',
  },
  'trainer': {
    title: 'Personal Trainer',
    category: 'Fitness',
    description: 'Personal trainer portfolio showcasing programs, transformations, and booking sessions.',
    features: ['Program Plans', 'Client Testimonials', 'Session Booking', 'Gallery'],
    image: '/assets/img/trainer.webp',
  },
  'plumber': {
    title: 'Plumbing Services',
    category: 'Service',
    description: 'Local plumbing service website with service listings, emergency contact, and service areas.',
    features: ['Service List', 'Emergency Call CTA', 'Service Areas', 'Quote Request'],
    image: '/assets/img/plumber.webp',
  },
  'gym': {
    title: 'Gym & Fitness Center',
    category: 'Fitness',
    description: 'Modern gym website featuring memberships, class schedules, and trainer profiles.',
    features: ['Membership Plans', 'Class Schedule', 'Trainer Profiles', 'Online Signup form'],
    image: '/assets/img/gym.webp',
  },
  'doctor': {
    title: 'Doctor',
    category: 'Healthcare', 
    description: 'Doctor profile website with consultation booking and patient information.',
    features: ['Overview on Dr.', 'Services Overview', 'Patient Info', 'Contact'],
    image: '/assets/img/doctor.webp',
  },
  'tuition': {
    title: 'Tuition Center',
    category: 'Education',
    description: 'Educational institute website highlighting courses, schedules, and enrollment.',
    features: ['Course Listings', 'Enrollment info', 'Schedule Info', 'Student Resources'],
    image: '/assets/img/tuition.webp',
  },
  'wellness': {
    title: 'Wellness & Spa',
    category: 'Salon & Wellness',
    description: 'Relaxing wellness center website with services, packages, and booking options.',
    features: ['Service Menu', 'Online Booking through CTA', 'Packages', 'Testimonials'],
    image: '/assets/img/wellness.webp',
  },
  'saloon': {
    title: 'Salon & Beauty',
    category: 'Salon & Wellness',
    description: 'Beauty salon website with service pricing, stylist profiles, and booking.',
    features: ['Service Pricing', 'Stylist Profiles', 'Appointment Booking', 'Gallery'],
    image: '/assets/img/saloon.webp',
  },
  'lawfirm': {
    title: 'Law Firm',
    category: 'Service',
    description: 'Professional law firm website showcasing practice areas and legal expertise.',
    features: ['Practice Areas', 'Attorney Profiles', 'Consultation Form', 'Case Studies'],
    image: '/assets/img/lawfirm.webp',
  },
  'lawyer': {
    title: 'Independent Lawyer',
    category: 'Professional',
    description: 'Personal lawyer portfolio with services, experience, and consultation booking.',
    features: ['Service Overview', 'Experience Timeline', 'Booking Form', 'Testimonials'],
    image: '/assets/img/lawyer.webp',
  },
  'resort': {
    title: 'Resort & Hotel',
    category: 'Hospitality',
    description: 'Luxury resort website with room showcases, amenities, and booking integration.',
    features: ['Room Listings', 'Amenities', 'Booking System', 'Gallery'],
    image: '/assets/img/resort.webp',
  },
  'villa': {
    title: 'Villa Rental',
    category: 'Hospitality',
    description: 'Premium villa rental showcase with property details and reservation system.',
    features: ['Property Gallery', 'Availability Calendar', 'Booking Inquiry', 'Location Map'],
    image: '/assets/img/villa.webp',
  },
  'realestate': {
    title: 'Real Estate Agency',
    category: 'Property',
    description: 'Real estate agency platform with property listings and agent contact.',
    features: ['Property Listings', 'Search & Filters', 'Agent Profiles', 'Inquiry Form'],
    image: '/assets/img/realestate.webp',
  },
  'accounts': {
    title: 'Accounting Firm',
    category: 'Service',
    description: 'Professional accounting and finance firm website with services and consultations.',
    features: ['Service Overview', 'Online Booking through CTA', 'Client Resources', 'Contact'],
    image: '/assets/img/accounts.webp',
  },
  'construction': {
    title: 'Construction Company',
    category: 'Service',
    description: 'Construction and contracting company website with project portfolio.',
    features: ['Project Portfolio', 'Service List', 'Quote Request', 'Company Profile'],
    image: '/assets/img/construction.webp',
  },
  'realestate2': {
    title: 'Property Listing Platform',
    category: 'Property',
    description: 'Modern property marketplace with advanced search and featured listings.',
    features: ['Advanced Filters', 'Featured Properties', 'Agent Contact', 'Map Integration'],
    image: '/assets/img/realestate2.webp',
  },
  'band': {
    title: 'Music Band',
    category: 'Professional',
    description: 'A modern music band website featuring discography, upcoming events, media gallery, and booking contact.',
    features: ['Event Listings', 'Music/Media Gallery', 'Band Member Profiles', 'Booking Contact'],
    image: '/assets/img/band.webp',
  },
};

const SampleProject = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectDetails[projectId] : null;

  const whatsappNumber = '+94769066840';
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in a website similar to ${project?.title || 'your sample projects'}.`);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center dark">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">This sample project doesn't exist yet.</p>
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark">

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
           <a href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Get This Design
          </a>
        </nav>
      </header>

      {/* Full Width Hero Image — no crop, full image shown */}
      <div className="pt-16">
        <div className="relative w-full bg-card">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-10">
            <div className="container mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-3">
                <Tag className="w-3 h-3" />
                {project.category}
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">

          {/* Description + Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Description */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-display font-bold text-lg mb-3">About This Sample</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                This is a demo sample — contact us to get a similar website built for your business.
              </p>
            </div>

            {/* Features */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-primary" />
                <h2 className="font-display font-bold text-lg">Key Features</h2>
              </div>
              <ul className="flex flex-col gap-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-display font-bold mb-2">Like What You See?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Get a website like this built for your business. Contact us on WhatsApp and we'll bring your vision to life.
            </p>
            
             <a href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </main>
    </div>
  );
};

export default SampleProject;