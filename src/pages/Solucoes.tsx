
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cloud, Zap, Recycle, Leaf, Sun, Wind, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Solucoes = () => {
  const solutions = [
    {
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      title: "Cloud Computing Verde",
      description: "Migração para provedores com energia renovável (Accenture, 2020)",
      benefits: ["65% redução energética", "84% menos emissões CO₂", "Economia $250k-1M/ano"],
      tag: "Comprovado",
      color: "bg-blue-50 border-blue-200",
      difficulty: "Médio",
      timeToImplement: "3-6 meses",
      source: "Accenture Cloud Sustainability Report (2020)"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Otimização Energética AI",
      description: "IA para eficiência energética (DeepMind Google, 2016-2019)",
      benefits: ["40% redução no resfriamento", "15% economia total energia", "PUE < 1.1 alcançável"],
      tag: "Google AI",
      color: "bg-yellow-50 border-yellow-200",
      difficulty: "Avançado",
      timeToImplement: "6-12 meses",
      source: "Nature Energy (2019) & DeepMind Blog"
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-500" />,
      title: "Economia Circular Digital",
      description: "Estratégias validadas pela Ellen MacArthur Foundation (2019)",
      benefits: ["3x vida útil equipamentos", "90% redução resíduos", "ROI 200-400%"],
      tag: "Validado",
      color: "bg-green-50 border-green-200",
      difficulty: "Médio",
      timeToImplement: "4-8 meses",
      source: "Ellen MacArthur Foundation (2019)"
    },
    {
      icon: <Leaf className="h-8 w-8 text-eco-primary" />,
      title: "Green Software Engineering",
      description: "Metodologias do Green Software Foundation (2021)",
      benefits: ["30-60% menos energia", "50% menor latência", "Carbon-aware computing"],
      tag: "Emergente",
      color: "bg-green-50 border-green-200",
      difficulty: "Avançado",
      timeToImplement: "8-16 semanas",
      source: "Green Software Foundation (2021)"
    },
    {
      icon: <Sun className="h-8 w-8 text-orange-500" />,
      title: "Energia Renovável 100%",
      description: "Casos Apple, Google, Microsoft (RE100 Initiative)",
      benefits: ["100% energia limpa", "Neutralidade carbono", "85% redução emissões"],
      tag: "Líderes",
      color: "bg-orange-50 border-orange-200",
      difficulty: "Complexo",
      timeToImplement: "12-36 meses",
      source: "RE100 Progress Report (2023)"
    },
    {
      icon: <Wind className="h-8 w-8 text-cyan-500" />,
      title: "Refrigeração Líquida Avançada",
      description: "Tecnologia validada pela Microsoft (Project Natick)",
      benefits: ["50% menos energia refrigeração", "Maior densidade computacional", "99.9% uptime"],
      tag: "Inovador",
      color: "bg-cyan-50 border-cyan-200",
      difficulty: "Avançado",
      timeToImplement: "6-18 meses",
      source: "Microsoft Research (2020)"
    }
  ];

  const quickWins = [
    {
      title: "Virtualização de Servidores",
      description: "Meta-análise VMware (2021) - consolidação comprovada",
      impact: "70% redução consumo energético",
      implementation: "2-4 semanas",
      source: "VMware vSphere Efficiency Study (2021)"
    },
    {
      title: "Power Management ACPI",
      description: "Políticas baseadas em Energy Star Guidelines",
      impact: "25-30% economia desktops/laptops",
      implementation: "1 semana",
      source: "Energy Star Computer Specification (2023)"
    },
    {
      title: "Migração SSD Enterprise",
      description: "Estudos Intel & Samsung sobre eficiência energética",
      impact: "60% menos consumo + 10x durabilidade",
      implementation: "2-3 semanas",
      source: "Intel SSD Energy Efficiency Report (2022)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header/Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-eco-primary animate-pulse-green" />
              <span className="text-2xl font-bold text-gray-800">EcoTech</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-eco-primary transition-colors">Início</Link>
              <Link to="/impactos" className="text-gray-600 hover:text-eco-primary transition-colors">Impactos</Link>
              <Link to="/solucoes" className="text-eco-primary font-semibold">Soluções</Link>
              <Link to="/dados" className="text-gray-600 hover:text-eco-primary transition-colors">Dados</Link>
              <Link to="/about" className="text-gray-600 hover:text-eco-primary transition-colors">O que é TI Verde</Link>
              <Link to="/calculator" className="text-gray-600 hover:text-eco-primary transition-colors">Calculadora</Link>
            </div>
            <Link to="/calculator">
              <Button className="bg-eco-primary hover:bg-eco-secondary text-white">
                Calcular Impacto
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-eco-primary/10 text-eco-primary border-eco-primary/20">
              Soluções Cientificamente Validadas
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Implementações Comprovadas de 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-green-600"> T.I. Verde</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Baseado em casos reais da Google, Microsoft, Apple e pesquisas de universidades como MIT, Stanford 
              e publicações em Nature Energy, Science e IEEE.
            </p>
            
            {/* Success Stats - Real Data */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-primary">40-84%</div>
                <div className="text-sm text-gray-600">redução real em emissões (Google, 2021)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-primary">1000+</div>
                <div className="text-sm text-gray-600">empresas na iniciativa RE100</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-primary">$3.6T</div>
                <div className="text-sm text-gray-600">economia projetada até 2030 (WEF)</div>
              </div>
            </div>
          </div>

          {/* Quick Wins Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Implementações Rápidas - Resultados Comprovados
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {quickWins.map((win, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-eco-primary animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-gray-800">{win.title}</CardTitle>
                      <CheckCircle className="h-5 w-5 text-eco-primary" />
                    </div>
                    <CardDescription className="text-gray-600">
                      {win.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Impacto:</span>
                        <span className="text-sm font-semibold text-eco-primary">{win.impact}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Implementação:</span>
                        <span className="text-sm font-semibold text-blue-600">{win.implementation}</span>
                      </div>
                      <div className="text-xs text-gray-500 italic mt-2">
                        Fonte: {win.source}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div className="bg-white/50 p-2 rounded">
                      <div className="text-gray-600">Complexidade</div>
                      <div className="font-semibold">{solution.difficulty}</div>
                    </div>
                    <div className="bg-white/50 p-2 rounded">
                      <div className="text-gray-600">Timeline</div>
                      <div className="font-semibold">{solution.timeToImplement}</div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 italic mb-3">
                    Fonte: {solution.source}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-eco-primary text-eco-primary hover:bg-eco-primary hover:text-white"
                  >
                    Detalhes Técnicos <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Implementation Timeline - Real World Data */}
          <div className="bg-gradient-to-r from-eco-primary to-green-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-4">
              Timeline Baseado em Casos Reais
            </h3>
            <p className="text-center mb-8 opacity-90">Dados coletados de implementações da Microsoft, Google, Facebook e estudos MIT (2019-2023)</p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1-2 Semanas</div>
                <div className="text-sm opacity-90">Auditoria energética automatizada</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1-3 Meses</div>
                <div className="text-sm opacity-90">Implementação soluções rápidas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30-60 Dias</div>
                <div className="text-sm opacity-90">Primeiros 20-40% de economia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6-12 Meses</div>
                <div className="text-sm opacity-90">ROI completo + neutralidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;
