
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Cloud, Earth, TreePine } from 'lucide-react';

const ImpactSection = () => {
  const impactData = [
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      title: "Consumo Energético Alarmante",
      description: "Data centers consomem 1% de toda eletricidade mundial",
      stat: "200+ TWh/ano",
      color: "bg-red-50 border-red-200",
      problem: true
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-500" />,
      title: "Emissões de CO₂",
      description: "T.I. representa 4% das emissões globais de carbono",
      stat: "4 bilhões ton/ano",
      color: "bg-orange-50 border-orange-200",
      problem: true
    },
    {
      icon: <Earth className="h-8 w-8 text-blue-500" />,
      title: "Crescimento Exponencial",
      description: "Demanda por dados dobra a cada 2 anos",
      stat: "+100% a cada 2 anos",
      color: "bg-blue-50 border-blue-200",
      problem: true
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-500" />,
      title: "Potencial de Economia",
      description: "T.I. Verde pode reduzir emissões em até 50%",
      stat: "50% de redução",
      color: "bg-green-50 border-green-200",
      problem: false
    }
  ];

  return (
    <section id="impacto" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
            Crise Ambiental Digital
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            O Impacto Oculto da Tecnologia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enquanto a tecnologia revoluciona o mundo, seu impacto ambiental cresce exponencialmente. 
            Descubra os números que as empresas não querem que você saiba.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactData.map((item, index) => (
            <Card 
              key={index} 
              className={`${item.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full shadow-md">
                  {item.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`text-2xl font-bold mb-2 ${
                  item.problem ? 'text-red-600' : 'text-green-600'
                }`}>
                  {item.stat}
                </div>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              A Cada Minuto que Passa...
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">385 kg</div>
                <div className="text-sm opacity-90">de CO₂ emitidos por data centers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2.5 milhões</div>
                <div className="text-sm opacity-90">de emails enviados</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$50,000</div>
                <div className="text-sm opacity-90">gastos em energia desnecessária</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
