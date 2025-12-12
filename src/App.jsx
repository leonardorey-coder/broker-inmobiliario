import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, MapPin, Bed, Bath, Move, Star, Phone, Mail, 
  Instagram, Facebook, Linkedin, ArrowRight, CheckCircle,
  Home, TrendingUp, DollarSign, Award, Map, MessageCircle,
  ChevronDown
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

// Configurar iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

/* --- UTILITIES --- */

const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- DATOS DE EJEMPLO (MOCK DATA) --- */

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
];

const DESTINATION_IMAGES = [
  "https://images.unsplash.com/photo-1544161513-0179fe746fd5?auto=format&fit=crop&q=80&w=2000",
  "https://i.imgur.com/8Y7F5yQ.jpg",
  "https://i.imgur.com/0Q0Q4yQ.jpg",
  "https://i.imgur.com/3Y6Y6yQ.jpg"
];

const PROPIEDADES = [
  {
    id: 1,
    titulo: "Penthouse Vista Mar",
    ubicacion: "Puerto Cancún",
    precio: "$1.2M USD",
    tipo: "venta",
    habitaciones: 3,
    banos: 3.5,
    area: "280 m²",
    estado: "Disponible",
    imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    descripcion: "Espectacular penthouse con acabados de lujo, terraza privada y acceso directo a marina."
  },
  {
    id: 2,
    titulo: "Residencia V. Magna",
    ubicacion: "Zona Hotelera",
    precio: "$850k USD",
    tipo: "venta",
    habitaciones: 4,
    banos: 5,
    area: "450 m²",
    estado: "Disponible",
    imagen: "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?auto=format&fit=crop&q=80&w=1000",
    descripcion: "Casa familiar en condominio exclusivo con seguridad 24/7 y áreas verdes."
  },
  {
    id: 3,
    titulo: "Loft Centro",
    ubicacion: "SM 4, Centro",
    precio: "$25k MXN",
    tipo: "renta",
    habitaciones: 1,
    banos: 1.5,
    area: "90 m²",
    estado: "Rentada",
    imagen: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
    descripcion: "Ideal para ejecutivos. Totalmente amueblado y equipado en el corazón de la ciudad."
  },
  {
    id: 4,
    titulo: "Depto Lagunas",
    ubicacion: "Polígono Sur",
    precio: "$3.5M MXN",
    tipo: "venta",
    habitaciones: 2,
    banos: 2,
    area: "110 m²",
    estado: "Vendido",
    imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
    descripcion: "Oportunidad de inversión. Alta plusvalía y amenidades tipo resort."
  },
  {
    id: 5,
    titulo: "Villa Laguna",
    ubicacion: "Zona Hotelera",
    precio: "$2.1M USD",
    tipo: "venta",
    habitaciones: 5,
    banos: 6,
    area: "600 m²",
    estado: "Disponible",
    imagen: "https://images.unsplash.com/photo-1613490493576-2f045a403442?auto=format&fit=crop&q=80&w=1000",
    descripcion: "Muelle privado, alberca infinita y las mejores vistas del atardecer."
  },
  {
    id: 6,
    titulo: "Estudio Chic",
    ubicacion: "Av. Huayacán",
    precio: "$18k MXN",
    tipo: "renta",
    habitaciones: 1,
    banos: 1,
    area: "60 m²",
    estado: "Disponible",
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
    descripcion: "Estudio chic con amenidades, gimnasio y coworking en la torre."
  }
];

const TESTIMONIOS = [
  {
    nombre: "Carlos Méndez",
    comentario: "Encontró exactamente lo que buscaba en Puerto Cancún en tiempo récord.",
    estrellas: 5,
    rol: "Inversionista"
  },
  {
    nombre: "Sarah Johnson",
    comentario: "Professional and reliable. Helped us navigate the buying process smoothly.",
    estrellas: 5,
    rol: "Compradora"
  },
  {
    nombre: "Familia Torres",
    comentario: "Vendimos nuestra casa al precio justo gracias a su valoración experta.",
    estrellas: 5,
    rol: "Vendedores"
  }
];

