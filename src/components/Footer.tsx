import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/29c85ecc-14ee-49fb-94d1-c99f90b71a0a.png" 
                  alt="Brizza Imóveis - Logo" 
                  className="h-16 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-white/80 leading-relaxed mb-4">
                  Há 15 anos realizando sonhos e transformando vidas através do mercado imobiliário. 
                  Sua satisfação é nossa maior conquista.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">CRECI - J 6591</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('sobre')}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('depoimentos')}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                  <div className="text-white/80">
                    Rua Augusto da Silva Pinto, 721<br />
                    Lava Pés - Paraíba do Sul - RJ
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <a 
                    href="tel:+5524988540444" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    (24) 98854-0444
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <a 
                    href="mailto:jaef.brizola@gmail.com" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    jaef.brizola@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <a 
                    href="https://instagram.com/brizza_imoveis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    @brizza_imoveis
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-center md:text-left">
              <p>&copy; {currentYear} Brizza Imóveis Ltda. Todos os direitos reservados.</p>
            </div>
            <div className="text-white/80 text-center md:text-right">
              <p className="font-medium">O seu melhor negócio imobiliário</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;