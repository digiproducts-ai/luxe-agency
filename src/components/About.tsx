import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-[#1a3c34] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Category tag */}
              <span className="text-xs font-semibold tracking-widest text-[#744BC4] uppercase">
                About Our Agency
              </span>

              {/* H2 Title */}
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Leading Brand <br />
                Management Solutions
              </h2>

              <div className="w-16 h-1 bg-[#9FFFB8] rounded" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-[#1a3c34]/85 text-base sm:text-lg leading-relaxed font-medium"
            >
              <p>
                <strong>Luxe Ignite Style</strong> specialises in empowering content creation brands through innovative brand management strategies. Our dedicated team is committed to elevating your brand's presence in the competitive market, ensuring sustainable growth and recognition.
              </p>
              
              <p className="text-sm sm:text-base text-gray-500 font-normal">
                Founded 1.5 years ago, we have worked with a growing roster of clients and built a community of brand-focused entrepreneurs across Canada and beyond. We offer strategy, content, and growth solutions tailored to your unique vision, helping you stand out in a competitive digital space.
              </p>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 grid grid-cols-2 gap-6"
            >
              <div className="border-l-4 border-[#9FFFB8] pl-4 space-y-1">
                <span className="block text-3xl font-extrabold text-[#1a3c34]">1.5</span>
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Years of Passion</span>
              </div>
              <div className="border-l-4 border-[#744BC4] pl-4 space-y-1">
                <span className="block text-3xl font-extrabold text-[#1a3c34]">100%</span>
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Tailored Solutions</span>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Background design elements */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#744BC4]/10 rounded-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9FFFB8]/10 rounded-full blur-2xl z-0" />
            
            {/* Main Image Frame */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/about.jpg" 
                alt="modern minimalist interior brand agency office" 
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
