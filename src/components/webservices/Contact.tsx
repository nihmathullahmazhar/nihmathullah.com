import { MessageCircle, Clock, Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = '+94769066840';
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your web development services.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm tracking-wider uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Let's discuss your vision and bring it to life. Reach out via WhatsApp for the fastest response.
            </p>
          </div>

          {/* Process Steps - Moved to Top */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { step: 1, title: 'Discuss Your Vision', desc: 'Share your project requirements and goals with us.' },
              { step: 2, title: 'Get a Quote', desc: 'Receive a detailed proposal with timeline and pricing.' },
              { step: 3, title: 'We Build & Launch', desc: 'Watch your website come to life, step by step.' },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Main CTA Card - Now Below */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-border p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left - WhatsApp CTA */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Available Now
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    Chat with Us on WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Get instant responses and discuss your project requirements directly. No forms, no waiting.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/30 group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start Conversation
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Right - Contact Info */}
                <div className="w-full lg:w-auto lg:min-w-[280px] space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Call Us</div>
                      <div className="font-semibold">{whatsappNumber}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold">nihmathullahmazhar@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                      <div className="font-semibold">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;