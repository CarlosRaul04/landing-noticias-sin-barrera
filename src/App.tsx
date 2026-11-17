import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { SkipLink } from './components/layout/SkipLink';
import { Audience } from './components/sections/Audience';
import { CallToAction } from './components/sections/CallToAction';
import { Features } from './components/sections/Features';
import { HelpCenter } from './components/sections/HelpCenter';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Principles } from './components/sections/Principles';

export function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="contenido">
        <Hero />
        <Audience />
        <Features />
        <HowItWorks />
        <HelpCenter />
        <Principles />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
