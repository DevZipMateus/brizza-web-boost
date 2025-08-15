import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home, Key } from 'lucide-react';

const Properties = () => {
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  const property1Images = [
    '/lovable-uploads/Brizza/imovel1/1561EA51EF4DA207AD063F34107F17B4.jpeg',
    '/lovable-uploads/Brizza/imovel1/1B34F18E66D87B7338A2CD736335211A.jpeg',
    '/lovable-uploads/Brizza/imovel1/327EB6A792A9202B38AAEA1258DE4618.jpeg',
    '/lovable-uploads/Brizza/imovel1/7963184F555880A420C741499DE2046D.jpeg',
    '/lovable-uploads/Brizza/imovel1/88BB722715E181BC807023D37B37D7FA.jpeg',
    '/lovable-uploads/Brizza/imovel1/B1149DAEC0D92C58517CF9C4850FE5B9.jpeg',
    '/lovable-uploads/Brizza/imovel1/D65509F2A0177498A921760C37454607.jpeg',
    '/lovable-uploads/Brizza/imovel1/D7C32FB3961E132DCECDDD60B9F15678.jpeg',
    '/lovable-uploads/Brizza/imovel1/E1904AF74D02EA3A1BBBE0EDDC36FE7C.jpeg'
  ];

  const property2Images = [
    '/lovable-uploads/Brizza/imovel2/28F9C248920EAD092F640C25DC53CEBF.jpeg',
    '/lovable-uploads/Brizza/imovel2/45B7DE588854DF10DCDE66FCC84905BE.jpeg',
    '/lovable-uploads/Brizza/imovel2/51ED2E59389BA5A94FB8555C2DA746FB.jpeg',
    '/lovable-uploads/Brizza/imovel2/58E094D2620D68D16EDD1CB476176A7E.jpeg',
    '/lovable-uploads/Brizza/imovel2/7D6C7F4C17C2582836CB568578158D59.jpeg',
    '/lovable-uploads/Brizza/imovel2/8E3A891A0F1E80DDCEF0EC83D8140636.jpeg',
    '/lovable-uploads/Brizza/imovel2/AAB9BB1F4B16C26ABDC2CC2DB0E63B7A.jpeg',
    '/lovable-uploads/Brizza/imovel2/C3B94E568FDDC6594756498AA6CE45FE.jpeg',
    '/lovable-uploads/Brizza/imovel2/C8BCEB823F9CE76956D8DE13811CA778.jpeg',
    '/lovable-uploads/Brizza/imovel2/D2B49E06C5FC89C10E3B470993953FDD.jpeg',
    '/lovable-uploads/Brizza/imovel2/D76703EC9D7939ABF555DA14451126CF.jpeg'
  ];

  const nextImage = (propertyIndex: number) => {
    if (propertyIndex === 1) {
      setCurrentImageIndex1((prev) => (prev + 1) % property1Images.length);
    } else {
      setCurrentImageIndex2((prev) => (prev + 1) % property2Images.length);
    }
  };

  const prevImage = (propertyIndex: number) => {
    if (propertyIndex === 1) {
      setCurrentImageIndex1((prev) => (prev - 1 + property1Images.length) % property1Images.length);
    } else {
      setCurrentImageIndex2((prev) => (prev - 1 + property2Images.length) % property2Images.length);
    }
  };

  const contactWhatsApp = (property: string) => {
    const message = `Olá! Tenho interesse no ${property}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5548996031847?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="imoveis" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Imóveis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça nossas opções disponíveis para venda e locação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Imóvel 1 - Venda */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Home className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  VENDA
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                CASA 2 QUARTOS
              </CardTitle>
            </CardHeader>
            
            <div className="relative">
              <img
                src={property1Images[currentImageIndex1]}
                alt={`Casa para venda - Imagem ${currentImageIndex1 + 1}`}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={() => prevImage(1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={() => nextImage(1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {currentImageIndex1 + 1} / {property1Images.length}
              </div>
            </div>

            <CardContent className="p-6">
              <CardDescription className="text-base leading-relaxed mb-4">
                PRONTAS PARA MORAR, OU NA PLANTA.
                <br />
                EXCELENTE LOCALIZAÇÃO, GARAGEM PARA 2 CARROS, QUINTAL PARA ÁREA GOURMET, SALA E COZINHA AMPLA, ÁREA DE SERVIÇO.
                <br />
                <span className="font-semibold text-primary">Aceita financiamento Caixa</span>
              </CardDescription>
              <Button 
                onClick={() => contactWhatsApp('casa de 2 quartos para venda')}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Tenho Interesse
              </Button>
            </CardContent>
          </Card>

          {/* Imóvel 2 - Locação */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Key className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                  LOCAÇÃO
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                COBERTURA DÚPLEX
              </CardTitle>
            </CardHeader>
            
            <div className="relative">
              <img
                src={property2Images[currentImageIndex2]}
                alt={`Cobertura duplex para locação - Imagem ${currentImageIndex2 + 1}`}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={() => prevImage(2)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={() => nextImage(2)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {currentImageIndex2 + 1} / {property2Images.length}
              </div>
            </div>

            <CardContent className="p-6">
              <CardDescription className="text-base leading-relaxed mb-4">
                Condomínio fechado, área de lazer com piscinas, play e salão de festas, prédio sem escadas, linda vista para a natureza, total segurança e tranquilidade.
              </CardDescription>
              <Button 
                onClick={() => contactWhatsApp('cobertura dúplex para locação')}
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                Tenho Interesse
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Properties;