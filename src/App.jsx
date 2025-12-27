import { useState } from 'react';
import './App.css';

// Configurar iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

/* --- COMPONENTES --- */
import FeedModal from './components/FeedModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdvisorSection from './components/AdvisorSection.jsx';
import PropertyModal from './components/PropertyModal';
import Properties from './components/Properties.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import Testimonials from './components/Testimonials.jsx';
import Areas from './components/Areas.jsx';
import About from './components/About.jsx';
import Destination from './components/Destination.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

/* --- APP PRINCIPAL --- */

function App() {
  const [showFeed, setShowFeed] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white antialiased selection:bg-amber-500/30 selection:text-amber-900">
      <Navbar onOpenFeed={() => setShowFeed(true)} />
      <Hero />
      <div id="asesor">
        <AdvisorSection onOpenFeed={() => setShowFeed(true)} />
      </div>
      <Properties />
      <Services />
      <Experience />
      <Testimonials />
      <Areas />
      <About />
      <Destination />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <FeedModal isOpen={showFeed} onClose={() => setShowFeed(false)} />
    </div>
  );
}

export default App
