import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Video, BookOpen, Gift, X, Sparkles } from 'lucide-react';

const events = [
  {
    icon: BookOpen,
    iconBg: 'bg-[#9FFFB8]/10 text-[#1a3c34]',
    tag: 'Free Course',
    title: 'Content Creator Growth Course',
    description: 'A free 4-week course covering content strategy, audience building, and monetization models.',
    date: 'Wednesday, July 15, 2026',
    actionText: 'Register Now',
  },
  {
    icon: Video,
    iconBg: 'bg-[#744BC4]/10 text-[#744BC4]',
    tag: 'Webinar',
    title: 'Brand Strategy Webinar',
    description: 'Learn how to build a powerful, recognisable brand identity from scratch and reach your target audience.',
    date: 'Friday, July 31, 2026',
    actionText: 'Save My Seat',
  },
  {
    icon: Gift,
    iconBg: 'bg-amber-100 text-amber-700',
    tag: 'Contest',
    title: 'Improvement Ebook-Bundle Giveaway Contest',
    description: 'Enter for a chance to win our exclusive Improvement Ebook Bundle! Register with your nickname and email to participate.',
    date: 'Friday, August 28, 2026',
    actionText: 'Enter to Win',
    isContest: true,
  },
];

export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim() && email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        // Clear form after delay
        setNickname('');
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section id="events" className="py-24 bg-gray-50 text-[#1a3c34] relative">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#744BC4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9FFFB8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#744BC4] uppercase">
            Growth & Learning
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Upcoming Events
          </h2>
          <div className="w-16 h-1 bg-[#9FFFB8] mx-auto rounded" />
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Stay informed – join our free webinars, courses, and workshops designed to help your brand grow and succeed.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
              >
                {/* Event Card Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      {event.tag}
                    </span>
                    <div className={`p-3 rounded-xl ${event.iconBg}`}>
                      <IconComponent size={20} />
                    </div>
                  </div>
                  
                  <h3 
                    className="text-xl font-bold tracking-tight group-hover:text-[#744BC4] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Card Footer */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                    <Calendar size={14} className="text-[#744BC4]" />
                    <span>{event.date}</span>
                  </div>

                  {event.isContest ? (
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setModalOpen(true);
                      }}
                      className="w-full bg-[#1a3c34] hover:bg-[#2e594f] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-sm"
                    >
                      {event.actionText}
                    </button>
                  ) : (
                    <button
                      onClick={() => alert(`Registration details for '${event.title}' will be sent to oslundroy@gmail.com. We look forward to seeing you!`)}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-[#1a3c34] font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-200"
                    >
                      {event.actionText}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contest Entry Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-[#1a3c34]/60 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-md rounded-2xl p-6 relative z-10 shadow-2xl border border-gray-100 text-[#1a3c34]"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>

              {!submitted ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-amber-600">
                    <Gift size={24} />
                    <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                      Contest Entry
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Register to enter the <strong>Improvement Ebook-Bundle Giveaway Contest</strong>! Winners will be announced on Friday, August 28, 2026.
                  </p>

                  <form onSubmit={handleContestSubmit} className="space-y-4 pt-2">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase">Nickname</label>
                      <input
                        type="text"
                        required
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Choose a display nickname"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9FFFB8] transition-all bg-gray-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9FFFB8] transition-all bg-gray-50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1a3c34] hover:bg-[#2e594f] text-white font-bold py-3 rounded-xl shadow-md transition-all duration-200 mt-2 flex items-center justify-center gap-2"
                    >
                      <Sparkles size={16} />
                      Submit My Entry
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="mx-auto w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    You're Entered!
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                    Thank you <strong>{nickname}</strong>! Your entry has been received. Good luck! We have sent a copy of your registration to <strong>oslundroy@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="bg-gray-100 hover:bg-gray-25 text-gray-600 font-semibold text-sm px-6 py-2 rounded-xl transition-all duration-200"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
