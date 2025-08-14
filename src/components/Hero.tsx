
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Key, Star } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-white/5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">15 anos de experiência no mercado</span>
          </div>

          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Seu <span className="text-yellow-300">melhor negócio</span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              imobiliário
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Na Brizza Imóveis, transformamos sonhos em realidade. Especialistas em compra, venda e administração de imóveis com qualidade, confiança e transparência.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button size="lg" onClick={() => scrollToSection('servicos')} className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg group">
              Nossos Serviços
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" onClick={() => scrollToSection('contato')} className="w-full sm:w-auto border border-white text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg backdrop-blur-sm bg-green-800 hover:bg-green-700 transition-colors">
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">Imóveis vendidos</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Key className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">15</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">Anos de experiência</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">Clientes satisfeitos</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
