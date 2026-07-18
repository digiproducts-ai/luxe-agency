import { useState, useMemo, useRef } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CalendarDays, Filter } from 'lucide-react';
import { events_calendar } from 'virtual:content';

/* ── static helpers ──────────────────────────────────────────────── */
const MONTHS: string[] = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

/* ── types ───────────────────────────────────────────────────────── */
interface CalEvent {
  id: string;
  date: string;
  title: string;
  type: string;
  brand: string;
  brandKey: string;
  description: string;
  dateObj: Date;
}

/* ── FadeIn ──────────────────────────────────────────────────────── */
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
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── brand config ────────────────────────────────────────────────── */
const BRAND_CONFIG: Record<string, { label: string; dot: string; badge: string; bar: string; link: string }> = {
  luxe: {
    label: 'Luxe Ignite Style',
    dot:   'bg-[#E8A87C]',
    badge: 'bg-[#E8A87C]/15 text-[#8B5E3C] border-[#E8A87C]/35',
    bar:   'bg-[#E8A87C]',
    link:  '/',
  },
  studio: {
    label: 'Cognitive0Creations',
    dot:   'bg-[#7EC89A]',
    badge: 'bg-[#4A7C59]/15 text-[#4A7C59] border-[#4A7C59]/35',
    bar:   'bg-[#7EC89A]',
    link:  '/cognitive0creations',
  },
  mindbloom: {
    label: 'MindBloom',
    dot:   'bg-[#C49A6C]',
    badge: 'bg-[#8B5E3C]/15 text-[#8B5E3C] border-[#8B5E3C]/35',
    bar:   'bg-[#C49A6C]',
    link:  '/mindbloom',
  },
};

type BrandKey = 'all' | 'luxe' | 'studio' | 'mindbloom';

