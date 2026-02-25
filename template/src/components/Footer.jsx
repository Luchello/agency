import { ArrowUp, Instagram, MessageCircle, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative text-white/70" style={{ backgroundColor: '#111118' }}>
      {/* Top gradient line */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${siteConfig.colors.primary}, ${siteConfig.colors.primary}40, transparent)` }} />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              {siteConfig.business.name}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {siteConfig.business.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {siteConfig.business.instagram && (
                <a href={siteConfig.business.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                  <Instagram size={18} />
                </a>
              )}
              {siteConfig.business.kakao && (
                <a href={siteConfig.business.kakao} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                  <MessageCircle size={18} />
                </a>
              )}
              {siteConfig.business.naver && (
                <a href={siteConfig.business.naver} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                  <Globe size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">바로가기</h4>
            <ul className="space-y-3">
              {siteConfig.nav.items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">연락처</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="flex-shrink-0" style={{ color: siteConfig.colors.primary }} />
                {siteConfig.business.phone}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="flex-shrink-0" style={{ color: siteConfig.colors.primary }} />
                {siteConfig.business.email}
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: siteConfig.colors.primary }} />
                {siteConfig.business.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
          </p>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
            aria-label="맨 위로"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
