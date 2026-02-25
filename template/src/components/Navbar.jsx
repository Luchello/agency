import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '../config';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = siteConfig.nav.items.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2">
            <span className={`text-lg font-extrabold tracking-tight transition-colors duration-300 ${
              isScrolled ? '' : 'text-white'
            }`} style={isScrolled ? { color: siteConfig.colors.textDark } : { textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              {siteConfig.business.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {siteConfig.nav.items.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                    isScrolled 
                      ? isActive ? '' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={isActive ? { 
                    color: isScrolled ? siteConfig.colors.primary : 'white',
                    backgroundColor: isScrolled ? `${siteConfig.colors.primary}08` : 'rgba(255,255,255,0.1)',
                  } : {}}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{ backgroundColor: isScrolled ? siteConfig.colors.primary : 'white' }} />
                  )}
                </a>
              );
            })}
            
            {/* CTA Button */}
            <a href={`tel:${siteConfig.business.phone}`}
              className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:translate-y-[-1px]"
              style={{ 
                backgroundColor: siteConfig.colors.primary,
                boxShadow: isScrolled ? `0 2px 8px ${siteConfig.colors.primary}30` : 'none',
              }}>
              <Phone size={14} />
              전화 문의
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 space-y-1">
          {siteConfig.nav.items.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-colors"
                style={isActive ? {
                  color: siteConfig.colors.primary,
                  backgroundColor: `${siteConfig.colors.primary}08`,
                } : { color: '#4b5563' }}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a href={`tel:${siteConfig.business.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm"
              style={{ backgroundColor: siteConfig.colors.primary }}>
              <Phone size={16} />
              {siteConfig.business.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
