export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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
    <footer className="relative bg-[#132d27] text-white/60 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10 items-start">
          
          {/* Brand/About (5 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <p className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Luxe Ignite Style
              </p>
              <p className="text-[#9FFFB8]/60 text-[10px] tracking-widest uppercase mt-0.5">
                Brand Management Agency
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-sm">
              Empowering content creation brands through innovative brand management strategies. Elevating your brand's presence in the competitive market.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm mb-1 uppercase tracking-wider text-[11px]" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Navigation
            </h4>
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-sm hover:text-white transition-colors">About Us</a>
            <a href="#events" onClick={(e) => handleScroll(e, '#events')} className="text-sm hover:text-white transition-colors">Upcoming Events</a>
            <a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="text-sm hover:text-white transition-colors">FAQs</a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-sm hover:text-white transition-colors">Contact Us</a>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm mb-1 uppercase tracking-wider text-[11px]" style={{ fontFamily: 'var(--font-heading)' }}>
              Get in Touch
            </h4>
            <p className="text-sm leading-relaxed text-white/50">
              406 Fortune Drive <br />
              Kamloops, BC, Canada
            </p>
            <a href="mailto:oslundroy@gmail.com" className="text-sm text-[#9FFFB8] hover:text-[#86e29f] transition-colors mt-1 block">
              oslundroy@gmail.com
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            Copyright © 2026 Luxe Ignite Style - All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xs hover:text-white transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
