import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../constants'
import useReveal from '../hooks/useReveal'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref, isVisible } = useReveal()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 px-6 bg-cream/40">
      <div className="max-w-3xl mx-auto">

        <div
          ref={ref}
          className={`text-center mb-12 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="font-label text-xs tracking-[0.25em] uppercase text-coral mb-3">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            자주 묻는 질문
          </h2>
        </div>

        <div
          className={`rounded-2xl bg-warm-white border border-cream-dark/40 overflow-hidden divide-y divide-cream-dark/30
            ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '150ms' }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
                className="w-full flex items-center justify-between px-6 py-5 text-left
                  hover:bg-cream/30 transition-colors"
              >
                <span className="font-semibold text-charcoal pr-4">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-coral flex-shrink-0 transition-transform duration-300
                    ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`accordion-content ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}
              >
                <p className="px-6 pb-5 text-sm text-charcoal-light leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
