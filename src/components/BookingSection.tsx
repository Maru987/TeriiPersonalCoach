import React from 'react';
import { Calendar, Mail, MessageCircle } from 'lucide-react';

const BookingSection = () => {
  return (
    <section id="booking" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-black tracking-wide mb-6">
            Book a Session
          </h2>
          <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Prêt à commencer votre transformation ? Planifions ensemble votre première session
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Process */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-light text-black mb-8">
                Comment ça marche ?
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg font-bold text-black">1</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-black mb-2">Consultation Gratuite</h4>
                    <p className="text-gray-600 font-light">
                      Discutons de vos objectifs et besoins spécifiques lors d'un échange personnalisé
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg font-bold text-black">2</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-black mb-2">Plan Personnalisé</h4>
                    <p className="text-gray-600 font-light">
                      Je crée votre programme sur-mesure adapté à votre niveau et objectifs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg font-bold text-black">3</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-black mb-2">Suivi Continu</h4>
                    <p className="text-gray-600 font-light">
                      Accompagnement personnalisé et ajustements réguliers pour vos résultats
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Calendar size={32} className="mx-auto mb-3 text-black" />
                  <p className="font-serif text-sm font-bold text-black">Flexibilité</p>
                  <p className="text-xs text-gray-600 font-light">Horaires adaptés</p>
                </div>
                
                <div className="text-center">
                  <Mail size={32} className="mx-auto mb-3 text-black" />
                  <p className="font-serif text-sm font-bold text-black">Réactivité</p>
                  <p className="text-xs text-gray-600 font-light">Réponse rapide</p>
                </div>
                
                <div className="text-center">
                  <MessageCircle size={32} className="mx-auto mb-3 text-black" />
                  <p className="font-serif text-sm font-bold text-black">Support</p>
                  <p className="text-xs text-gray-600 font-light">Disponible 7j/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-4xl font-light text-black">
                Prêt à transformer votre vie ?
              </h3>
              <p className="text-lg text-gray-600 font-light max-w-md mx-auto">
                Contactez-moi dès maintenant pour planifier votre consultation gratuite
              </p>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto">
              <a 
                href="mailto:terii@firstonetraining.com"
                className="block w-full py-4 px-8 border-2 border-black text-black rounded-full font-serif text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                Envoyer un Email
              </a>
              
              <a 
                href="https://calendly.com/terii-firstonetraining"
                className="block w-full py-4 px-8 border-2 border-black text-black rounded-full font-serif text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver sur Calendly
              </a>
              
              <a 
                href="https://wa.me/33123456789"
                className="block w-full py-4 px-8 border-2 border-black text-black rounded-full font-serif text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <div className="pt-6 border-t border-gray-200 max-w-md mx-auto">
              <p className="text-sm text-gray-500 font-light">
                Première consultation gratuite • Sans engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
