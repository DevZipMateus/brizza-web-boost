import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornaremos em breve!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Brizza Imóveis.');
    window.open(`https://wa.me/5524988540444?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para ajudar você a realizar seus objetivos imobiliários. 
              Entre em contato conosco e descubra como podemos ajudar!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Envie sua mensagem</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Qual o motivo do seu contato?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-nos mais sobre o que você precisa..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 text-lg group"
                    >
                      Enviar Mensagem
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              
              {/* WhatsApp */}
              <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">Atendimento rápido e direto</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Fale conosco agora mesmo pelo WhatsApp e tire todas suas dúvidas sobre imóveis.
                  </p>
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                  >
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Telefone</h3>
                      <p className="text-muted-foreground">Ligue agora mesmo</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Nosso telefone está sempre disponível para esclarecer suas dúvidas.
                  </p>
                  <a 
                    href="tel:+5524988540444"
                    className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    (24) 98854-0444
                  </a>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Mail className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Email</h3>
                      <p className="text-muted-foreground">Envie sua mensagem</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Prefere email? Envie sua mensagem e responderemos rapidamente.
                  </p>
                  <a 
                    href="mailto:jaef.brizola@gmail.com"
                    className="block w-full text-center bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    jaef.brizola@gmail.com
                  </a>
                </CardContent>
              </Card>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;