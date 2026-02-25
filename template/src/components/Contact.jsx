import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config';
import SectionHeader from './ui/SectionHeader';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If no formEndpoint, use mailto fallback
    if (!siteConfig.contact.formEndpoint) {
      const form = e.target;
      const name = form.name.value;
      const phone = form.phone.value;
      const email = form.email.value;
      const message = form.message.value;

      const subject = encodeURIComponent(`[문의] ${name}님의 문의`);
      const body = encodeURIComponent(`이름: ${name}\n연락처: ${phone}\n이메일: ${email}\n\n문의 내용:\n${message}`);
      window.location.href = `mailto:${siteConfig.business.email}?subject=${subject}&body=${body}`;
      return;
    }

    // Formspree integration
    setFormState('sending');
    setErrorMessage('');

    try {
      const response = await fetch(siteConfig.contact.formEndpoint, {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
        e.target.reset();
      } else {
        const data = await response.json();
        setFormState('error');
        setErrorMessage(data.error || '문의 전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const contactItems = [
    { icon: Phone, label: '전화', value: siteConfig.business.phone },
    { icon: Mail, label: '이메일', value: siteConfig.business.email },
    { icon: MapPin, label: '주소', value: siteConfig.business.address },
    { icon: Clock, label: '운영시간', value: siteConfig.business.hours },
  ];

  return (
    <section
      id="contact"
      className="section-padding px-4 relative overflow-hidden"
      style={{ backgroundColor: siteConfig.colors.bgDark }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-[0.03]"
          style={{ backgroundColor: siteConfig.colors.primary }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-[0.02]"
          style={{ backgroundColor: siteConfig.colors.primary }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.015]"
          style={{ background: `radial-gradient(circle, ${siteConfig.colors.primary}, transparent)` }} />
      </div>

      <div className="max-w-7xl mx-auto animate-on-scroll relative z-10">
        <SectionHeader
          label={siteConfig.contact.label}
          title={siteConfig.contact.title}
          subtitle={siteConfig.contact.subtitle}
          align="center"
          dark={true}
        />

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
                    >
                      <Icon size={22} style={{ color: siteConfig.colors.primary }} />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-0.5 uppercase tracking-wider text-xs font-medium">{item.label}</div>
                      <div className="text-lg text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust message */}
            <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
              <p className="text-white/70 text-sm leading-relaxed">
                문의 주시면 <span className="text-white font-medium">24시간 이내</span>에 답변 드립니다.
                전화 상담도 편하게 연락 주세요.
              </p>
            </div>

            {/* Urgency banner */}
            <div className="mt-4 p-4 rounded-2xl flex items-center gap-3"
              style={{ backgroundColor: `${siteConfig.colors.accent}15`, border: `1px solid ${siteConfig.colors.accent}30` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${siteConfig.colors.accent}20` }}>
                <span className="text-lg">🎉</span>
              </div>
              <p className="text-sm" style={{ color: siteConfig.colors.accent }}>
                <span className="font-bold">첫 체험 수업 50% 할인</span> — 지금 문의하세요
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-8 rounded-2xl border border-white/10 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-white/50 mb-2 font-medium">이름</label>
                <input
                  type="text"
                  name="name"
                  placeholder="홍길동"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border text-white placeholder-white/30 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    borderColor: 'rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = siteConfig.colors.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${siteConfig.colors.primary}25`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2 font-medium">연락처</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="010-0000-0000"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border text-white placeholder-white/30 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    borderColor: 'rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = siteConfig.colors.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${siteConfig.colors.primary}25`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2 font-medium">이메일</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border text-white placeholder-white/30 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    borderColor: 'rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = siteConfig.colors.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${siteConfig.colors.primary}25`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2 font-medium">문의 내용</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="문의하실 내용을 입력해주세요"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border text-white placeholder-white/30 focus:outline-none resize-none transition-all duration-300 backdrop-blur-sm"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    borderColor: 'rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = siteConfig.colors.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${siteConfig.colors.primary}25`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full py-4 rounded-xl text-white font-semibold btn-primary flex items-center justify-center gap-2 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                {formState === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    전송 중...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    문의 보내기
                  </>
                )}
              </button>

              {/* Success State */}
              {formState === 'success' && (
                <div className="mt-4 p-4 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderColor: 'rgba(16, 185, 129, 0.3)'
                  }}>
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#10b981' }}>
                      문의가 접수되었습니다!
                    </p>
                    <p className="text-xs text-white/70">
                      빠른 시일 내에 연락드리겠습니다.
                    </p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {formState === 'error' && (
                <div className="mt-4 p-4 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderColor: 'rgba(239, 68, 68, 0.3)'
                  }}>
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#ef4444' }}>
                      전송 실패
                    </p>
                    <p className="text-xs text-white/70">
                      {errorMessage || '문제가 발생했습니다. 다시 시도해주세요.'}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
