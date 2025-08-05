import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for first time visitors
      const hasSeenTooltip = localStorage.getItem('whatsapp-tooltip-seen');
      if (!hasSeenTooltip) {
        setShowTooltip(true);
        localStorage.setItem('whatsapp-tooltip-seen', 'true');
        // Hide tooltip after 3 seconds
        setTimeout(() => setShowTooltip(false), 3000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Brizza Imóveis.');
    window.open(`https://wa.me/5524988540444?text=${message}`, '_blank');
    setShowTooltip(false);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 mb-2 w-64 bg-white rounded-lg shadow-lg border p-4 animate-fade-in">
          <button 
            onClick={handleCloseTooltip}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Olá! 👋</p>
              <p className="text-sm text-gray-600">
                Precisa de ajuda? Fale conosco pelo WhatsApp!
              </p>
            </div>
          </div>
          {/* Tooltip arrow */}
          <div className="absolute bottom-0 right-6 transform translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </Button>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
    </div>
  );
};

export default WhatsAppButton;