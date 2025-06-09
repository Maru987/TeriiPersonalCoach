import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top White Section with Navigation */}
      <div className="bg-white relative z-50 flex-shrink-0">
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              {/* Left Navigation */}
              <div className="hidden lg:flex space-x-12">
                <button
                  onClick={() => scrollToSection('about')}
                  className="font-serif text-sm tracking-widest text-black hover:opacity-70 transition-opacity"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="font-serif text-sm tracking-widest text-black hover:opacity-70 transition-opacity"
                >
                  SERVICES
                </button>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="font-serif text-sm tracking-widest text-black hover:opacity-70 transition-opacity"
                >
                  BLOG
                </button>
              </div>

              {/* Center Logo */}
              <div className="text-center">
                <button 
                  onClick={() => scrollToSection('header')}
                  className="font-serif font-bold text-black"
                >
                  <div className="text-2xl md:text-3xl tracking-wider">FIRST ONE</div>
                  <div className="text-xs md:text-sm tracking-widest opacity-80">TRAINING</div>
                </button>
              </div>

              {/* Right Navigation */}
              <div className="hidden lg:flex space-x-12">
                <button
                  onClick={() => scrollToSection('coaching')}
                  className="font-serif text-sm tracking-widest text-black hover:opacity-70 transition-opacity"
                >
                  ONLINE COACHING
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="font-serif text-sm tracking-widest text-black hover:opacity-70 transition-opacity"
                >
                  CONTACT
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-black"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-gray-50 rounded-lg mt-4 py-4 shadow-lg">
                {['ABOUT', 'SERVICES', 'BLOG', 'ONLINE COACHING', 'CONTACT'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block w-full text-left px-6 py-3 font-serif text-sm tracking-widest text-black hover:bg-black/5 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Central Image Section */}
      <div 
        id="header"
        className="flex-1 bg-cover bg-top bg-no-repeat relative flex flex-col justify-center items-center min-h-[60vh] max-h-[75vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Header.jpeg')`,
          backgroundPosition: 'center 45%'
        }}
      >
        {/* Content Overlay */}
        <div className="text-center text-white z-10 px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4 leading-tight animate-fade-in">
            Your Personal Coach
          </h1>
          
          <p className="text-lg md:text-xl font-light tracking-wide opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Your first step towards greatness
          </p>
        </div>
      </div>

      {/* Bottom White Section with Scroll Indicator */}
      <div className="bg-white py-6 flex justify-center flex-shrink-0">
        <div className="text-center">
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('services')}>
            <ChevronDown 
              size={28} 
              className="text-black opacity-80 hover:opacity-100 transition-opacity mx-auto mb-2"
            />
            <p className="text-black text-sm font-serif tracking-widest opacity-70">
              SCROLL TO EXPLORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
