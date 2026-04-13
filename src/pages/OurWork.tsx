import Header from '@/components/webservices/Header';
import Portfolio from '@/components/webservices/Portfolio';
import Footer from '@/components/webservices/Footer';
import WhatsAppButton from '@/components/webservices/WhatsAppButton';
import SEOHead from '@/components/SEOHead';

const OurWork = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <SEOHead 
        title="Our Work | Nihmathullah Web Services Portfolio"
        description="Browse our portfolio of professional websites including restaurants, e-commerce, healthcare, real estate, and more. See the quality we deliver."
        path="/our-work"
      />
      <Header />
      <main className="pt-24">
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OurWork;
