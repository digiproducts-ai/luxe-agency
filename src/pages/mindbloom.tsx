import { useRef } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { BookOpen, Wind, Flower2, Heart, Sun, ChevronRight, Facebook, Globe, ExternalLink } from 'lucide-react';
import { mindbloom_showcase } from 'virtual:content';

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen, Wind, Flower2, Heart, Sun,
};

function FoxMini() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
    >
      <svg viewBox="0 0 160 180" className="w-full" fill="none">
        <ellipse cx="80" cy="130" rx="44" ry="36" fill="#D4783A" />
        <ellipse cx="80" cy="134" rx="24" ry="22" fill="#F5C89A" />
        <ellipse cx="80" cy="80" rx="38" ry="35" fill="#D4783A" />
        <polygon points="48,52 36,16 64,44" fill="#D4783A" />
        <polygon points="112,52 124,16 96,44" fill="#D4783A" />
        <polygon points="50,48 40,22 62,43" fill="#E8A87C" />
        <polygon points="110,48 120,22 98,43" fill="#E8A87C" />
        <ellipse cx="80" cy="87" rx="22" ry="17" fill="#F5C89A" />
        <circle cx="68" cy="76" r="5.5" fill="#2C1810" />
        <circle cx="92" cy="76" r="5.5" fill="#2C1810" />
        <circle cx="69.5" cy="74.5" r="2" fill="white" />
        <circle cx="93.5" cy="74.5" r="2" fill="white" />
        <ellipse cx="80" cy="89" rx="4" ry="2.8" fill="#2C1810" />
        <path d="M74 94 Q80 99 86 94" stroke="#2C1810" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M124 145 Q158 130 155 162 Q148 184 124 168 Q112 160 124 145Z" fill="#D4783A" />
        <path d="M140 160 Q155 157 152 168 Q145 178 134 170" fill="#F5EFE6" />
        <ellipse cx="58" cy="160" rx="14" ry="8" fill="#C06A2E" />
        <ellipse cx="102" cy="160" rx="14" ry="8" fill="#C06A2E" />
      </svg>
    </motion.div>
  );
}

