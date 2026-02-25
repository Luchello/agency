import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '../config';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={`tel:${siteConfig.business.phone}`}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 rounded-2xl text-white font-semibold text-sm shadow-xl transition-all duration-500 hover:scale-105 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      style={{ 
        backgroundColor: siteConfig.colors.primary,
        boxShadow: `0 8px 25px ${siteConfig.colors.primary}50`,
      }}
      aria-label="전화 문의"
    >
      <Phone size={18} />
      전화 문의
    </a>
  );
}
