import { useRef } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion, useInView } from 'motion/react';
import { BookOpen, Wind, Flower2, Heart, Sun } from 'lucide-react';
import { home } from 'virtual:content';

// ─── Floating Leaf Particle ────────────────────────────────────────────────
function Leaf({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: `${x}%`, top: '-40px', fontSize: size }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, Math.sin(delay) * 60, Math.sin(delay + 1) * -40, 0],
        rotate: [0, 180, 360],
        opacity: [0, 0.7, 0.7, 0],
      }}
      transition={{
        duration: 12 + delay * 3,
        delay: delay * 2,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      🍂
    </motion.div>
  );
}

// ─── Branch SVG Decorations ────────────────────────────────────────────────
function BranchLeft({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 300 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M-20 500 Q30 400 20 300 Q10 200 60 120 Q90 60 80 0"
        stroke="#8B5E3C"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      />
      <motion.path
        d="M20 300 Q-10 260 -30 230"
        stroke="#8B5E3C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
      />
      <motion.path
        d="M60 120 Q90 100 110 80"
        stroke="#8B5E3C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 1.5, ease: 'easeOut' }}
      />
      <motion.path
        d="M20 300 Q50 280 70 260"
        stroke="#8B5E3C"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
      />
      {/* Leaves */}
      <motion.ellipse cx="110" cy="80" rx="12" ry="7" fill="#4A7C59" opacity="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2, duration: 0.5 }} transform="rotate(-30 110 80)" />
      <motion.ellipse cx="-30" cy="230" rx="10" ry="6" fill="#4A7C59" opacity="0.4"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5, duration: 0.5 }} transform="rotate(20 -30 230)" />
      <motion.ellipse cx="70" cy="260" rx="9" ry="5" fill="#6B8F5E" opacity="0.4"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.7, duration: 0.5 }} transform="rotate(-15 70 260)" />
    </svg>
  );
}

function BranchRight({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 300 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'scaleX(-1)' }}
    >
      <motion.path
        d="M-20 500 Q30 400 20 300 Q10 200 60 120 Q90 60 80 0"
        stroke="#8B5E3C"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: 'easeOut', delay: 0.3 }}
      />
      <motion.path
        d="M20 300 Q-10 260 -30 230"
        stroke="#8B5E3C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 1.3, ease: 'easeOut' }}
      />
      <motion.path
        d="M60 120 Q90 100 110 80"
        stroke="#8B5E3C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 1.8, ease: 'easeOut' }}
      />
      <motion.ellipse cx="110" cy="80" rx="12" ry="7" fill="#4A7C59" opacity="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.4, duration: 0.5 }} transform="rotate(-30 110 80)" />
      <motion.ellipse cx="-30" cy="230" rx="10" ry="6" fill="#4A7C59" opacity="0.4"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.6, duration: 0.5 }} transform="rotate(20 -30 230)" />
    </svg>
  );
}

// ─── Section Fade-in wrapper ───────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Feature Icon Map ──────────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  BookOpen, Wind, Flower2, Heart, Sun,
};

