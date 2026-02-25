import { ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url(${siteConfig.hero.bgImage})`,
          animation: 'kenBurns 20s ease-in-out infinite alternate',
        }}
      />

      {/* Gradient Overlay — multi-layer for depth */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(160deg, 
          ${siteConfig.colors.secondary}e6 0%, 
          rgba(0,0,0,${siteConfig.hero.overlayOpacity}) 40%, 
          ${siteConfig.colors.primary}50 100%)`
      }} />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex items-end pb-20 md:pb-28 min-h-screen">
        <div className="max-w-xl">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10"
          style={{ backgroundColor: `${siteConfig.colors.primary}25` }}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: siteConfig.colors.accent }} />
          <span className="text-sm font-medium tracking-wider text-white/90 uppercase">
            {siteConfig.hero.label}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] text-white tracking-tight"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
          {siteConfig.hero.title.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed font-light"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          {siteConfig.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <button
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
            style={{ 
              backgroundColor: siteConfig.colors.primary,
              boxShadow: `0 8px 30px ${siteConfig.colors.primary}50`,
            }}
          >
            {siteConfig.hero.ctaPrimary}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            {siteConfig.hero.ctaSecondary}
          </button>
        </div>
        </div>
      </div>

      {/* Minimal scroll hint */}
      <div className="absolute bottom-8 right-8 text-white/30 hidden md:block">
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}
