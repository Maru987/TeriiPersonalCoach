import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={48} />,
      handle: "@fitbyterii",
      url: "https://www.instagram.com/fitbyterii/"
    },
    {
      name: "Gmail",
      icon: <Mail size={48} />,
      handle: "Contact Email",
      url: "mailto:terii@firstonetraining.com"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={48} />,
      handle: "Contact Direct",
      url: "https://wa.me/33123456789"
    }
  ];

  return (
    <section 
      id="social" 
      className="relative py-20 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/followMe.jpeg')`,
        backgroundPosition: 'center 25%'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Follow Me
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Rejoignez ma communauté pour des conseils quotidiens et du contenu exclusif
          </p>
        </div>

        {/* Social Links - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:scale-110"
            >
              {/* Icon */}
              <div className="w-24 h-24 border-2 border-gray-600 rounded-full flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                {social.icon}
              </div>
              
              {/* Social Info */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {social.name}
                </h3>
                <p className="text-sm font-serif tracking-widest text-gray-400 uppercase">
                  {social.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
