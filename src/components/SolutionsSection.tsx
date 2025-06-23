
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cloud, Zap, Recycle, Leaf, Sun, Wind } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      title: "Cloud Computing Verde",
      description: "Migração para provedores de nuvem que usam 100% energia renovável",
      benefits: ["80% menos consumo energético", "Redução de 75% nas emissões", "Economia de até $100k/ano"],
      tag: "Essencial",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Otimização Energética",
      description: "Algoritmos inteligentes para gerenciamento eficiente de recursos",
      benefits: ["Monitoramento em tempo real", "Desligamento automático", "50% economia energética"],
      tag: "Inovador",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-500" />,
      title: "Economia Circular Digital",
      description: "Estratégias para reutilização e reciclagem de equipamentos de T.I.",
      benefits: ["Vida útil 3x maior", "95% menos resíduos", "ROI de 300%"],
      tag: "Sustentável",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Leaf className="h-8 w-8 text-eco-primary" />,
      title: "Código Verde",
      description: "Desenvolvimento de software otimizado para menor consumo energético",
      benefits: ["Aplicações 60% mais eficientes", "Menor latência", "Melhor experiência do usuário"],
      tag: "Técnico",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Sun className="h-8 w-8 text-orange-500" />,
      title: "Energia Renovável",
      description: "Implementação de fontes de energia limpa para infraestrutura de T.I.",
      benefits: ["100% energia limpa", "Independência energética", "Redução de 90% em emissões"],
      tag: "Futuro",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Wind className="h-8 w-8 text-cyan-500" />,
      title: "Refrigeração Inteligente",
      description: "Sistemas de resfriamento eficientes para data centers",
      benefits: ["40% menos energia para refrigeração", "Temperatura otimizada", "Maior vida útil dos equipamentos"],
      tag: "Eficiência",
      color: "bg-cyan-50 border-cyan-200"
    }
  ];

  return (
    <section id="solucoes" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-eco-primary/10 text-eco-primary border-eco-primary/20">
            Soluções Inovadoras
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transforme Sua Empresa com 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-green-600"> T.I. Verde</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Implementamos estratégias comprovadas que reduzem custos, aumentam eficiência 
            e posicionam sua empresa como líder em sustentabilidade.
          </p>
          
          {/* Success Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-eco-primary">94%</div>
              <div className="text-sm text-gray-600">de redução em custos energéticos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-eco-primary">500+</div>
              <div className="text-sm text-gray-600">empresas transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-eco-primary">$2.3M</div>
              <div className="text-sm text-gray-600">economia média por empresa</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className={`${solution.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {solution.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-eco-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-eco-primary text-eco-primary hover:bg-eco-primary hover:text-white"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Timeline */}
        <div className="mt-20 bg-gradient-to-r from-eco-primary to-green-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">
            Cronograma de Implementação
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1ª Semana</div>
              <div className="text-sm opacity-90">Auditoria energética completa</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2-4 Semanas</div>
              <div className="text-sm opacity-90">Implementação das soluções</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1º Mês</div>
              <div className="text-sm opacity-90">Primeiros resultados visíveis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3 Meses</div>
              <div className="text-sm opacity-90">ROI completo alcançado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
