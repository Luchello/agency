import { Star, Quote, BadgeCheck } from 'lucide-react';
import { siteConfig } from '../config';
import SectionHeader from './ui/SectionHeader';

const avatarColors = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#6366f1'];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding px-4" style={{ backgroundColor: siteConfig.colors.bgLight }}>
      <div className="max-w-7xl mx-auto animate-on-scroll">
        <SectionHeader
          label={siteConfig.testimonials.label}
          title={siteConfig.testimonials.title}
          subtitle={siteConfig.testimonials.subtitle}
          align="center"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.items.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-9 md:p-10 transition-all duration-300"
              style={{ 
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)', 
                borderTop: '1px solid #f3f4f6',
                borderRight: '1px solid #f3f4f6',
                borderBottom: '1px solid #f3f4f6',
                borderLeft: `3px solid ${siteConfig.colors.primary}20`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = siteConfig.colors.primary;
                e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.08)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = `${siteConfig.colors.primary}20`;
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
              }}
            >
              {/* Decorative quote */}
              <Quote 
                size={48} 
                className="absolute top-6 right-6 opacity-[0.06]"
                style={{ color: siteConfig.colors.primary }}
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < review.rating ? 'text-amber-400' : 'text-gray-200'}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#4b5563' }}>
                "{review.content}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                {/* Avatar with initials */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm" style={{ color: siteConfig.colors.textDark }}>
                      {review.name}
                    </span>
                    <BadgeCheck size={14} style={{ color: siteConfig.colors.primary }} />
                  </div>
                  <span className="text-xs" style={{ color: siteConfig.colors.textMuted }}>
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
