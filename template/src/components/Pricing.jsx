import { CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig } from '../config';
import SectionHeader from './ui/SectionHeader';

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section-padding px-4 bg-white">
      <div className="max-w-7xl mx-auto animate-on-scroll">
        <SectionHeader
          label={siteConfig.pricing.label}
          title={siteConfig.pricing.title}
          subtitle={siteConfig.pricing.subtitle}
          align="center"
        />

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {siteConfig.pricing.items.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-9 md:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white md:scale-105 md:-my-4'
                  : 'bg-white'
              }`}
              style={plan.highlighted ? {
                boxShadow: `0 25px 50px ${siteConfig.colors.primary}20`,
                border: `2px solid ${siteConfig.colors.primary}`,
              } : {
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                border: '1px solid #f3f4f6',
              }}
              onMouseEnter={(e) => {
                if (plan.highlighted) {
                  e.currentTarget.style.boxShadow = `0 30px 60px ${siteConfig.colors.primary}35, 0 0 30px ${siteConfig.colors.primary}20`;
                }
              }}
              onMouseLeave={(e) => {
                if (plan.highlighted) {
                  e.currentTarget.style.boxShadow = `0 25px 50px ${siteConfig.colors.primary}20`;
                }
              }}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: siteConfig.colors.primary }}>
                  <Sparkles size={12} />
                  가장 인기
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-bold mb-1" style={{ color: siteConfig.colors.textDark }}>
                {plan.name}
              </h3>
              <p className="text-sm mb-6" style={{ color: siteConfig.colors.textMuted }}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-extrabold tracking-tight" style={{ color: siteConfig.colors.textDark }}>
                  {plan.price}
                </span>
                <span className="text-base ml-1" style={{ color: siteConfig.colors.textMuted }}>
                  {plan.unit}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: siteConfig.colors.primary }}
                    />
                    <span className="text-sm" style={{ color: '#4b5563' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:translate-y-[-2px]"
                style={plan.highlighted ? {
                  backgroundColor: siteConfig.colors.primary,
                  color: 'white',
                  boxShadow: `0 4px 15px ${siteConfig.colors.primary}40`,
                } : {
                  backgroundColor: `${siteConfig.colors.primary}08`,
                  color: siteConfig.colors.primary,
                  border: `1.5px solid ${siteConfig.colors.primary}25`,
                }}
              >
                문의하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
