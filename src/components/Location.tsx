import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossa <span className="text-primary">Localização</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos estrategicamente localizados no coração de Paraíba do Sul, 
              prontos para atender você com todo o carinho e profissionalismo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8937458398283!2d-43.283829625080044!3d-22.166666449473996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989428f5c4a623%3A0x8b7c5e2d3f4e5b6a!2sRua%20Augusto%20da%20Silva%20Pinto%2C%20721%20-%20Lava%20P%C3%A9s%2C%20Para%C3%ADba%20do%20Sul%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1699123456789!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Brizza Imóveis"
                ></iframe>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-6">
              
              {/* Address */}
              <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                      <p className="text-muted-foreground">
                        Rua Augusto da Silva Pinto, 721<br />
                        Lava Pés - Paraíba do Sul - RJ
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                      <a 
                        href="tel:+5524988540444" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (24) 98854-0444
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <a 
                        href="mailto:jaef.brizola@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        jaef.brizola@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Horário de Atendimento</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/brizza_imoveis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @brizza_imoveis
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;