// ─── Fox Illustration (SVG placeholder) ───────────────────────────────────
function FoxIllustration() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
      className="relative"
    >
      <svg viewBox="0 0 200 220" className="w-full max-w-xs mx-auto drop-shadow-2xl" fill="none">
        {/* Body */}
        <ellipse cx="100" cy="160" rx="55" ry="45" fill="#D4783A" />
        {/* Chest */}
        <ellipse cx="100" cy="165" rx="30" ry="28" fill="#F5C89A" />
        {/* Head */}
        <ellipse cx="100" cy="100" rx="48" ry="44" fill="#D4783A" />
        {/* Ears */}
        <polygon points="60,65 45,20 80,55" fill="#D4783A" />
        <polygon points="140,65 155,20 120,55" fill="#D4783A" />
        {/* Inner ears */}
        <polygon points="62,60 50,28 76,54" fill="#E8A87C" />
        <polygon points="138,60 150,28 124,54" fill="#E8A87C" />
        {/* Face */}
        <ellipse cx="100" cy="108" rx="28" ry="22" fill="#F5C89A" />
        {/* Eyes */}
        <circle cx="86" cy="96" r="7" fill="#2C1810" />
        <circle cx="114" cy="96" r="7" fill="#2C1810" />
        <circle cx="88" cy="94" r="2.5" fill="white" />
        <circle cx="116" cy="94" r="2.5" fill="white" />
        {/* Nose */}
        <ellipse cx="100" cy="110" rx="5" ry="3.5" fill="#2C1810" />
        {/* Smile */}
        <path d="M92 116 Q100 122 108 116" stroke="#2C1810" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Tail */}
        <path d="M155 180 Q200 160 195 200 Q185 230 155 210 Q140 200 155 180Z" fill="#D4783A" />
        <path d="M175 198 Q195 195 190 210 Q180 222 165 212" fill="#F5EFE6" />
        {/* Paws */}
        <ellipse cx="72" cy="198" rx="18" ry="10" fill="#C06A2E" />
        <ellipse cx="128" cy="198" rx="18" ry="10" fill="#C06A2E" />
        {/* Blaze name tag */}
        <rect x="80" y="175" width="40" height="16" rx="8" fill="#E8A87C" />
        <text x="100" y="186" textAnchor="middle" fontSize="8" fill="#2C1810" fontFamily="Nunito, sans-serif" fontWeight="700">Blaze</text>
      </svg>
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-[#E8A87C]/20 blur-3xl -z-10 scale-75" />
    </motion.div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function HomePage() {
  const leaves = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.7,
    x: 5 + i * 12,
    size: 14 + (i % 3) * 4,
  }));

  return (
    <>
      <Helmet>
        <title>MindBloom — Your Cozy Mental Wellness App</title>
        <meta name="description" content="Meet Blaze, your AI fox companion. MindBloom offers guided courses, breathing exercises, yoga, and daily check-ins to help you bloom into a calmer you. Free on Google Play." />
        <link rel="canonical" href="https://mindbloom.app/" />
        <meta property="og:title" content="MindBloom — Your Cozy Mental Wellness App" />
        <meta property="og:description" content="Meet Blaze, your AI fox companion. Guided courses, breathing exercises, yoga, and daily check-ins." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mindbloom.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="overflow-x-hidden bg-[#F5EFE6]">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#2C1810] via-[#3D2314] to-[#1A2E1A] overflow-hidden">
          {/* Background image overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(/airo-assets/images/pages/home/hero-forest)` }}
          />
          {/* Warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/60 via-transparent to-[#2C1810]/80" />

          {/* Branch decorations */}
          <BranchLeft className="left-0 top-0 w-48 md:w-64 h-full opacity-80" />
          <BranchRight className="right-0 top-0 w-48 md:w-64 h-full opacity-80" />

          {/* Floating leaves */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {leaves.map((l) => (
              <Leaf key={l.id} delay={l.delay} x={l.x} size={l.size} />
            ))}
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block bg-[#E8A87C]/20 text-[#E8A87C] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#E8A87C]/30 mb-4">
                  Free on Google Play
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5EFE6] leading-tight">
                  {home.hero.headline}
                </h1>
              </motion.div>
              <motion.p
                className="text-[#F5EFE6]/75 text-lg leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {home.hero.subheadline}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href={home.hero.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#E8A87C] hover:bg-[#D4956A] text-[#2C1810] font-bold px-7 py-4 rounded-full shadow-lg shadow-[#E8A87C]/30 transition-all duration-200"
                  animate={{ boxShadow: ['0 0 20px rgba(232,168,124,0.3)', '0 0 35px rgba(232,168,124,0.6)', '0 0 20px rgba(232,168,124,0.3)'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.19l12.6-12.6-3.18-3.18L3.18 23.76zM20.52 10.3l-2.7-1.56-3.57 3.57 3.57 3.57 2.73-1.59c.78-.45.78-1.54-.03-1.99zM2.01 1.05C1.8 1.26 1.68 1.59 1.68 2.01v19.98c0 .42.12.75.33.96l.06.06 11.19-11.19v-.27L2.07.99l-.06.06zM13.41 8.43l-3.18-3.18L1.68.99c-.3-.18-.66-.24-1.02-.18L13.41 8.43z" />
                  </svg>
                  {home.hero.ctaLabel}
                </motion.a>
              </motion.div>
              {/* Trust indicators */}
              <motion.div
                className="flex items-center gap-4 text-[#F5EFE6]/50 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span>⭐⭐⭐⭐⭐</span>
                <span>Free to download</span>
                <span>•</span>
                <span>No credit card needed</span>
              </motion.div>
            </div>

            {/* Fox illustration */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' as const }}
            >
              <FoxIllustration />
            </motion.div>
          </div>

          {/* Curved bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
              <path d="M0 80 Q360 0 720 40 Q1080 80 1440 20 L1440 80 Z" fill="#F5EFE6" />
            </svg>
          </div>
        </section>

        {/* ── MEET BLAZE ────────────────────────────────────────────────── */}
        <section id="blaze" className="relative py-24 bg-gradient-to-br from-[#3D2314] to-[#5C3520] overflow-hidden">
          {/* Top curve */}
          <div className="absolute top-0 left-0 right-0 -translate-y-px">
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0 0 Q360 60 720 30 Q1080 0 1440 50 L1440 0 Z" fill="#F5EFE6" />
            </svg>
          </div>

          {/* Amber glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E8A87C]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Branch accents */}
          <svg className="absolute left-0 bottom-0 w-32 opacity-20 pointer-events-none" viewBox="0 0 120 200" fill="none">
            <path d="M0 200 Q30 150 20 100 Q10 50 40 0" stroke="#E8A87C" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 100 Q-10 80 -20 60" stroke="#E8A87C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Fox */}
            <FadeIn className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#E8A87C]/15 rounded-full blur-3xl scale-90" />
                <FoxIllustration />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn delay={0.2} className="flex flex-col gap-6">
              <span className="text-[#E8A87C] text-sm font-semibold tracking-wide">
                {home.blaze.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#F5EFE6]">
                {home.blaze.headline}
              </h2>
              <p className="text-[#F5EFE6]/75 text-lg leading-relaxed">
                {home.blaze.description}
              </p>
              <div className="flex flex-col gap-4 mt-2">
                {home.blaze.traits.map((trait, i) => (
                  <FadeIn key={trait.id} delay={0.3 + i * 0.1} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E8A87C]/20 border border-[#E8A87C]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#E8A87C] text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-[#F5EFE6] font-semibold">{trait.label}</p>
                      <p className="text-[#F5EFE6]/60 text-sm">{trait.detail}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Bottom curve */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0 60 Q360 0 720 30 Q1080 60 1440 10 L1440 60 Z" fill="#F5EFE6" />
            </svg>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────────────── */}
        <section id="features" className="relative py-28 bg-[#F5EFE6] overflow-hidden">
          {/* Twig decoration */}
          <svg className="absolute top-8 right-8 w-40 opacity-15 pointer-events-none" viewBox="0 0 160 100" fill="none">
            <path d="M160 0 Q120 30 80 50 Q40 70 0 100" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round" />
            <path d="M80 50 Q85 30 95 15" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M80 50 Q60 45 50 35" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <span className="text-[#8B5E3C] text-sm font-semibold tracking-wide">
                {home.features.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mt-2">
                {home.features.headline}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {home.features.items.map((item, i) => {
                const Icon = iconMap[item.icon] || Heart;
                return (
                  <FadeIn key={item.id} delay={i * 0.1}>
                    <div className="relative bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-3xl p-7 border border-[#DCC9A8]/50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                      {/* Organic blob background */}
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E8A87C]/10 rounded-full blur-xl group-hover:bg-[#E8A87C]/20 transition-all duration-500" />
                      {/* Twig accent */}
                      <svg className="absolute bottom-3 right-3 w-16 opacity-10" viewBox="0 0 60 40" fill="none">
                        <path d="M0 40 Q20 20 40 10 Q50 5 60 0" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M40 10 Q38 0 42 -5" stroke="#8B5E3C" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#E8A87C]/20 flex items-center justify-center mb-5">
                          <Icon className="w-6 h-6 text-[#8B5E3C]" />
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

        {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
        <section id="stories" className="relative py-24 bg-gradient-to-b from-[#EDE0CE] to-[#F5EFE6] overflow-hidden">
          {/* Branch left */}
          <svg className="absolute left-0 top-0 w-32 h-full opacity-10 pointer-events-none" viewBox="0 0 100 600" fill="none" preserveAspectRatio="none">
            <path d="M-10 600 Q20 450 10 300 Q0 150 30 0" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M10 300 Q-15 270 -25 240" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M30 0 Q50 20 60 40" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <span className="text-[#8B5E3C] text-sm font-semibold tracking-wide">
                {home.testimonials.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mt-2">
                {home.testimonials.headline}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {home.testimonials.items.map((item, i) => (
                <FadeIn key={item.id} delay={i * 0.15}>
                  <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-7 border border-[#DCC9A8]/40 shadow-sm">
                    {/* Leaf accent */}
                    <svg className="absolute top-4 right-4 w-8 opacity-30" viewBox="0 0 30 40" fill="none">
                      <path d="M15 0 Q30 15 15 40 Q0 15 15 0Z" fill="#4A7C59" />
                      <path d="M15 0 L15 40" stroke="#2C5E3A" strokeWidth="0.5" />
                    </svg>
                    <div className="text-[#E8A87C] text-3xl mb-4 leading-none">"</div>
                    <p className="text-[#3D2314] text-base leading-relaxed mb-5 italic">
                      {item.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#E8A87C]/30 flex items-center justify-center text-[#8B5E3C] font-bold text-sm">
                        {item.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[#2C1810] font-semibold text-sm">{item.author}</p>
                        <p className="text-[#8B5E3C]/60 text-xs">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
        <section className="relative py-28 bg-gradient-to-br from-[#2C1810] via-[#4A2E1A] to-[#1A2E1A] overflow-hidden">
          {/* Top curve */}
          <div className="absolute top-0 left-0 right-0 -translate-y-px">
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0 0 Q360 60 720 30 Q1080 0 1440 50 L1440 0 Z" fill="#F5EFE6" />
            </svg>
          </div>

          {/* Branch framing */}
          <BranchLeft className="left-0 top-0 w-40 h-full opacity-40" />
          <BranchRight className="right-0 top-0 w-40 h-full opacity-40" />

          {/* Amber glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#E8A87C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text — asymmetric left */}
            <FadeIn className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-[#E8A87C]/70 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                </svg>
                <span>Your journey starts today</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#F5EFE6] leading-tight">
                {home.cta.headline}
              </h2>
              <p className="text-[#F5EFE6]/65 text-lg leading-relaxed max-w-md">
                {home.cta.subheadline}
              </p>
              <motion.a
                href={home.cta.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#E8A87C] hover:bg-[#D4956A] text-[#2C1810] font-bold px-8 py-4 rounded-full shadow-xl shadow-[#E8A87C]/20 transition-all duration-200 self-start"
                animate={{ boxShadow: ['0 0 20px rgba(232,168,124,0.2)', '0 0 40px rgba(232,168,124,0.5)', '0 0 20px rgba(232,168,124,0.2)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.19l12.6-12.6-3.18-3.18L3.18 23.76zM20.52 10.3l-2.7-1.56-3.57 3.57 3.57 3.57 2.73-1.59c.78-.45.78-1.54-.03-1.99zM2.01 1.05C1.8 1.26 1.68 1.59 1.68 2.01v19.98c0 .42.12.75.33.96l.06.06 11.19-11.19v-.27L2.07.99l-.06.06zM13.41 8.43l-3.18-3.18L1.68.99c-.3-.18-.66-.24-1.02-.18L13.41 8.43z" />
                </svg>
                {home.cta.ctaLabel}
              </motion.a>
            </FadeIn>

            {/* Fox — right side, larger */}
            <FadeIn delay={0.3} className="flex justify-center lg:justify-end">
              <div className="relative w-72">
                <div className="absolute inset-0 bg-[#E8A87C]/10 rounded-full blur-3xl" />
                <FoxIllustration />
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </>
  );
}
