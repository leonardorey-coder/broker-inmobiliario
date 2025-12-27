import { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../data/mock';
import { ChevronDown, Play } from 'lucide-react';

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

    return (
        <section className="relative min-h-[100dvh] md:h-screen flex items-center bg-gray-900 overflow-hidden">

            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                {HERO_IMAGES.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Luxury Background ${index + 1}`}
                            className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear ${isMounted && index === currentBgIndex ? 'scale-110' : 'scale-100'
                                }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Typography & Buttons */}
                    <div className="lg:col-span-7 space-y-8 text-center lg:text-left pt-20 lg:pt-0">
                        <div className={`inline-block ${getFadeUpClass('delay-[200ms]')}`}>
                            <span className="text-amber-400 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                                / Real Estate Exclusivo /
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
                                Asesoría <br />
                                <span className="font-light italic text-amber-100">Inmobiliaria</span>
                            </h1>
                        </div>

                        <p className={`text-lg md:text-xl text-gray-200 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed ${getFadeUpClass('delay-[400ms]')}`}>
                            Encuentra tu espacio ideal en Cancún. Acceso privilegiado al mercado de lujo con un servicio personalizado.
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${getFadeUpClass('delay-[600ms]')}`}>
                            <a href="#propiedades" className="bg-amber-600 text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1">
                                VER CATÁLOGO
                            </a>
                            <a href="#contacto" className="backdrop-blur-sm bg-white/10 border border-white/30 text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-all">
                                CONTACTAR
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Floating Card (Mobile hidden or stacked) */}
                    <div className={`lg:col-span-5 hidden lg:block ${getFadeUpClass('delay-[800ms]')}`}>
                        <div className="relative bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 shadow-2xl max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">

                            {/* Tags */}
                            <div className="flex gap-3 mb-6">
                                {['Lujo', 'Diseño', 'Confort'].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Card Content */}
                            <h3 className="text-3xl font-serif text-gray-900 mb-2">Diseño y Exclusividad</h3>
                            <p className="text-gray-500 mb-8 font-light">
                                Propiedades seleccionadas bajor los más altos estándares de calidad y ubicación.
                            </p>

                            {/* Room Tour Element */}
                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
                                    alt="Room Tour Preview"
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                        <Play className="text-white fill-white ml-1" size={24} />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-900 shadow-sm">
                                    ROOMTOUR
                                </div>
                            </div>

                            {/* Decorative Dots/Points similar to reference */}
                            <div className="absolute -left-4 top-1/2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white/20 animate-pulse">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Arrow */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white flex flex-col items-center gap-3 cursor-pointer transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[10px] uppercase tracking-[0.3em] font-light text-white/70 hidden md:block">Descubre Más</span>
                <a href="#asesor" className="text-white/90 hover:text-amber-500 transition-all duration-500 transform hover:translate-y-2">
                    <ChevronDown size={36} strokeWidth={1} />
                </a>
            </div>

        </section>
    );
};

export default Hero;
