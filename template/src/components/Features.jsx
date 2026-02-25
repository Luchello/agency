import { Users, GraduationCap, Dumbbell, Clock } from 'lucide-react';
import { siteConfig } from '../config';
import SectionHeader from './ui/SectionHeader';

// Icon mapping to avoid importing the entire lucide-react library
const iconMap = {
  Users,
  GraduationCap,
  Dumbbell,
  Clock,
};

const Icon = ({ name, ...props }) => {
  const LucideIcon = iconMap[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

export default function Features() {
  return (
    <section id="features" className="section-padding px-4 bg-white">
      <div className="max-w-7xl mx-auto animate-on-scroll">
        <SectionHeader
          label="Features"
          title="우리의 강점"
          subtitle="전문성과 신뢰를 바탕으로 최고의 서비스를 제공합니다"
          align="left"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                borderLeft: `4px solid ${siteConfig.colors.primary}30`,
                borderTop: '1px solid #f3f4f6',
                borderRight: '1px solid #f3f4f6',
                borderBottom: '1px solid #f3f4f6',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px ${siteConfig.colors.primary}15`;
                e.currentTarget.style.borderLeftColor = siteConfig.colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderLeftColor = `${siteConfig.colors.primary}30`;
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: siteConfig.colors.primary }} />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${siteConfig.colors.primary}10` }}
              >
                <Icon
                  name={feature.icon}
                  size={26}
                  strokeWidth={1.5}
                  style={{ color: siteConfig.colors.primary }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: siteConfig.colors.textDark }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed" style={{ color: siteConfig.colors.textMuted }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
