import { useRef } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { ChevronRight, Facebook, Globe, ExternalLink } from 'lucide-react';
import { cognitive0creations } from 'virtual:content';

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

const STATUS_STYLES: Record<string, string> = {
  Active: 'bg-[#4A7C59]/20 text-[#7EC89A] border-[#4A7C59]/40',
  'Coming Soon': 'bg-[#E8A87C]/15 text-[#E8A87C] border-[#E8A87C]/30',
};

export default function Cognitive0CreationsPage() {
  const site = 'https://cognitive0creations.com';

  return (
    <>
      <Helmet>
        <title>Cognitive0Creations — Creative Studio | Luxe Ignite Style</title>
        <meta
          name="description"
          content="Cognitive0Creations is the creative studio behind the Luxe Ignite Style portfolio — building EBooks, apps, and digital experiences that move people."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="Cognitive0Creations — Creative Studio" />
        <meta property="og:description" content="Where ideas become products. EBooks, apps, and digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="overflow-x-hidden bg-[#F5EFE6]">

        {/* ── HERO ── */}
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#1A2010] via-[#2C1810] to-[#1A0A05] overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#4A7C59]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#E8A87C]/8 rounded-full blur-3xl pointer-events-none" />

          <svg className="absolute left-0 top-0 w-44 h-full opacity-20 pointer-events-none" viewBox="0 0 160 800" fill="none" preserveAspectRatio="none">
            <path d="M-10 800 Q30 580 15 380 Q0 180 48 60 Q72 10 58 0" stroke="#7EC89A" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 380 Q-14 345 -28 310" stroke="#7EC89A" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M48 60 Q78 44 96 28" stroke="#7EC89A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg className="absolute right-0 top-0 w-44 h-full opacity-20 pointer-events-none" viewBox="0 0 160 800" fill="none" preserveAspectRatio="none" style={{ transform: 'scaleX(-1)' }}>
            <path d="M-10 800 Q30 580 15 380 Q0 180 48 60 Q72 10 58 0" stroke="#7EC89A" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 380 Q-14 345 -28 310" stroke="#7EC89A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none select-none"
              style={{ left: `${12 + i * 17}%`, top: '-30px', fontSize: 13 + (i % 2) * 4 }}
              animate={{ y: ['0vh', '110vh'], rotate: [0, 360], opacity: [0, 0.4, 0.4, 0] }}
              transition={{ duration: 13 + i * 2.5, delay: i * 3, repeat: Infinity, ease: 'linear' }}
            >
              🍃
            </motion.div>
          ))}

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="flex items-center gap-2 text-[#F5EFE6]/30 text-xs mb-4">
                  <Link to="/" className="hover:text-[#E8A87C] transition-colors">Luxe Ignite Style</Link>
                  <ChevronRight size={11} />
                  <span className="text-[#7EC89A]">Cognitive0Creations</span>
                </div>
                <span className="inline-block bg-[#4A7C59]/20 text-[#7EC89A] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#4A7C59]/40 mb-4 tracking-widest uppercase">
                  {cognitive0creations.hero.eyebrow}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5EFE6] leading-tight">
                  {cognitive0creations.hero.headline}
                </h1>
              </motion.div>
              <motion.p
                className="text-[#F5EFE6]/65 text-lg leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              >
                {cognitive0creations.hero.subheadline}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-[#7EC89A] hover:bg-[#5FAF7E] text-[#1A2010] font-bold px-7 py-3.5 rounded-full shadow-lg transition-all duration-200"
                >
                  {cognitive0creations.hero.ctaLabel} <ChevronRight size={15} />
                </a>
                <a
                  href={cognitive0creations.about.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#7EC89A]/40 text-[#7EC89A] hover:bg-[#7EC89A]/10 font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
                >
                  <Facebook size={15} /> Facebook
                </a>
              </motion.div>
            </div>

            {/* Studio identity card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative bg-[#4A7C59]/10 border border-[#4A7C59]/30 rounded-3xl p-8 max-w-sm w-full">
                <div className="flex flex-col gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#4A7C59]/20 border border-[#4A7C59]/40 flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <p className="text-[#7EC89A] text-xs font-bold uppercase tracking-widest mb-1">Tier 2 — Studio Brand</p>
                    <h2 className="text-[#F5EFE6] text-2xl font-bold">Cognitive0Creations</h2>
                    <p className="text-[#F5EFE6]/40 text-sm mt-1">Part of Luxe Ignite Style</p>
                  </div>
                  <div className="flex flex-col gap-2 pt-3 border-t border-[#4A7C59]/20">
                    <a
                      href={cognitive0creations.about.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#F5EFE6]/50 hover:text-[#7EC89A] text-sm transition-colors"
                    >
                      <Globe size={13} />
                      <span>cognitive0creations.com</span>
                      <ExternalLink size={11} className="ml-auto" />
                    </a>
                    <a
                      href={cognitive0creations.about.facebookHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#F5EFE6]/50 hover:text-[#7EC89A] text-sm transition-colors"
                    >
                      <Facebook size={13} />
                      <span>Facebook Page</span>
                      <ExternalLink size={11} className="ml-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
              <path d="M0 80 Q360 0 720 40 Q1080 80 1440 20 L1440 80 Z" fill="#F5EFE6" />
            </svg>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="py-24 bg-[#F5EFE6]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-[#4A7C59] text-sm font-semibold tracking-wide">{cognitive0creations.about.eyebrow}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mt-2 mb-5">{cognitive0creations.about.headline}</h2>
              <p className="text-[#5C3D2E]/80 text-lg leading-relaxed mb-6">{cognitive0creations.about.body}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={cognitive0creations.about.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2C1810] text-[#F5EFE6] hover:bg-[#3D2314] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                >
                  <Globe size={14} /> Visit Website
                </a>
                <a
                  href={cognitive0creations.about.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#8B5E3C]/30 text-[#8B5E3C] hover:bg-[#8B5E3C]/10 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                >
                  <Facebook size={14} /> Follow on Facebook
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-[#1A2010] to-[#2C1810] rounded-3xl p-8 relative overflow-hidden">
                <svg className="absolute top-0 right-0 w-28 opacity-15 pointer-events-none" viewBox="0 0 110 110" fill="none">
                  <path d="M110 0 Q75 38 55 65 Q35 92 0 110" stroke="#7EC89A" strokeWidth="2" strokeLinecap="round" />
                  <path d="M55 65 Q60 46 70 32" stroke="#7EC89A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p className="text-[#7EC89A] text-xs font-bold uppercase tracking-widest mb-4">Our mission</p>
                <p className="text-[#F5EFE6]/80 text-xl leading-relaxed italic">
                  "We build digital products that don't just function — they feel like something. Every EBook, every app, every line of code carries intention."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4A7C59]/30 flex items-center justify-center text-sm">🧠</div>
                  <span className="text-[#F5EFE6]/40 text-sm">Cognitive0Creations Studio</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section id="products" className="relative py-24 bg-gradient-to-b from-[#EDE0CE] to-[#F5EFE6] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <span className="text-[#4A7C59] text-sm font-semibold tracking-wide">{cognitive0creations.products.eyebrow}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mt-2">{cognitive0creations.products.headline}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cognitive0creations.products.items.map((product, i) => (
                <FadeIn key={product.id} delay={i * 0.12}>
                  <div className="relative bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-3xl p-7 border border-[#DCC9A8]/50 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[#8B5E3C] text-xs font-semibold uppercase tracking-wide">{product.type}</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_STYLES[product.status] || STATUS_STYLES['Coming Soon']}`}>
                        {product.status}
                      </span>
                    </div>
                    <h3 className="text-[#2C1810] text-xl font-bold">{product.name}</h3>
                    <p className="text-[#5C3D2E]/70 text-sm leading-relaxed flex-1">{product.description}</p>
                    {product.status === 'Active' && (
                      <Link
                        to={product.href as string}
                        className="inline-flex items-center gap-1.5 text-[#8B5E3C] hover:text-[#E8A87C] text-sm font-semibold transition-colors mt-auto"
                      >
                        Learn more <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── EVENTS ── */}
        <section className="py-24 bg-[#F5EFE6]">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <span className="text-[#8B5E3C] text-sm font-semibold tracking-wide">{cognitive0creations.events.eyebrow}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mt-2">{cognitive0creations.events.headline}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {cognitive0creations.events.items.map((ev, i) => {
                const d = new Date(ev.date);
                const month = d.toLocaleString('default', { month: 'short' }).toUpperCase();
                const day = d.getDate();
                return (
                  <FadeIn key={ev.id} delay={i * 0.1}>
                    <div className="flex gap-5 bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-2xl p-5 border border-[#DCC9A8]/50 shadow-sm">
                      <div className="flex flex-col items-center justify-center bg-[#1A2010] rounded-xl px-4 py-3 min-w-[56px] shrink-0 self-start">
                        <span className="text-[#7EC89A] text-xs font-bold tracking-widest">{month}</span>
                        <span className="text-[#F5EFE6] text-2xl font-bold leading-none">{day}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[#4A7C59] text-xs font-semibold uppercase tracking-wide">{ev.type}</span>
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

        {/* ── CTA ── */}
        <section className="relative py-20 bg-gradient-to-br from-[#1A2010] to-[#2C1810] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 -translate-y-px">
            <svg viewBox="0 0 1440 50" className="w-full" preserveAspectRatio="none">
              <path d="M0 0 Q360 50 720 25 Q1080 0 1440 40 L1440 0 Z" fill="#F5EFE6" />
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6 pt-8">
            <h2 className="text-4xl font-bold text-[#F5EFE6]">Ready to see what we've built?</h2>
            <p className="text-[#F5EFE6]/55 text-lg">Start with our flagship — MindBloom, the cozy wellness app guided by Blaze.</p>
            <Link
              to="/mindbloom"
              className="inline-flex items-center gap-2 bg-[#E8A87C] hover:bg-[#D4956A] text-[#2C1810] font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200"
            >
              Explore MindBloom <ChevronRight size={16} />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
