import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Lazer",
      image: "/lovable-uploads/b30c507b-aadd-455c-ae87-405c5b77ca02.png",
      description: "Espaços planejados para momentos de relaxamento e bem-estar"
    },
    {
      id: 2,
      title: "Residencial Paraíba parque 2",
      image: "/lovable-uploads/b515ef3b-d2db-44d8-96e4-103b0a2c99c7.png",
      description: "Ambientes modernos e sofisticados para seu conforto"
    },
    {
      id: 3,
      title: "Diversão",
      image: "/lovable-uploads/5523f293-b75f-44a4-9567-1c06f34b0ed5.png",
      description: "Áreas de entretenimento para toda a família"
    },
    {
      id: 4,
      title: "Acessibilidade",
      image: "/lovable-uploads/2c8f6c31-f4ce-4653-bdf9-6689a5fa5373.png",
      description: "Projetos pensados para atender todas as necessidades"
    },
    {
      id: 5,
      title: "Convivência",
      image: "/lovable-uploads/846293d0-afc4-498d-b213-0fc2542edc5a.png",
      description: "Espaços que promovem a interação e o convívio social"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-brizza-green">Destaques</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos melhores projetos e espaços que transformam vidas e criam memórias especiais
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 sm:h-56 lg:h-64 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-brizza-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Quer conhecer mais sobre nossos projetos?
          </p>
          <a 
            href="https://wa.me/5524988540444" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brizza-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brizza-green-dark transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;