const SERVICIOS = [
  { icon: <Home size={24} />, title: "Compra", desc: "Te guío a tu hogar ideal." },
  { icon: <TrendingUp size={24} />, title: "Inversión", desc: "Alto ROI garantizado." },
  { icon: <DollarSign size={24} />, title: "Renta", desc: "Largo plazo y vacacional." },
  { icon: <Award size={24} />, title: "Avalúos", desc: "Valor real de mercado." },
  { icon: <CheckCircle size={24} />, title: "Promoción", desc: "Marketing agresivo." },
];

const ZONAS = [
  "Zona Hotelera", "Puerto Cancún", "Huayacán", "Lagos del Sol", "Zona Sur", "Centro"
];

// Datos de zonas con coordenadas para el mapa
const ZONAS_MAPA = [
  { nombre: "Zona Hotelera", lat: 21.0631, lng: -87.0694, desc: "Zona Hotelera - Lujo y turismo" },
  { nombre: "Puerto Cancún", lat: 21.1289, lng: -87.0831, desc: "Puerto Cancún - Marina privada" },
  { nombre: "Huayacán", lat: 20.9982, lng: -87.2682, desc: "Huayacán - Residencial premium" },
  { nombre: "Lagos del Sol", lat: 21.0453, lng: -87.2734, desc: "Lagos del Sol - Inversión" },
  { nombre: "Zona Sur", lat: 20.8823, lng: -87.0825, desc: "Zona Sur - Privada y segura" },
  { nombre: "Centro", lat: 20.9324, lng: -87.3262, desc: "Centro - Comercial y ejecutivo" }
];

