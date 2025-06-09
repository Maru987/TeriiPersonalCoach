import React from 'react';
import { CheckCircle, Star, Crown, Zap, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: "Starter Pack",
      subtitle: "Pour commencer",
      price: "49€",
      period: "/mois",
      icon: <Target size={32} />,
      image: "/StarterPack.jpeg",
      features: [
        "Programme d'entraînement personnalisé",
        "Suivi nutritionnel de base", 
        "Support par email",
        "Accès app mobile"
      ],
      recommended: false,
      color: "border-gray-600 hover:border-gray-400"
    },
    {
      name: "On My Way Pack", 
      subtitle: "Le plus populaire",
      price: "89€",
      period: "/mois",
      icon: <Star size={32} />,
      image: "/OnMyWayPack.jpeg",
      features: [
        "Tout du Starter Pack",
        "Appels hebdomadaires",
        "Ajustements en temps réel", 
        "Recettes personnalisées",
        "Groupe privé"
      ],
      recommended: true,
      color: "border-gray-600 hover:border-gray-400"
    },
    {
      name: "Get In Shape Pack",
      subtitle: "Performance maximale", 
      price: "149€",
      period: "/mois",
      icon: <Zap size={32} />,
      image: "/GetInShapePack.jpeg",
      features: [
        "Tout de On My Way Pack",
        "Coaching quotidien",
        "Analyses corporelles",
        "Plans de repas complets",
        "Accès prioritaire"
      ],
      recommended: false,
      color: "border-gray-600 hover:border-gray-400"
    },
    {
      name: "One on One",
      subtitle: "Coaching exclusif",
      price: "Sur",
      period: "devis",
      icon: <Crown size={32} />,
      image: "/OneOnOnePack.jpeg",
      features: [
        "Accompagnement 100% personnalisé",
        "Sessions individuelles privées",
        "Programme sur-mesure complet",
        "Suivi quotidien premium",
        "Résultats exceptionnels garantis"
      ],
      recommended: false,
      color: "border-gray-600 hover:border-gray-400"
    }
  ];

  return (
    <section id="services" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Services
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Choisissez la formule qui correspond à vos objectifs et votre rythme de vie
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 border-2 bg-black text-white ${service.color}`}
            >
              {service.recommended && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-serif tracking-widest uppercase font-bold">
                    Recommandé
                  </span>
                </div>
              )}
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Icon on image */}
                <div className="absolute top-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-2 text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm font-serif tracking-widest uppercase text-gray-400">
                    {service.subtitle}
                  </p>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-serif font-bold text-white">
                    {service.price}
                  </span>
                  <span className="text-lg text-gray-400">
                    {service.period}
                  </span>
                </div>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle 
                        size={14} 
                        className="mr-2 mt-1 flex-shrink-0 text-green-400" 
                      />
                      <span className="text-xs font-light text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <button className="w-full py-3 rounded-full font-serif text-sm tracking-widest uppercase transition-all duration-300 border border-white text-white hover:bg-white hover:text-black">
                  {service.name === "One on One" ? "Demander un devis" : "Choisir ce pack"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
