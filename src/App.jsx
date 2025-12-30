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
import Properties from './components/Properties.jsx';
import PropertySlider from './components/PropertySlider.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import Testimonials from './components/Testimonials.jsx';
import SuccessCases from './components/SuccessCases.jsx';
import Areas from './components/Areas.jsx';
import About from './components/About.jsx';
import Destination from './components/Destination.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

/* --- APP PRINCIPAL --- */

function App() {
  const [showFeed, setShowFeed] = useState(false);
  const [contactPrefillMessage, setContactPrefillMessage] = useState("");

  const handleOpenContact = (message = "") => {
    setContactPrefillMessage(message);
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactFromProperty = (property) => {
    if (!property) return;
    const message = `Hola, me interesa la propiedad ${property.titulo} en ${property.ubicacion} (${property.area}, ${property.habitaciones} hab, ${property.banos} banos) con precio ${property.precio}. Podemos agendar una visita?`;
    handleOpenContact(message);
  };

  const handleContactFromSuccessCase = (caseItem) => {
    if (!caseItem) return;
    const message = `Hola, me interesa un resultado similar al caso "${caseItem.titulo}" en ${caseItem.ubicacion}. Busco asesoria para ${caseItem.tipo.toLowerCase()} y quisiera conocer su estrategia.`;
    handleOpenContact(message);
  };

  return (
    <div className="font-sans text-gray-900 bg-white antialiased selection:bg-amber-500/30 selection:text-amber-900">
      <Navbar onOpenFeed={() => setShowFeed(true)} />
      <Hero />
      <div id="asesor">
        <AdvisorSection onOpenFeed={() => setShowFeed(true)} />
      </div>
      <PropertySlider onContactWithProperty={handleContactFromProperty} />
      <Properties onContactWithProperty={handleContactFromProperty} />
      <Services />
      <Experience />
      <Testimonials />
      <SuccessCases
        onContactWithCase={handleContactFromSuccessCase}
        onContactWithProperty={handleContactFromProperty}
      />
      <Areas />
      <About />
      <Destination />
      <Contact prefillMessage={contactPrefillMessage} />
      <Footer />
      <WhatsAppButton />
      <FeedModal isOpen={showFeed} onClose={() => setShowFeed(false)} />
    </div>
  );
}

export default App
