import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">Brizza Imóveis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Com 15 anos de experiência no mercado imobiliário, somos especialistas em transformar sonhos em realidade através de negócios seguros e transparentes.
            </p>
          </div>

          {/* Company Description */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Experiência que faz a diferença
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Somos uma empresa que atua na compra, venda e administração de imóveis há 15 anos, 
                consolidando nossa posição como referência no mercado imobiliário de Paraíba do Sul e região.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa equipe especializada trabalha com dedicação e profissionalismo para oferecer 
                as melhores oportunidades do mercado, sempre priorizando a satisfação e segurança 
                de nossos clientes.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-accent-foreground">CRECI - J 6591</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-3xl p-8 shadow-elegant">
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">15</div>
                    <div className="text-xl font-medium">Anos de</div>
                    <div className="text-xl font-medium">Excelência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Investir, trabalhar e inovar, para oferecer habitações de qualidade, com acessibilidade 
                  e sustentabilidade, que atendam ao público alvo, buscando sempre a máxima satisfação.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conquistar e consolidar a confiança do mercado imobiliário, através da responsabilidade 
                  e do comprometimento com a qualidade, no relacionamento com os clientes, fornecedores e colaboradores.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Nossos Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Valorizar o mercado imobiliário, respeitando o meio ambiente, ouvindo, avaliando e 
                  atendendo as demandas dos clientes, estabelecendo uma marca sólida com trabalho, 
                  dignidade, respeito, justiça e transparência.
                </p>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;