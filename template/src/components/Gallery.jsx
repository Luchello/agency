import { useState } from 'react';
import { siteConfig } from '../config';
import SectionHeader from './ui/SectionHeader';

export default function Gallery() {
  const categories = ['전체', ...new Set(siteConfig.gallery.items.map(item => item.category))];
  const [activeFilter, setActiveFilter] = useState('전체');
  
  const filteredItems = activeFilter === '전체' 
    ? siteConfig.gallery.items 
    : siteConfig.gallery.items.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="section-padding px-4 bg-white">
      <div className="max-w-7xl mx-auto animate-on-scroll">
        <SectionHeader
          label={siteConfig.gallery.label}
          title={siteConfig.gallery.title}
          subtitle={siteConfig.gallery.subtitle}
          align="left"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border"
              style={activeFilter === cat ? {
                backgroundColor: siteConfig.colors.primary,
                color: 'white',
                borderColor: siteConfig.colors.primary,
              } : {
                backgroundColor: 'transparent',
                color: siteConfig.colors.textMuted,
                borderColor: '#e5e7eb',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white/80 mb-2 border border-white/20 backdrop-blur-sm">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
