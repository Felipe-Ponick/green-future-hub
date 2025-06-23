
import React from 'react';
import { Button } from '@/components/ui/button';
import { Earth, Zap, Leaf, Recycle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-eco-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-eco-primary" />
                <span className="text-eco-primary font-semibold">Tecnologia Sustentável</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                O Futuro da 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-green-600"> T.I. Verde</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra como sua empresa pode reduzir drasticamente o impacto ambiental da tecnologia 
                e se tornar líder em sustentabilidade digital.
              </p>
            </div>

            {/* Key Stats Preview */}
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-primary">4%</div>
                <div className="text-sm text-gray-600">das emissões globais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-primary">200+</div>
                <div className="text-sm text-gray-600">TWh por ano</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-primary">50%</div>
                <div className="text-sm text-gray-600">de economia possível</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-eco-primary hover:bg-eco-secondary text-white px-8 py-3">
                <Zap className="mr-2 h-5 w-5" />
                Analise Seu Impacto
              </Button>
              <Button variant="outline" size="lg" className="border-eco-primary text-eco-primary hover:bg-eco-primary hover:text-white px-8 py-3">
                Ver Demonstração
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Central Earth */}
              <div className="absolute inset-0 bg-gradient-to-br from-eco-primary to-green-600 rounded-full shadow-2xl animate-float">
                <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-green-500 rounded-full">
                  <div className="absolute inset-8 flex items-center justify-center">
                    <Earth className="h-32 w-32 text-white" />
                  </div>
                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <Leaf className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 h-8 w-8 text-eco-primary" />
                <Zap className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2 h-8 w-8 text-yellow-500" />
                <Recycle className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
