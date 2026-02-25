import { siteConfig } from '../../config';

export default function SectionHeader({ label, title, subtitle, align = 'left', dark = false }) {
  const isLeft = align === 'left';
  const textColor = dark ? 'white' : siteConfig.colors.textDark;
  const subtitleColor = dark ? 'rgba(255, 255, 255, 0.6)' : '#6b7280';
  const labelBgColor = dark ? `${siteConfig.colors.primary}30` : `${siteConfig.colors.primary}12`;
  const labelTextColor = dark ? siteConfig.colors.primaryLight : siteConfig.colors.primary;

  return (
    <div className={`mb-20 ${!isLeft ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-4 ${!isLeft ? 'justify-center' : ''}`}>
        {isLeft && (
          <div className="w-5 h-[2px]" style={{ backgroundColor: siteConfig.colors.primary }} />
        )}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase"
          style={{
            backgroundColor: labelBgColor,
            color: labelTextColor,
          }}
        >
          {label}
        </span>
      </div>
      <h2
        className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight"
        style={{ color: textColor }}
      >
        {title}
      </h2>
      {dark && (
        <div className="flex items-center gap-0 mb-3" style={{ justifyContent: !isLeft ? 'center' : 'flex-start' }}>
          <div className="w-16 h-[3px] rounded-full" style={{ backgroundColor: siteConfig.colors.primary }} />
        </div>
      )}
      <p
        className={`text-lg ${!isLeft ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        style={{ color: subtitleColor }}
      >
        {subtitle}
      </p>
    </div>
  );
}
