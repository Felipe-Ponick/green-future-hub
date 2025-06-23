
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const StatsSection = () => {
  const stats = [
    {
      number: "4%",
      label: "das emissões globais de CO₂",
      sublabel: "vêm da indústria de T.I.",
      color: "text-red-500"
    },
    {
      number: "200+",
      label: "TWh de energia por ano",
      sublabel: "consumidos por data centers",
      color: "text-orange-500"
    },
    {
      number: "50%",
      label: "de redução possível",
      sublabel: "com T.I. Verde implementada",
      color: "text-eco-primary"
    },
    {
      number: "$1.2T",
      label: "mercado global de T.I. Verde",
      sublabel: "até 2030",
      color: "text-green-600"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Tecnologia",
      reduction: "89%",
      savings: "$2.4M",
      description: "Migração completa para cloud verde e otimização de código"
    },
    {
      company: "RetailMax",
      industry: "Varejo",
      reduction: "76%",
      savings: "$1.8M",
      description: "Implementação de sistemas de refrigeração inteligente"
    },
    {
      company: "FinanceOne",
      industry: "Financeiro",
      reduction: "82%",
      savings: "$3.1M",
      description: "Economia circular digital e energia renovável"
    }
  ];

  return (
    <section id="stats" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Stats Grid */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            Dados Impactantes
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Números que Não Mentem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dados reais que mostram a urgência da transformação digital sustentável
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.sublabel}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Casos de Sucesso
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{study.company}</h4>
                      <p className="text-sm text-gray-600">{study.industry}</p>
                    </div>
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-eco-primary">{study.reduction}</div>
                      <div className="text-xs text-gray-600">Redução CO₂</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{study.savings}</div>
                      <div className="text-xs text-gray-600">Economia/Ano</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{study.description}</p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Caso Completo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-eco-primary to-green-600 text-white p-12 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Transformar Sua Empresa?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Junte-se às 500+ empresas que já reduziram suas emissões em até 89%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" variant="secondary" className="bg-white text-eco-primary hover:bg-gray-100">
              Agendar Consultoria Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-eco-primary">
              Baixar Relatório Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
