import { Helmet } from '@dr.pogodin/react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Subscribe from '@/components/Subscribe';

export default function LuxeIgnitePage() {
  const site = 'https://luxe-ignite-style-agency.godaddysites.com';

  return (
    <>
      <Helmet>
        <title>Luxe Ignite Style — Expert Brand Management Solutions</title>
        <meta
          name="description"
          content="Luxe Ignite Style specialises in empowering content creation brands through innovative brand management strategies. Our dedicated team is committed to elevating your brand's presence."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="Luxe Ignite Style — Expert Brand Management Solutions" />
        <meta property="og:description" content="Empowering content creation brands to grow and succeed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
      </Helmet>

      <main className="min-h-screen bg-[#132d27] overflow-hidden">
        {/* Sections */}
        <Hero />
        <About />
        <Events />
        <FAQ />
        <Contact />
        <Subscribe />
      </main>
    </>
  );
}
