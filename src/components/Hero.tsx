import { motion } from 'motion/react';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="welcome"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#132d27]"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: "url('/images/hero.jpg')",
          filter: "brightness(0.25) contrast(1.1)"
        }}
      />
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#132d27]/40 to-[#132d27] z-0" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-[#9FFFB8]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#744BC4]/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Welcome Tag */}
          <span className="inline-block text-[#9FFFB8] text-xs font-semibold tracking-[0.2em] uppercase bg-[#9FFFB8]/10 px-4 py-1.5 rounded-full border border-[#9FFFB8]/20 backdrop-blur-sm shadow-sm">
            Welcome to Luxe Ignite Style
          </span>

          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Expert Brand <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9FFFB8] to-[#86e29f]">
              Management Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Empowering content creation brands to grow, stand out, and succeed in competitive digital spaces.
          </p>

          {/* Call to Actions */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={(e) => handleScroll(e, '#contact')}
              className="w-full sm:w-auto bg-[#9FFFB8] hover:bg-[#86e29f] text-[#1a3c34] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#9FFFB8]/10 hover:shadow-[#9FFFB8]/20 hover:-translate-y-0.5"
            >
              Get Started Today
            </button>
            <button
              onClick={(e) => handleScroll(e, '#about')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/25 border border-white/20 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#9FFFB8] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
