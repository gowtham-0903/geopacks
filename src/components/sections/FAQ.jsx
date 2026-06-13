import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../../config/faq';
import SectionTitle from '../ui/SectionTitle';
import { Reveal } from '../ui/Motion';

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-shell bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle alignment="center" subtitle="FAQ" title="Answers for buyers & brands" />
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-steel-100 rounded-2xl border border-steel-100 bg-white shadow-card">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 0.04} y={16}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-ink-900 md:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-accent bg-accent text-white'
                        : 'border-steel-200 text-ink-700'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-ink-800/70">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
