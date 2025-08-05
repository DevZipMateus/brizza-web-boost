import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Compradora',
      content: 'A Brizza Imóveis me ajudou a encontrar a casa dos meus sonhos. O atendimento foi excepcional e todo o processo foi muito transparente. Recomendo!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'João Santos',
      role: 'Vendedor',
      content: 'Vendi meu apartamento com a Brizza e fiquei impressionado com a agilidade. Em menos de 30 dias conseguiram um comprador pelo valor que eu esperava.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ana Costa',
      role: 'Investidora',
      content: 'Excelente consultoria para investimentos. A equipe me orientou muito bem e hoje tenho um portfólio imobiliário rentável. Profissionais competentes!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Proprietário',
      content: 'Administram meus imóveis há 3 anos. Sempre prestam contas detalhadas e cuidam de tudo com muito profissionalismo. Estou muito satisfeito.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lucia Ferreira',
      role: 'Compradora',
      content: 'Processo de compra muito seguro e bem orientado. A equipe explicou cada etapa e me deu total confiança. Indico para todos os meus amigos!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Roberto Lima',
      role: 'Vendedor',
      content: 'A Brizza conseguiu vender minha casa rural em tempo recorde. O marketing que fizeram foi excelente e o preço final superou minhas expectativas.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que nossos <span className="text-primary">clientes dizem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos 
              de quem já realizou seus sonhos conosco.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="w-8 h-8 text-primary/30" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-primary rounded-3xl p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Números que falam por si
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/90">Imóveis vendidos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-white/90">Anos no mercado</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/90">Clientes satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-white/90">Famílias atendidas</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;