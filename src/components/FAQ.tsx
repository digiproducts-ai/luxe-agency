import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is Luxe Ignite Style?',
    answer: 'Luxe Ignite Style is a brand management agency founded 1.5 years ago with a mission to help businesses and entrepreneurs build powerful, recognisable brands. We offer strategy, content, and growth solutions tailored to your unique vision.',
  },
  {
    question: 'What services do you offer?',
    answer: 'We offer a full suite of brand management services including brand strategy development, content creation, social media management, audience growth, and educational resources such as webinars, workshops, and free courses.',
  },
  {
    question: 'How long has Luxe Ignite Style been operating?',
    answer: 'We have been operating for 1.5 years. In that time we have worked with a growing roster of clients and built a community of brand-focused entrepreneurs across Canada and beyond.',
  },
  {
    question: 'Who is Luxe Ignite Style for?',
    answer: 'We work with entrepreneurs, small business owners, and emerging brands who are ready to invest in their identity and stand out in a competitive market. Whether you are just starting out or looking to elevate an existing brand, we have solutions for you.',
  },
  {
    question: 'How do I get started?',
    answer: 'The easiest way to get started is to reach out through our contact form or give us a call. We will schedule a discovery conversation to understand your goals and recommend the right path forward.',
  },
  {
    question: 'Do you offer free resources?',
    answer: 'Yes! We regularly host free webinars, courses, and giveaway contests to help our community grow. Check the Upcoming Events section on this page to see what is coming up next.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 text-[#1a3c34] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#744BC4] uppercase">
            Questions & Answers
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#9FFFB8] mx-auto rounded" />
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Everything you need to know about Luxe Ignite Style and how we can help your brand grow.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xs transition-shadow duration-300"
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#744BC4] shrink-0" />
                    <span style={{ fontFamily: 'var(--font-heading)' }}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-gray-500 border-t border-gray-50 pt-4 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
