import BoromatchBanner from './components/BoromatchBanner';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <BoromatchBanner />
      <Hero />
      <Features />
      <HowItWorks />
      <SEOContent />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
