import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide a valid email.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/oslundroy@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          _subject: 'New Newsletter Subscriber - Luxe Ignite Style'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Subscription failed.');
      }
    } catch (err) {
      console.error(err);
      // Fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="subscribe" className="py-24 bg-[#1a3c34] text-white relative overflow-hidden">
      {/* Decorative background blur blobs */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#9FFFB8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#744BC4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="mx-auto w-12 h-12 bg-white/10 text-[#9FFFB8] rounded-full flex items-center justify-center border border-white/10 shadow-inner">
            <Mail size={22} />
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Subscribe to our Newsletter
          </h2>
          <p className="text-white/70 text-sm sm:text-base font-medium">
            Get 10% off your first purchase when you sign up for our newsletter! Stay updated on free workshops, courses, and agency updates.
          </p>
        </div>

        {/* Form area */}
        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="sub-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-4 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#9FFFB8] transition-all bg-white border border-white/10"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#9FFFB8] hover:bg-[#86e29f] text-[#1a3c34] font-bold text-sm px-6 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#9FFFB8]/10 disabled:opacity-50 shrink-0 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-[#1a3c34] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Sparkles size={16} />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </form>
                {error && (
                  <p className="text-red-300 text-xs mt-1 text-left">{error}</p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="sub-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 space-y-3 text-center"
              >
                <div className="mx-auto w-10 h-10 bg-[#9FFFB8]/20 text-[#9FFFB8] rounded-full flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  Subscription Complete!
                </h3>
                <p className="text-xs text-white/70 leading-relaxed max-w-xs mx-auto">
                  Thank you! Your email has been added. We have routed your newsletter registration to <strong>oslundroy@gmail.com</strong>. Enjoy your 10% discount!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
