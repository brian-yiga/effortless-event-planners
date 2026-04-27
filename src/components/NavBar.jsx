import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logical helper for text colors
  // Scrolled: Dark text | Top: White text
  const textColorClass = isScrolled ? 'text-brand-black' : 'text-white';
  const navItemClass = `hover:opacity-70 transition-all duration-300 ${textColorClass}`;

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-black/5 py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`font-serif text-2xl tracking-[0.2em] font-bold uppercase ${textColorClass}`}>
          Effortless
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-10 text-[10px] tracking-[0.3em] uppercase font-bold`}>
          <Link to="/" className={navItemClass}>Home</Link>
          <Link to="/services" className={navItemClass}>Services</Link>
          <Link to="/portfolio" className={navItemClass}>Portfolio</Link>
          <Link to="/contact" className={navItemClass}>Contact Us</Link>
          
          <Link to="/contact" className={`
            px-6 py-2 ml-4 transition-all duration-300
            ${isScrolled 
              ? 'bg-brand-black text-white hover:bg-brand-grey' 
              : 'bg-white text-brand-black hover:bg-gray-200'}
          `}>
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${textColorClass}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {/* We keep this white with dark text so it's readable when it slides down */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white text-brand-black border-b border-black/5 flex flex-col p-8 gap-6 text-[12px] tracking-widest uppercase font-bold transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;