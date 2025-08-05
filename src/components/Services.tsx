import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, DollarSign, FileCheck, Shield, Key, Building } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: DollarSign,
      title: 'Compra de Imóveis',
      description: 'Encontre o imóvel dos seus sonhos com nossa consultoria especializada e portfólio exclusivo.',
      features: ['Análise de mercado', 'Negociação especializada', 'Documentação completa']
    },
    {
      icon: Home,
      title: 'Venda de Imóveis',
      description: 'Venda seu imóvel com agilidade e segurança, obtendo o melhor valor de mercado.',
      features: ['Avaliação gratuita', 'Marketing digital', 'Acompanhamento total']
    },
    {
      icon: FileCheck,
      title: 'Avaliação de Imóveis',
      description: 'Avaliações técnicas precisas realizadas por profissionais credenciados.',
      features: ['Laudo técnico', 'Análise comparativa', 'Relatório detalhado']
    },
    {
      icon: Shield,
      title: 'Legalização',
      description: 'Regularização e legalização de imóveis com total segurança jurídica.',
      features: ['Documentação legal', 'Regularização', 'Suporte jurídico']
    },
    {
      icon: Building,
      title: 'Administração',
      description: 'Gestão completa do seu patrimônio imobiliário com transparência total.',
      features: ['Gestão de aluguéis', 'Manutenção', 'Relatórios mensais']
    },
    {
      icon: Key,
      title: 'Consultoria',
      description: 'Orientação especializada para os melhores investimentos imobiliários.',
      features: ['Análise de investimento', 'Orientação profissional', 'Suporte contínuo']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas para todas as suas necessidades imobiliárias, 
              com qualidade, segurança e transparência em cada negócio.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-3xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para realizar seu sonho imobiliário?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Entre em contato conosco e descubra como podemos ajudar você a encontrar o imóvel perfeito.
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
            >
              Fale Conosco Agora
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;