/* --- COMPONENTES --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className={`text-xl md:text-2xl font-bold tracking-widest ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          LUX<span className="text-amber-500">REALTY</span>
        </div>

        <div className={`hidden md:flex space-x-8 font-medium text-sm tracking-wide ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          {['Propiedades', 'Servicios', 'Experiencia', 'Contacto'].map((item) => (
             <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors relative group">
              {item.toUpperCase()}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-amber-500 p-1">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
        {['Propiedades', 'Servicios', 'Experiencia', 'Contacto'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-800 font-bold text-sm tracking-widest hover:text-amber-500 w-full text-center py-2">
            {item.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const transitionBase = "transition-all duration-1000 ease-out";
  const getFadeUpClass = (delay) => `${transitionBase} ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${delay}`;
  const getFadeLeftClass = (delay) => `${transitionBase} ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'} ${delay}`;

  return (
    <section className="relative min-h-[100dvh] md:h-screen flex items-center bg-gray-900 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`Luxury Background ${index + 1}`} 
              className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear ${
                isMounted && index === currentBgIndex ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 md:bg-gradient-to-r"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full md:h-auto content-center">
        <div className="text-white space-y-6 md:space-y-8 text-center md:text-left pt-16 md:pt-0">
          <div className={`w-16 h-1 bg-amber-500 mb-4 md:mb-6 mx-auto md:mx-0 ${getFadeUpClass('delay-[200ms]')}`}></div>

          <h1 className={`text-4xl md:text-7xl font-light leading-tight ${getFadeUpClass('delay-[400ms]')}`}>
            Asesoría <br/>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
              Inmobiliaria
            </span>
          </h1>

          <p className={`text-base md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 font-light leading-relaxed ${getFadeUpClass('delay-[600ms]')}`}>
            Encuentra tu espacio ideal en Cancún. Acceso exclusivo al mercado de lujo.
          </p>
          
          <div className={`flex flex-col md:flex-row gap-3 md:gap-5 pt-4 ${getFadeUpClass('delay-[800ms]')}`}>
            <a href="#propiedades" className="bg-amber-500 text-white w-full md:w-auto px-8 py-3 md:py-4 font-bold tracking-wider hover:bg-amber-600 transition-all text-center shadow-lg text-sm uppercase rounded-sm">
              Ver Catálogo
            </a>
            <a href="#contacto" className="border-2 border-white text-white w-full md:w-auto px-8 py-3 md:py-4 font-bold tracking-wider hover:bg-white hover:text-gray-900 transition-all text-center text-sm uppercase rounded-sm">
              Contactar
            </a>
          </div>
        </div>
        
        <div className={`hidden md:flex justify-end ${getFadeLeftClass('delay-[1000ms]')}`}>
          <div className="relative w-[20rem] h-[30rem] border-[6px] border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 bg-gray-900">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Agente" 
              className="w-full h-full object-cover"
            />
             <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-bold text-2xl mb-1">Tu Nombre</p>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Award size={14} /> Agente Certificado
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white flex flex-col items-center gap-3 cursor-pointer transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-[10px] uppercase tracking-[0.3em] font-light text-white/70 hidden md:block">Descubre Más</span>
        <a href="#propiedades" className="text-white/90 hover:text-amber-500 transition-all duration-500 transform hover:translate-y-2">
          <ChevronDown size={36} strokeWidth={1} />
        </a>
      </div>

    </section>
  );
};

const AdvisorSection = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const scrollableDistance = containerHeight - viewportHeight;
      const scrolled = -rect.top;
      
      if (scrolled >= 0 && scrolled <= scrollableDistance) {
        const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
        setScrollProgress(progress);
      } else if (scrolled < 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardScale = 1.3 - (scrollProgress * 0.5);
  const cardTranslateX = scrollProgress * -25;
  const textOpacity = scrollProgress;
  const textTranslateX = 50 - (scrollProgress * 50);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-gray-900">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950"></div>
        
        <div className="container mx-auto px-4 md:px-6 h-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center h-full gap-6 md:gap-20">
            
            <div 
              className="relative will-change-transform"
              style={{
                transform: `scale(${cardScale}) translateX(${cardTranslateX}%)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className="w-[240px] h-[320px] md:w-[280px] md:h-[400px] border-[4px] md:border-[6px] border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl bg-gray-900 relative transform rotate-2 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Asesor Inmobiliario" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-20 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-bold text-lg md:text-2xl mb-1">Tu Nombre</p>
                  <div className="flex items-center gap-2 text-amber-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                    <Award size={12} /> Agente Certificado
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="text-center md:text-left max-w-md md:max-w-lg will-change-transform"
              style={{
                opacity: textOpacity,
                transform: `translateX(${textTranslateX}px)`,
                transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
              }}
            >
              <h4 className="text-amber-500 font-bold tracking-widest text-xs md:text-sm mb-3 md:mb-4">TU ASESOR</h4>
              <h2 className="text-2xl md:text-5xl font-light text-white mb-4 md:mb-6 leading-tight">
                Tu aliado en <br/>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
                  bienes raíces
                </span>
              </h2>
              <p className="text-gray-300 text-sm md:text-xl font-light leading-relaxed mb-6 md:mb-8 italic">
                "Transformo sueños en direcciones. Cada propiedad cuenta una historia, déjame ayudarte a escribir la tuya."
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 md:px-5 md:py-2 bg-white/5 text-xs md:text-sm rounded-full border border-white/10 flex items-center gap-2 text-gray-300">
                  <CheckCircle size={14} className="text-amber-500" /> +10 años
                </span>
                <span className="px-3 py-1 md:px-5 md:py-2 bg-white/5 text-xs md:text-sm rounded-full border border-white/10 flex items-center gap-2 text-gray-300">
                  <CheckCircle size={14} className="text-amber-500" /> +200 propiedades
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative animate-slide-up flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white z-20 text-gray-900 shadow-md"
        >
          <X size={20} />
        </button>
        
        <div className="h-64 sm:h-80 relative shrink-0">
          <img src={property.imagen} alt={property.titulo} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
            {property.tipo}
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{property.titulo}</h3>
              <p className="text-gray-500 flex items-center gap-2 text-sm"><MapPin size={16} className="text-amber-500" /> {property.ubicacion}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-2xl font-bold text-amber-600 block text-right">{property.precio}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 py-6 border-t border-b border-gray-100 mb-6 bg-gray-50 rounded-lg px-2">
            <div className="text-center">
              <span className="block text-gray-400 text-[10px] uppercase tracking-wider mb-1">Hab</span>
              <span className="text-lg font-bold flex items-center justify-center gap-1 text-gray-800"><Bed size={20} className="text-amber-500" /> {property.habitaciones}</span>
            </div>
            <div className="text-center border-l border-gray-200">
              <span className="block text-gray-400 text-[10px] uppercase tracking-wider mb-1">Baños</span>
              <span className="text-lg font-bold flex items-center justify-center gap-1 text-gray-800"><Bath size={20} className="text-amber-500" /> {property.banos}</span>
            </div>
            <div className="text-center border-l border-gray-200">
              <span className="block text-gray-400 text-[10px] uppercase tracking-wider mb-1">Área</span>
              <span className="text-lg font-bold flex items-center justify-center gap-1 text-gray-800"><Move size={20} className="text-amber-500" /> {property.area}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base font-light">
            {property.descripcion} Oportunidad única en el mercado actual. Diseño arquitectónico que maximiza luz y vistas.
          </p>

          <div className="flex flex-col gap-3">
            <button className="w-full bg-gray-900 text-white py-4 font-bold tracking-widest hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 uppercase text-xs md:text-sm rounded-sm">
              <MessageCircle size={18} /> Info por WhatsApp
            </button>
            <button className="w-full border-2 border-gray-900 text-gray-900 py-4 font-bold tracking-widest hover:bg-gray-900 hover:text-white transition-colors uppercase text-xs md:text-sm rounded-sm">
              Agendar Visita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Properties = () => {
  const [filter, setFilter] = useState('todos');
  const [selectedProp, setSelectedProp] = useState(null);

  const filteredProps = PROPIEDADES.filter(p => filter === 'todos' ? true : p.tipo === filter);

  return (
    <section id="propiedades" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16">
            <div>
              <h4 className="text-amber-500 font-bold tracking-widest text-xs md:text-sm mb-2 md:mb-4">CATÁLOGO</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Destacadas</h2>
            </div>
            
            <div className="flex space-x-2 mt-4 md:mt-0 bg-gray-100 p-1 rounded-lg w-full md:w-auto">
              {['todos', 'venta', 'renta'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`flex-1 md:flex-none px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm font-bold transition-all rounded-md ${
                    filter === type 
                      ? 'bg-white text-gray-900 shadow-md' 
                      : 'text-gray-500 hover:text-gray-900'
                  } capitalize tracking-wide text-center`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
          {filteredProps.map((prop, index) => (
            <RevealOnScroll key={prop.id} delay={index * 50}>
              <div onClick={() => setSelectedProp(prop)} className="group cursor-pointer bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square md:aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img 
                    src={prop.imagen} 
                    alt={prop.titulo} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] md:text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                    {prop.tipo}
                  </div>
                  {prop.estado !== 'Disponible' && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[1px]">
                      <span className="bg-amber-500 text-white px-3 md:px-8 py-1 md:py-3 font-bold uppercase tracking-widest transform -rotate-12 shadow-2xl text-xs md:text-lg border-2 border-white/20">
                        {prop.estado}
                      </span>
                    </div>
                  )}
                  <div className="hidden md:flex absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 justify-between items-center text-white z-10 bg-gradient-to-t from-gray-900/80 to-transparent">
                    <span className="font-bold tracking-wider">VER DETALLES</span>
                    <ArrowRight size={24} className="bg-amber-500 p-1 rounded-full" />
                  </div>
                </div>
                
                <div className="p-3 md:p-5">
                  <div className="mb-2 md:mb-3">
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 truncate leading-tight">{prop.titulo}</h3>
                    <span className="text-amber-600 font-bold text-sm md:text-lg block mt-1">{prop.precio}</span>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-5 flex items-center gap-1 md:gap-2 truncate">
                    <MapPin size={12} className="text-amber-500 shrink-0" /> {prop.ubicacion}
                  </p>
                  
                  <div className="flex justify-between md:justify-start md:gap-6 text-xs text-gray-500 border-t border-gray-100 pt-2 md:pt-4 font-medium">
                    <span className="flex items-center gap-1"><Bed size={14} className="md:w-5 md:h-5" /> {prop.habitaciones} <span className="hidden md:inline">Hab</span></span>
                    <span className="flex items-center gap-1 md:border-l md:border-gray-200 md:pl-6"><Bath size={14} className="md:w-5 md:h-5" /> {prop.banos} <span className="hidden md:inline">Baños</span></span>
                    <span className="flex items-center gap-1 md:border-l md:border-gray-200 md:pl-6"><Move size={14} className="md:w-5 md:h-5" /> {prop.area}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <PropertyModal property={selectedProp} onClose={() => setSelectedProp(null)} />
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicios</h2>
            <p className="text-base md:text-xl text-gray-600 font-light">Soluciones integrales para tu inversión.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8">
          {SERVICIOS.map((service, idx) => (
            <RevealOnScroll key={idx} delay={idx * 50}>
              <div className="bg-white p-4 md:p-10 hover:shadow-2xl transition-all duration-500 rounded-lg group h-full flex flex-col items-center md:items-start text-center md:text-left border border-gray-100">
                <div className="text-amber-500 mb-3 md:mb-6 transition-transform group-hover:scale-110">
                  {React.cloneElement(service.icon, { size: typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 32 })}
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-xs md:text-base text-gray-500 leading-snug">{service.desc}</p>
                <div className="hidden md:block w-12 h-1 bg-amber-100 group-hover:bg-amber-500 mt-6 transition-colors"></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experiencia" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-5 text-amber-500 pointer-events-none">
        <Award size={200} className="md:w-[400px] md:h-[400px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
        <RevealOnScroll>
          <div className="text-center md:text-left">
            <h4 className="text-amber-500 font-bold tracking-widest text-xs md:text-sm mb-4">TRAYECTORIA</h4>
            <h2 className="text-3xl md:text-5xl font-light mb-6 md:mb-10 leading-tight">
              +10 años <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">experiencia</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-lg font-light">
              Conocimiento profundo del mercado de Cancún y Riviera Maya. Identifico oportunidades que otros pasan por alto.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-12 mb-8 md:mb-12 border-t border-gray-800 pt-6 md:pt-10">
              <div>
                <span className="text-3xl md:text-5xl font-bold text-white block mb-2">+150M</span>
                <span className="text-amber-400 font-medium tracking-wider text-[10px] md:text-sm uppercase">Ventas Totales</span>
              </div>
              <div>
                <span className="text-3xl md:text-5xl font-bold text-white block mb-2">98%</span>
                <span className="text-amber-400 font-medium tracking-wider text-[10px] md:text-sm uppercase">Cierres Exitosos</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
              <span className="px-3 py-1 md:px-5 md:py-2 bg-white/5 text-xs md:text-sm rounded-full border border-white/10 flex items-center gap-2 text-gray-300"><CheckCircle size={14} className="text-amber-500" /> AMPI</span>
              <span className="px-3 py-1 md:px-5 md:py-2 bg-white/5 text-xs md:text-sm rounded-full border border-white/10 flex items-center gap-2 text-gray-300"><CheckCircle size={14} className="text-amber-500" /> Luxury</span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
           <div className="relative h-[300px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Sold Property" />
             <div className="absolute inset-0 bg-black/20"></div>
             <div className="absolute bottom-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 uppercase">Propiedad Vendida</div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-10 md:mb-20">
            <h4 className="text-amber-500 font-bold tracking-widest text-xs md:text-sm mb-4">CLIENTES</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Confianza total</h2>
          </div>
        </RevealOnScroll>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide">
          {TESTIMONIOS.map((testimonio, idx) => (
            <div key={idx} className="min-w-[85vw] md:min-w-0 md:w-1/3 snap-center">
              <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="text-amber-400 flex gap-1 mb-4">
                  {[...Array(testimonio.estrellas)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6 text-sm md:text-lg leading-relaxed flex-grow">"{testimonio.comentario}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-100 rounded-full flex items-center justify-center font-bold text-lg text-gray-600">
                    {testimonio.nombre.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm md:text-lg text-gray-900">{testimonio.nombre}</h5>
                    <span className="text-[10px] md:text-xs text-amber-600 font-bold uppercase tracking-widest">{testimonio.rol}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Areas = () => {
  const [selectedZona, setSelectedZona] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Zonas clave</h2>
          <p className="text-base md:text-xl text-gray-600 font-light max-w-3xl mx-auto mb-10 md:mb-16">
            Especialista en las áreas de mayor plusvalía de Cancún.
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
            {ZONAS.map((zona, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedZona(ZONAS_MAPA[idx])}
                className={`px-4 py-2 md:px-8 md:py-3 transition-all shadow-sm rounded-sm text-xs md:text-sm font-bold tracking-wide uppercase ${
                  selectedZona?.nombre === zona
                    ? 'bg-amber-500 text-white border border-amber-500'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-500'
                }`}
              >
                {zona}
              </button>
            ))}
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400}>
          <div className="mt-8 md:mt-12 w-full h-[250px] md:h-[500px] bg-gray-900 rounded-xl overflow-hidden relative group shadow-lg">
            <MapContainer 
              center={[21.0631, -87.0694]} 
              zoom={12} 
              style={{ height: '100%', width: '100%' }}
              className="rounded-xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {ZONAS_MAPA.map((zona, idx) => (
                <Marker 
                  key={idx} 
                  position={[zona.lat, zona.lng]}
                  eventHandlers={{
                    click: () => setSelectedZona(zona),
                  }}
                >
                  <Popup className="rounded-lg">
                    <div className="text-center">
                      <h3 className="font-bold text-gray-900 mb-1">{zona.nombre}</h3>
                      <p className="text-xs text-gray-600">{zona.desc}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            
            {selectedZona && (
              <div className="absolute bottom-4 left-4 right-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg max-w-xs">
                <h4 className="font-bold mb-1">{selectedZona.nombre}</h4>
                <p className="text-sm text-gray-600">{selectedZona.desc}</p>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-12 gap-8 md:gap-16 items-center">
        <div className="md:col-span-6 relative">
          <RevealOnScroll delay={200}>
            <img 
              src="https://images.unsplash.com/photo-1628146933757-b088194db34d?auto=format&fit=crop&q=80&w=1000" 
              alt="Lifestyle" 
              className="w-full h-[300px] md:h-[600px] object-cover rounded-sm shadow-xl"
            />
          </RevealOnScroll>
        </div>
        <div className="md:col-span-6 text-center md:text-left">
           <RevealOnScroll>
             <h4 className="text-amber-500 font-bold tracking-widest text-xs md:text-sm mb-4">FILOSOFÍA</h4>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Construyo patrimonio.</h2>
             <p className="text-base md:text-xl text-gray-600 mb-6 leading-relaxed font-light">
               Honestidad radical: mi prioridad es proteger tu inversión. Si una propiedad no cumple mis estándares, te lo diré.
             </p>
             <div className="border-l-4 md:border-l-8 border-amber-500 pl-4 md:pl-8 py-2 md:py-4 italic text-gray-800 text-lg md:text-2xl font-serif bg-gray-50 rounded-r-lg">
               "El verdadero lujo es la inteligencia de la inversión."
             </div>
           </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

const Destination = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % DESTINATION_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[400px] md:h-[600px] w-full overflow-hidden flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 z-0">
        {DESTINATION_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`Cancun Destination ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-[20s] ease-linear scale-105 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-gray-950/60"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white flex flex-col items-center gap-6">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-7xl font-light leading-tight drop-shadow-lg">
            El Paraíso es <span className="font-bold text-amber-500">Rentable</span>
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={300}>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Plusvalía garantizada en el destino turístico #1 de Latinoamérica.
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={600}>
          <button className="bg-white/95 backdrop-blur-sm text-gray-900 px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-amber-500/50 hover:-translate-y-1 mt-4 border border-white/50">
            Descubre la Zona Hotelera
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-16 md:py-32 bg-gray-950 text-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
          
          <RevealOnScroll>
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 leading-tight">Hablemos de tu <span className="text-amber-500 font-bold">inversión</span>.</h2>
              <p className="text-gray-400 mb-8 font-light text-sm md:text-xl">Perspectiva experta y sin compromisos.</p>
              
              <div className="space-y-6 md:space-y-8 mb-8 md:mb-12 inline-block text-left">
                <a href="mailto:info@luxrealty.mx" className="flex items-center gap-4 md:gap-6 text-base md:text-xl hover:text-amber-500 transition-colors">
                  <Mail size={20} className="text-amber-500" /> <span>info@luxrealty.mx</span>
                </a>
                <a href="tel:+529981234567" className="flex items-center gap-4 md:gap-6 text-base md:text-xl hover:text-amber-500 transition-colors">
                  <Phone size={20} className="text-amber-500" /> <span>+52 998 123 4567</span>
                </a>
                <div className="flex items-center gap-4 md:gap-6 text-base md:text-xl">
                  <MapPin size={20} className="text-amber-500" /> <span>Puerto Cancún, Torre Diomeda</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="bg-white text-gray-900 p-6 md:p-14 rounded-2xl shadow-2xl relative">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Mensaje directo</h3>
              <form className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="md:col-span-2">
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 focus:border-amber-500 focus:outline-none text-sm font-medium" placeholder="NOMBRE" />
                </div>
                <div>
                  <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 focus:border-amber-500 focus:outline-none text-sm font-medium" placeholder="CORREO" />
                </div>
                <div>
                  <input type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 focus:border-amber-500 focus:outline-none text-sm font-medium" placeholder="WHATSAPP" />
                </div>
                <div className="md:col-span-2">
                  <textarea className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 focus:border-amber-500 focus:outline-none h-24 md:h-32 resize-none text-sm font-medium" placeholder="MENSAJE..." ></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button type="button" className="w-full bg-amber-500 text-white py-4 md:py-5 font-bold tracking-[0.2em] hover:bg-amber-600 transition-all uppercase text-xs md:text-sm rounded-sm shadow-lg">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12 border-t border-gray-900 text-center md:text-left">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold tracking-widest text-white mb-2 md:mb-4">
              LUX<span className="text-amber-500">REALTY</span>
            </div>
            <p className="text-gray-500 text-xs md:text-sm">Real Estate Premium Cancún.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-400">
             <a href="#propiedades" className="hover:text-amber-500">Propiedades</a>
             <a href="#servicios" className="hover:text-amber-500">Servicios</a>
             <a href="#contacto" className="hover:text-amber-500">Contacto</a>
          </div>

          <div className="md:text-right text-gray-500 text-xs md:text-sm">
            <p>© 2024 Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/529980000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-110 flex items-center justify-center group"
    >
      <MessageCircle size={28} className="md:w-9 md:h-9" fill="white" />
    </a>
  );
};

/* --- APP PRINCIPAL --- */

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white antialiased selection:bg-amber-500/30 selection:text-amber-900">
      <Navbar />
      <Hero />
      <AdvisorSection />
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
    </div>
  );
}

export default App
