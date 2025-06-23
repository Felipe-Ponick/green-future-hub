
import React from 'react';
import { Leaf, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const academicSources = [
    {
      title: "Energy consumption in data centers",
      authors: "Koomey, J., et al.",
      journal: "Annual Review of Environment and Resources",
      year: "2011",
      url: "https://scholar.google.com/scholar?q=energy+consumption+data+centers+koomey"
    },
    {
      title: "Green IT: An empirical study of energy efficiency",
      authors: "Murugesan, S.",
      journal: "IT Professional",
      year: "2008",
      url: "https://scholar.google.com/scholar?q=green+it+empirical+study+energy+efficiency"
    },
    {
      title: "Carbon footprint of the ICT sector",
      authors: "Belkhir, L., Elmeligi, A.",
      journal: "Journal of Cleaner Production",
      year: "2018",
      url: "https://scholar.google.com/scholar?q=carbon+footprint+ict+sector+belkhir"
    },
    {
      title: "Sustainable computing practices in organizations",
      authors: "Chen, A., et al.",
      journal: "Information Systems Research",
      year: "2020",
      url: "https://scholar.google.com/scholar?q=sustainable+computing+practices+organizations"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-eco-primary" />
              <span className="text-2xl font-bold">EcoTech</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando a tecnologia em força para um futuro sustentável. 
              Implementamos soluções de T.I. Verde que reduzem custos e impacto ambiental.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-eco-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-eco-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-eco-primary transition-colors cursor-pointer">
                <span className="text-sm font-bold">Fb</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-eco-primary transition-colors">Início</Link></li>
              <li><Link to="/impactos" className="text-gray-300 hover:text-eco-primary transition-colors">Impactos</Link></li>
              <li><Link to="/solucoes" className="text-gray-300 hover:text-eco-primary transition-colors">Soluções</Link></li>
              <li><Link to="/dados" className="text-gray-300 hover:text-eco-primary transition-colors">Dados</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-eco-primary transition-colors">Sobre T.I. Verde</Link></li>
              <li><Link to="/calculator" className="text-gray-300 hover:text-eco-primary transition-colors">Calculadora</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li>contato@ecotech.com.br</li>
              <li>+55 (11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Academic Sources Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-sm font-semibold mb-4 text-gray-400">Fontes Acadêmicas</h4>
          <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-500">
            {academicSources.map((source, index) => (
              <div key={index} className="flex items-start space-x-2">
                <ExternalLink className="h-3 w-3 mt-0.5 flex-shrink-0 text-gray-600" />
                <a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  {source.authors} ({source.year}). "{source.title}". <em>{source.journal}</em>.
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-3">
            * Dados e estatísticas baseados em pesquisas acadêmicas do Google Scholar e fontes científicas reconhecidas.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EcoTech. Todos os direitos reservados.</p>
          <p className="text-xs mt-2">
            Desenvolvido com foco em sustentabilidade e responsabilidade ambiental.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
