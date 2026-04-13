import Header from '@/components/webservices/Header';
import Hero from '@/components/webservices/Hero';
import Services from '@/components/webservices/Services';
import Pricing from '@/components/webservices/Pricing';
// import Testimonials from '@/components/webservices/Testimonials'; // Hidden - will relaunch in a few months
import FeaturedProjects from '@/components/webservices/FeaturedProjects';
import FAQ from '@/components/webservices/FAQ';
import Contact from '@/components/webservices/Contact';
import Footer from '@/components/webservices/Footer';
import WhatsAppButton from '@/components/webservices/WhatsAppButton';
import SEOHead from '@/components/SEOHead';

const WebServices = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Web Development Services | Nihmathullah Web Services"
        description="Professional web development services including custom websites, landing pages, e-commerce solutions, and ongoing maintenance. Get your business online today."
        path="/web-services"
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        {/* <Testimonials /> */} {/* Hidden - will relaunch in a few months with real testimonials */}
        <FeaturedProjects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebServices;