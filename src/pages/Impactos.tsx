
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Cloud, Earth, TreePine, Leaf, AlertTriangle, TrendingUp, Factory, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Impactos = () => {
  const impactData = [
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      title: "Consumo Energético Global",
      description: "Data centers consomem 1% da eletricidade mundial (IEA, 2022)",
      stat: "205 TWh/ano",
      color: "bg-red-50 border-red-200",
      problem: true,
      source: "Agência Internacional de Energia (2022)"
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-500" />,
      title: "Emissões de CO₂ do Setor TIC",
      description: "Tecnologia representa 3,9% das emissões globais (Freitag et al., 2021)",
      stat: "1,8-2,8 Gt CO₂/ano",
      color: "bg-orange-50 border-orange-200",
      problem: true,
      source: "Journal of Cleaner Production (2021)"
    },
    {
      icon: <Earth className="h-8 w-8 text-blue-500" />,
      title: "Crescimento Exponencial",
      description: "Tráfego de dados cresce 26% ao ano (Cisco, 2023)",
      stat: "+26% ao ano",
      color: "bg-blue-50 border-blue-200",
      problem: true,
      source: "Cisco Annual Internet Report (2023)"
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-500" />,
      title: "Potencial de Redução",
      description: "TI Verde pode reduzir 40-50% das emissões (Malmodin & Lundén, 2018)",
      stat: "40-50% redução",
      color: "bg-green-50 border-green-200",
      problem: false,
      source: "ICT4S Conference (2018)"
    }
  ];

  const detailedImpacts = [
    {
      icon: <Factory className="h-6 w-6 text-gray-600" />,
      title: "Data Centers Globais",
      description: "Estudo da Nature Communications (2020) mostra crescimento exponencial",
      impact: "205 TWh anuais - equivalente ao consumo da Argentina",
      trend: "Crescimento de 8% ao ano até 2030 (Masanet et al., 2020)",
      source: "Nature Communications, 2020"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-gray-600" />,
      title: "Dispositivos Eletrônicos",
      description: "Relatório da ITU (2020) sobre resíduos eletrônicos globais",
      impact: "53,6 milhões de toneladas de e-waste em 2019",
      trend: "Apenas 17,4% reciclado adequadamente (Forti et al., 2020)",
      source: "ITU Global E-waste Monitor (2020)"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-gray-600" />,
      title: "Streaming de Vídeo",
      description: "Pesquisa do The Shift Project (2019) sobre impacto digital",
      impact: "306 MtCO₂ em 2018 - 0,6% das emissões globais",
      trend: "Crescimento de 9% ao ano no consumo energético",
      source: "The Shift Project (2019)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header/Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-xl sm:text-2xl font-bold text-gray-800">EcoTech</span>
            </div>
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link to="/" className="text-gray-600 hover:text-eco-primary transition-colors">Início</Link>
              <Link to="/impactos" className="text-eco-primary font-semibold">Impactos</Link>
              <Link to="/dados" className="text-gray-600 hover:text-eco-primary transition-colors">Dados</Link>
              <Link to="/about" className="text-gray-600 hover:text-eco-primary transition-colors">O que é TI Verde</Link>
              <Link to="/calculator" className="text-gray-600 hover:text-eco-primary transition-colors">Calculadora</Link>
            </div>
            <Link to="/calculator">
              <Button className="bg-eco-primary hover:bg-eco-secondary text-white text-sm sm:text-base px-3 sm:px-4">
                Calcular
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200 text-sm sm:text-base">
              Dados Científicos Comprovados
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              O Impacto Real da Tecnologia
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
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
                  <CardDescription className="text-gray-600 mb-3">
                    {item.description}
                  </CardDescription>
                  <div className="text-xs text-gray-500 italic">
                    Fonte: {item.source}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Impact Analysis */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4">
              Outros Dados Importantes
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {detailedImpacts.map((impact, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-l-red-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {impact.icon}
                      </div>
                      <CardTitle className="text-xl text-gray-800">{impact.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">
                      {impact.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="text-sm font-semibold text-red-800 mb-1">Impacto Medido</div>
                        <div className="text-sm text-red-700">{impact.impact}</div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="text-sm font-semibold text-orange-800 mb-1">Projeção Científica</div>
                        <div className="text-sm text-orange-700">{impact.trend}</div>
                      </div>
                      <div className="text-xs text-gray-500 italic mt-2">
                        Fonte: {impact.source}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impactos;
