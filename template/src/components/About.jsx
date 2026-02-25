import { siteConfig } from '../config';

export default function About() {
  return (
    <section id="about" className="section-padding px-4" style={{ backgroundColor: siteConfig.colors.bgLight }}>
      <div className="max-w-7xl mx-auto animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            {/* Decorative dot pattern behind image */}
            <div className="absolute -top-6 -left-6 w-48 h-48 opacity-[0.07] -z-10"
              style={{
                backgroundImage: `radial-gradient(circle, ${siteConfig.colors.primary} 2px, transparent 2px)`,
                backgroundSize: '20px 20px',
              }} />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteConfig.about.image}
                alt={siteConfig.business.name}
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              {/* Subtle gradient overlay on image bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating accent shape */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10 opacity-20"
              style={{ backgroundColor: siteConfig.colors.primary }} />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[2px]" style={{ backgroundColor: siteConfig.colors.primary }} />
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase"
                style={{
                  backgroundColor: `${siteConfig.colors.primary}12`,
                  color: siteConfig.colors.primary,
                }}
              >
                {siteConfig.about.label}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight" style={{ color: siteConfig.colors.textDark }}>
              {siteConfig.about.title}
            </h2>
            <p className="text-[16px] leading-[1.8] mb-10" style={{ color: siteConfig.colors.textMuted }}>
              {siteConfig.about.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {siteConfig.about.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl border border-gray-100 bg-white"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
                >
                  <div className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: siteConfig.colors.primary }}>
                    {stat.number}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: siteConfig.colors.textMuted }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
