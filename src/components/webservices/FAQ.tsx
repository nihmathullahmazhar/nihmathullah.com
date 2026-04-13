import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'A typical landing page takes 1–2 weeks, while a full multi-page website takes 2–4 weeks. Timeline depends on content readiness and revision rounds. We\'ll give you a clear timeline before we start.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer: 'Ideally your logo, brand colors, and any content (text or images) you want on the site. If you don\'t have these ready, no worries — we can guide you through it step by step.',
  },
  {
    question: 'Do you provide hosting and domain services?',
    answer: 'Yes! We handle domain registration, hosting setup, SSL certificates, and business email. Everything is set up for you — no technical knowledge needed on your end.',
  },
  {
    question: 'What is your payment structure?',
    answer: '50% upfront to begin, and the remaining 50% on completion before handover. For larger projects we can arrange milestone-based payments. All discussed and agreed before we start.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely. Every website we build is fully responsive — tested across mobile, tablet, and desktop to ensure it looks and works great on all screen sizes.',
  },
  {
    question: 'Do you offer maintenance after launch?',
    answer: 'Yes. All packages include free support ranging from 1–6 months. After that, we offer affordable maintenance plans covering updates, security, and performance monitoring.',
  },
  {
    question: 'Can I update the content myself?',
    answer: 'Yes — for Professional and Premium packages we integrate a CMS so you can update text, images, and content easily without any coding knowledge.',
  },
  {
    question: "What if I'm not happy with the design?",
    answer: "We work closely with you throughout the process. Every package includes revision rounds and we won't move forward until you're fully satisfied with the design.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Got questions? We've got answers. Can't find what you're looking for? Just reach out.
          </p>
        </div>

        {/* Accordion — single column, max width centered */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 transition-all duration-300 hover:border-primary/30"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold py-5 hover:no-underline hover:text-primary transition-colors gap-4 data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQ;