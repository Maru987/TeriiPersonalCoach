import React from 'react';
import { Award, Target, Users, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      number: "200+",
      label: "Clients Transformés"
    },
    {
      icon: <Trophy size={24} />,
      number: "5+",
      label: "Années d'Expérience"
    },
    {
      icon: <Target size={24} />,
      number: "95%",
      label: "Taux de Réussite"
    },
    {
      icon: <Award size={24} />,
      number: "50+",
      label: "Certifications"
    }
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Video */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/AboutMe.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-black rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-200 rounded-full opacity-50"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
                <h2 className="font-serif text-5xl md:text-6xl font-light text-black tracking-wide animate-fade-in">
                  About Me
                </h2>
                
                {/* Certification Badge */}
                <div className="inline-flex items-center px-4 py-2 border border-black rounded-full bg-white animate-fade-in delay-500 opacity-0 translate-x-4 [animation-fill-mode:forwards]">
                  <div className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse"></div>
                  <span className="font-serif text-sm tracking-widest text-black uppercase">
                    Certifié Personal Coach
                  </span>
                </div>
              </div>
              <div className="w-20 h-0.5 bg-black animate-fade-in delay-300"></div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg font-light">
                Passionné par la transformation physique et mentale, je suis votre partenaire 
                dans cette quête vers l'excellence. Mon approche holistique combine entraînement 
                personnalisé, nutrition adaptée et mindset de champion.
              </p>
              
              <p className="font-light">
                Chaque client est unique, c'est pourquoi je développe des programmes sur-mesure 
                qui respectent votre rythme, vos objectifs et votre mode de vie. Ensemble, 
                nous construisons plus qu'un physique : nous forgeons une mentalité de gagnant.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="flex justify-center text-black">
                    {stat.icon}
                  </div>
                  <div className="font-serif text-2xl font-bold text-black">
                    {stat.number}
                  </div>
                  <div className="font-serif text-xs tracking-widest text-gray-600 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="pt-8 border-t border-gray-200">
              <blockquote className="font-serif text-xl italic text-gray-800 font-light">
                "Le succès n'est pas une destination, c'est un mode de vie."
              </blockquote>
              <cite className="block mt-3 font-serif text-sm tracking-widest text-gray-600 uppercase">
                — Terii, Personal Coach
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
