import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/94769066840?text=Hi! I\'m interested in your web services.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium text-sm">Chat with us</span>
    </button>
  );
};

export default WhatsAppButton;