export default function MindBloomPage() {
  const site = 'https://mindbloom.club';

  return (
    <>
      <Helmet>
        <title>MindBloom — Everything You Need to Feel Good | Luxe Ignite Style</title>
        <meta
          name="description"
          content="MindBloom is a cozy mental wellness app guided by Blaze, your AI fox companion. Mini courses, breathing exercises, yoga, and daily check-ins. Free on Google Play."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="MindBloom — Everything You Need to Feel Good" />
        <meta property="og:description" content="Meet Blaze, your AI fox companion. Guided courses, breathing, yoga, and daily check-ins." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="overflow-x-hidden bg-[#F5EFE6]">

        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#2C1810] via-[#3D2314] to-[#1A2E1A] overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#E8A87C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#4A7C59]/8 rounded-full blur-3xl pointer-events-none" />

          <svg className="absolute left-0 top-0 w-44 h-full opacity-20 pointer-events-none" viewBox="0 0 160 800" fill="none" preserveAspectRatio="none">
            <path d="M-10 800 Q32 580 16 380 Q0 180 50 60 Q74 10 60 0" stroke="#E8A87C" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 380 Q-14 345 -28 310" stroke="#E8A87C" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M50 60 Q80 44 98 28" stroke="#E8A87C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg className="absolute right-0 top-0 w-44 h-full opacity-20 pointer-events-none" viewBox="0 0 160 800" fill="none" preserveAspectRatio="none" style={{ transform: 'scaleX(-1)' }}>
            <path d="M-10 800 Q32 580 16 380 Q0 180 50 60 Q74 10 60 0" stroke="#E8A87C" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 380 Q-14 345 -28 310" stroke="#E8A87C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none select-none"
              style={{ left: `${8 + i * 15}%`, top: '-30px', fontSize: 13 + (i % 3) * 3 }}
              animate={{ y: ['0vh', '110vh'], rotate: [0, 360], opacity: [0, 0.5, 0.5, 0] }}
              transition={{ duration: 13 + i * 2, delay: i * 2.2, repeat: Infinity, ease: 'linear' }}
            >
              🍂
            </motion.div>
          ))}

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="flex items-center gap-2 text-[#F5EFE6]/30 text-xs mb-4">
                  <Link to="/" className="hover:text-[#E8A87C] transition-colors">Luxe Ignite Style</Link>
                  <ChevronRight size={11} />
                  <Link to="/cognitive0creations" className="hover:text-[#7EC89A] transition-colors">Cognitive0Creations</Link>
                  <ChevronRight size={11} />
                  <span className="text-[#E8A87C]">MindBloom</span>
                </div>
                <span className="inline-block bg-[#E8A87C]/15 text-[#E8A87C] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#E8A87C]/30 mb-4 tracking-widest uppercase">
                  {mindbloom_showcase.hero.eyebrow}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5EFE6] leading-tight">
                  {mindbloom_showcase.hero.headline}
                </h1>
              </motion.div>
              <motion.p
                className="text-[#F5EFE6]/65 text-lg leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              >
                {mindbloom_showcase.hero.subheadline}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href={mindbloom_showcase.hero.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E8A87C] hover:bg-[#D4956A] text-[#2C1810] font-bold px-7 py-3.5 rounded-full shadow-lg transition-all duration-200"
                  animate={{ boxShadow: ['0 0 18px rgba(232,168,124,0.25)', '0 0 32px rgba(232,168,124,0.55)', '0 0 18px rgba(232,168,124,0.25)'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.19l12.6-12.6-3.18-3.18L3.18 23.76zM20.52 10.3l-2.7-1.56-3.57 3.57 3.57 3.57 2.73-1.59c.78-.45.78-1.54-.03-1.99zM2.01 1.05C1.8 1.26 1.68 1.59 1.68 2.01v19.98c0 .42.12.75.33.96l.06.06 11.19-11.19v-.27L2.07.99l-.06.06zM13.41 8.43l-3.18-3.18L1.68.99c-.3-.18-.66-.24-1.02-.18L13.41 8.43z" />
                  </svg>
                  {mindbloom_showcase.hero.ctaLabel}
                </motion.a>
                <a
                  href={mindbloom_showcase.hero.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#E8A87C]/40 text-[#E8A87C] hover:bg-[#E8A87C]/10 font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
                >
                  <Facebook size={15} /> Facebook
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 text-[#F5EFE6]/35 text-xs"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              >
                <span>⭐⭐⭐⭐⭐</span>
                <span>Free to download</span>
                <span>•</span>
                <a href={mindbloom_showcase.hero.websiteHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8A87C] transition-colors flex items-center gap-1">
                  <Globe size={11} /> mindbloom.club
                </a>
              </motion.div>
            </div>

            {/* Fox */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-56 md:w-72">
                <div className="absolute inset-0 bg-[#E8A87C]/15 rounded-full blur-3xl" />
                <FoxMini />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
              <path d="M0 80 Q360 0 720 40 Q1080 80 1440 20 L1440 80 Z" fill="#F5EFE6" />
            </svg>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 bg-[#F5EFE6]">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <span className="text-[#8B5E3C] text-sm font-semibold tracking-wide">{mindbloom_showcase.features.eyebrow}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mt-2">{mindbloom_showcase.features.headline}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mindbloom_showcase.features.items.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || Heart;
                return (
                  <FadeIn key={item.id} delay={i * 0.1}>
                    <div className="relative bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-3xl p-7 border border-[#DCC9A8]/50 shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden">
                      <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#E8A87C]/10 rounded-full blur-xl group-hover:bg-[#E8A87C]/20 transition-all duration-500" />
                      <div className="relative z-10">
                        <div className="w-11 h-11 rounded-2xl bg-[#E8A87C]/20 flex items-center justify-center mb-5">
                          <Icon className="w-5 h-5 text-[#8B5E3C]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#2C1810] mb-2">{item.title}</h3>
                        <p className="text-[#5C3D2E]/70 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── EVENTS ── */}
        <section className="relative py-24 bg-gradient-to-b from-[#EDE0CE] to-[#F5EFE6] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <span className="text-[#8B5E3C] text-sm font-semibold tracking-wide">{mindbloom_showcase.events.eyebrow}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mt-2">{mindbloom_showcase.events.headline}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {mindbloom_showcase.events.items.map((ev, i) => {
                const d = new Date(ev.date);
                const month = d.toLocaleString('default', { month: 'short' }).toUpperCase();
                const day = d.getDate();
                return (
                  <FadeIn key={ev.id} delay={i * 0.1}>
                    <div className="flex gap-5 bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-2xl p-5 border border-[#DCC9A8]/50 shadow-sm h-full">
                      <div className="flex flex-col items-center justify-center bg-[#2C1810] rounded-xl px-4 py-3 min-w-[56px] shrink-0 self-start">
                        <span className="text-[#E8A87C] text-xs font-bold tracking-widest">{month}</span>
                        <span className="text-[#F5EFE6] text-2xl font-bold leading-none">{day}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[#8B5E3C] text-xs font-semibold uppercase tracking-wide">{ev.type}</span>
                        <h4 className="text-[#2C1810] font-bold text-base leading-snug">{ev.title}</h4>
                        <p className="text-[#5C3D2E]/70 text-sm leading-relaxed">{ev.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SOCIAL / LINKS ── */}
        <section className="relative py-24 bg-gradient-to-br from-[#2C1810] to-[#3D2314] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 -translate-y-px">
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0 0 Q360 60 720 30 Q1080 0 1440 50 L1440 0 Z" fill="#F5EFE6" />
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-4">
            <FadeIn className="flex flex-col items-center gap-4">
              <h2 className="text-4xl font-bold text-[#F5EFE6]">Ready to bloom?</h2>
              <p className="text-[#F5EFE6]/55 text-lg max-w-md">Download MindBloom free and take the first step toward a calmer, warmer you.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={mindbloom_showcase.social.playStoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#E8A87C] hover:bg-[#D4956A] text-[#2C1810] font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-200"
                animate={{ boxShadow: ['0 0 18px rgba(232,168,124,0.2)', '0 0 36px rgba(232,168,124,0.5)', '0 0 18px rgba(232,168,124,0.2)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.19l12.6-12.6-3.18-3.18L3.18 23.76zM20.52 10.3l-2.7-1.56-3.57 3.57 3.57 3.57 2.73-1.59c.78-.45.78-1.54-.03-1.99zM2.01 1.05C1.8 1.26 1.68 1.59 1.68 2.01v19.98c0 .42.12.75.33.96l.06.06 11.19-11.19v-.27L2.07.99l-.06.06zM13.41 8.43l-3.18-3.18L1.68.99c-.3-.18-.66-.24-1.02-.18L13.41 8.43z" />
                </svg>
                Get it on Google Play
              </motion.a>
              <a
                href={mindbloom_showcase.social.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E8A87C]/40 text-[#E8A87C] hover:bg-[#E8A87C]/10 font-semibold px-7 py-4 rounded-full transition-all duration-200"
              >
                <Facebook size={16} /> Follow on Facebook
              </a>
              <a
                href={mindbloom_showcase.social.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E8A87C]/20 text-[#F5EFE6]/60 hover:text-[#E8A87C] hover:border-[#E8A87C]/40 font-semibold px-7 py-4 rounded-full transition-all duration-200"
              >
                <Globe size={16} /> mindbloom.club <ExternalLink size={13} />
              </a>
            </FadeIn>
          </div>
        </section>

      </main>
    </>
  );
}