/* ── page ────────────────────────────────────────────────────────── */
export default function EventsCalendarPage() {
  const today = new Date();
  const [viewYear,  setViewYear]  = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [filter,    setFilter]    = useState<BrandKey>('all');
  const [selected,  setSelected]  = useState<string | null>(null);

  /* normalise all events to Date objects */
  const allEvents = useMemo<CalEvent[]>(() =>
    events_calendar.events.map((ev) => ({
      ...ev,
      dateObj: new Date(ev.date + 'T00:00:00'),
    })).sort((a: CalEvent, b: CalEvent) => a.dateObj.getTime() - b.dateObj.getTime()),
  []);

  /* filtered list */
  const filtered = useMemo<CalEvent[]>(() =>
    filter === 'all' ? allEvents : allEvents.filter((ev: CalEvent) => ev.brandKey === filter),
  [allEvents, filter]);

  /* deduplicated upcoming list (by id) */
  const upcoming = useMemo<CalEvent[]>(() => {
    const seen = new Set<string>();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return filtered.filter((ev: CalEvent) => {
      if (seen.has(ev.id)) return false;
      seen.add(ev.id);
      return ev.dateObj >= todayStart;
    });
  }, [filtered, today]);

  /* calendar grid */
  const firstDay  = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMon = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells     = Array.from({ length: firstDay + daysInMon }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );

  /* events on a given day */
  const eventsOnDay = (day: number): CalEvent[] =>
    filtered.filter((ev: CalEvent) =>
      ev.dateObj.getFullYear() === viewYear &&
      ev.dateObj.getMonth()    === viewMonth &&
      ev.dateObj.getDate()     === day
    );

  /* selected day events */
  const selectedEvents = useMemo<CalEvent[]>(() => {
    if (!selected) return [];
    const [y, m, d] = selected.split('-').map(Number);
    return filtered.filter((ev: CalEvent) =>
      ev.dateObj.getFullYear() === y &&
      ev.dateObj.getMonth()    === m - 1 &&
      ev.dateObj.getDate()     === d
    );
  }, [selected, filtered]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelected(null);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelected(null);
  };

  const site = 'https://luxeignitestyle.com';

  return (
    <>
      <Helmet>
        <title>Events Calendar — Luxe Ignite Style</title>
        <meta name="description" content="Every launch, workshop, challenge, and announcement from Luxe Ignite Style, Cognitive0Creations, and MindBloom — all in one place." />
        <link rel="canonical" href={`${site}/events`} />
        <meta property="og:title" content="Events Calendar — Luxe Ignite Style" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/events`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="overflow-x-hidden bg-[#F5EFE6] min-h-screen">

        {/* ── PAGE HEADER ── */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#2C1810] via-[#3D2010] to-[#1A2010] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E8A87C]/6 rounded-full blur-3xl pointer-events-none" />
          <svg className="absolute left-0 top-0 w-36 h-full opacity-15 pointer-events-none" viewBox="0 0 130 600" fill="none" preserveAspectRatio="none">
            <path d="M-10 600 Q30 420 15 280 Q0 140 40 40 Q60 5 48 0" stroke="#E8A87C" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 280 Q-12 255 -24 228" stroke="#E8A87C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <span className="inline-flex items-center gap-2 bg-[#E8A87C]/15 text-[#E8A87C] text-xs font-bold px-4 py-1.5 rounded-full border border-[#E8A87C]/30 tracking-widest uppercase">
                <CalendarDays size={13} />
                <span>{events_calendar.meta.eyebrow}</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#F5EFE6]">
                {events_calendar.meta.headline}
              </h1>
              <p className="text-[#F5EFE6]/55 text-lg max-w-xl leading-relaxed">
                {events_calendar.meta.description}
              </p>
            </motion.div>

            {/* Brand filter pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mt-8"
            >
              {(['all', 'luxe', 'studio', 'mindbloom'] as BrandKey[]).map(key => {
                const isAll = key === 'all';
                const cfg = isAll ? null : BRAND_CONFIG[key];
                const active = filter === key;
                return (
                  <button
                    key={key}
                    onClick={() => { setFilter(key); setSelected(null); }}
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                      active
                        ? 'bg-[#E8A87C] border-[#E8A87C] text-[#2C1810] shadow-md'
                        : 'bg-white/5 border-[#F5EFE6]/15 text-[#F5EFE6]/60 hover:border-[#E8A87C]/40 hover:text-[#E8A87C]'
                    }`}
                  >
                    {!isAll && cfg && <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />}
                    {isAll ? 'All Brands' : cfg?.label}
                  </button>
                );
              })}
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0 60 Q360 0 720 30 Q1080 60 1440 10 L1440 60 Z" fill="#F5EFE6" />
            </svg>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">

            {/* ── CALENDAR GRID ── */}
            <FadeIn>
              <div className="bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-3xl border border-[#DCC9A8]/60 shadow-sm overflow-hidden">
                {/* Month nav */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#DCC9A8]/50 bg-[#2C1810]">
                  <button
                    onClick={prevMonth}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8A87C]/20 flex items-center justify-center text-[#F5EFE6] transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <h2 className="text-[#F5EFE6] font-bold text-lg">
                    {MONTHS[viewMonth]} {viewYear}
                  </h2>
                  <button
                    onClick={nextMonth}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8A87C]/20 flex items-center justify-center text-[#F5EFE6] transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 border-b border-[#DCC9A8]/40">
                  {events_calendar.DAYS.map(d => (
                    <div key={d} className="py-3 text-center text-[#8B5E3C] text-xs font-bold uppercase tracking-wide">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Day cells */}
                <div className="grid grid-cols-7">
                  {cells.map((day, idx) => {
                    if (!day) return (
                      <div key={`empty-${idx}`} className="h-16 border-b border-r border-[#DCC9A8]/25 last:border-r-0" />
                    );
                    const dayEvents = eventsOnDay(day);
                    const isToday = (
                      day === today.getDate() &&
                      viewMonth === today.getMonth() &&
                      viewYear === today.getFullYear()
                    );
                    const selKey = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const isSel = selected === selKey;
                    return (
                      <button
                        key={day}
                        onClick={() => setSelected(isSel ? null : selKey)}
                        className={`relative h-16 border-b border-r border-[#DCC9A8]/25 last:border-r-0 flex flex-col items-center pt-2 gap-1 transition-colors duration-150 ${
                          isSel ? 'bg-[#2C1810]/8' : 'hover:bg-[#E8A87C]/8'
                        }`}
                      >
                        <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                          isToday
                            ? 'bg-[#E8A87C] text-[#2C1810]'
                            : isSel
                            ? 'bg-[#2C1810] text-[#F5EFE6]'
                            : 'text-[#2C1810] hover:text-[#8B5E3C]'
                        }`}>
                          {day}
                        </span>
                        {/* Event dots */}
                        {dayEvents.length > 0 && (
                          <div className="flex gap-0.5 flex-wrap justify-center max-w-[40px]">
                            {dayEvents.slice(0, 3).map((ev: CalEvent, di: number) => {
                              const cfg = BRAND_CONFIG[ev.brandKey] || BRAND_CONFIG.luxe;
                              return <span key={di} className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />;
                            })}
                            {dayEvents.length > 3 && (
                              <span className="text-[8px] text-[#8B5E3C] font-bold">+{dayEvents.length - 3}</span>
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 px-6 py-4 border-t border-[#DCC9A8]/40">
                  {Object.entries(BRAND_CONFIG).map(([key, cfg]) => (
                    <div key={key} className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                      <span className="text-[#5C3D2E]/60 text-xs">{cfg.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected day panel */}
              <AnimatePresence>
                {selected && selectedEvents.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-3xl border border-[#DCC9A8]/60 shadow-sm overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-[#DCC9A8]/40 bg-[#2C1810]/5">
                      <h3 className="text-[#2C1810] font-bold text-base">
                        {(() => {
                          const [y, m, d] = selected.split('-').map(Number);
                          return new Date(y, m - 1, d).toLocaleDateString('default', {
                            weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
                          });
                        })()}
                      </h3>
                    </div>
                    <div className="flex flex-col divide-y divide-[#DCC9A8]/40">
                      {selectedEvents.map((ev: CalEvent) => {
                        const cfg = BRAND_CONFIG[ev.brandKey] || BRAND_CONFIG.luxe;
                        return (
                          <div key={ev.id} className="flex gap-4 px-6 py-4">
                            <div className={`w-1 rounded-full shrink-0 self-stretch ${cfg.bar}`} />
                            <div className="flex flex-col gap-1 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${cfg.badge}`}>
                                  {ev.type}
                                </span>
                                <Link to={cfg.link} className="text-xs text-[#5C3D2E]/50 hover:text-[#8B5E3C] transition-colors">
                                  {cfg.label}
                                </Link>
                              </div>
                              <h4 className="text-[#2C1810] font-bold text-sm leading-snug">{ev.title}</h4>
                              <p className="text-[#5C3D2E]/65 text-xs leading-relaxed">{ev.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>

            {/* ── UPCOMING LIST ── */}
            <FadeIn delay={0.15} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-1">
                <Filter size={14} className="text-[#8B5E3C]" />
                <h2 className="text-[#2C1810] font-bold text-lg">Upcoming Events</h2>
                <span className="ml-auto bg-[#2C1810] text-[#E8A87C] text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {upcoming.length}
                </span>
              </div>

              {upcoming.length === 0 && (
                <div className="bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-2xl border border-[#DCC9A8]/50 p-6 text-center">
                  <p className="text-[#5C3D2E]/50 text-sm">No upcoming events for this filter.</p>
                </div>
              )}

              {upcoming.map((ev: CalEvent, i: number) => {
                const cfg = BRAND_CONFIG[ev.brandKey] || BRAND_CONFIG.luxe;
                const month = ev.dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                const day   = ev.dateObj.getDate();
                const year  = ev.dateObj.getFullYear();
                const dotColor =
                  cfg.dot === 'bg-[#E8A87C]' ? 'text-[#E8A87C]' :
                  cfg.dot === 'bg-[#7EC89A]' ? 'text-[#7EC89A]' :
                  'text-[#C49A6C]';
                return (
                  <motion.div
                    key={ev.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group relative bg-gradient-to-br from-[#FDF6EE] to-[#F0E6D6] rounded-2xl border border-[#DCC9A8]/55 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${cfg.bar} rounded-l-2xl`} />
                    <div className="flex gap-4 p-4 pl-5">
                      {/* Date block */}
                      <div className="flex flex-col items-center justify-center bg-[#2C1810] rounded-xl px-3 py-2.5 min-w-[48px] shrink-0 self-start shadow-sm">
                        <span className={`text-[10px] font-bold tracking-widest ${dotColor}`}>
                          {month}
                        </span>
                        <span className="text-[#F5EFE6] text-xl font-black leading-none">{day}</span>
                        <span className="text-[#F5EFE6]/35 text-[9px]">{year}</span>
                      </div>
                      {/* Content */}
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cfg.badge}`}>
                            {ev.type}
                          </span>
                          <Link to={cfg.link} className="text-[10px] text-[#5C3D2E]/45 hover:text-[#8B5E3C] transition-colors truncate">
                            {cfg.label}
                          </Link>
                        </div>
                        <h4 className="text-[#2C1810] font-bold text-sm leading-snug group-hover:text-[#8B5E3C] transition-colors">
                          {ev.title}
                        </h4>
                        <p className="text-[#5C3D2E]/60 text-xs leading-relaxed line-clamp-2">
                          {ev.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </FadeIn>

          </div>
        </section>

      </main>
    </>
  );
}
