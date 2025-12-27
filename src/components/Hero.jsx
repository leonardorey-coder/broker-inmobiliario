import { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../data/mock';
import { ChevronDown } from 'lucide-react';

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
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Luxury Background ${index + 1}`}
                            className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear ${isMounted && index === currentBgIndex ? 'scale-110' : 'scale-100'
                                }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 md:bg-gradient-to-r"></div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-center justify-center h-full">
                <div className="text-white space-y-6 md:space-y-8 text-center max-w-4xl">
                    <div className={`w-16 h-1 bg-amber-500 mb-4 md:mb-6 mx-auto ${getFadeUpClass('delay-[200ms]')}`}></div>

                    <h1 className={`text-4xl md:text-7xl lg:text-8xl font-light leading-tight ${getFadeUpClass('delay-[400ms]')}`}>
                        Asesoría <br />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
                            Inmobiliaria
                        </span>
                    </h1>

                    <p className={`text-base md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed ${getFadeUpClass('delay-[600ms]')}`}>
                        Encuentra tu espacio ideal en Cancún. Acceso exclusivo al mercado de lujo.
                    </p>

                    <div className={`flex flex-col md:flex-row gap-3 md:gap-5 pt-4 justify-center ${getFadeUpClass('delay-[800ms]')}`}>
                        <a href="#propiedades" className="bg-amber-500 text-white w-full md:w-auto px-8 py-3 md:py-4 font-bold tracking-wider hover:bg-amber-600 transition-all text-center shadow-lg text-sm uppercase rounded-sm">
                            Ver Catálogo
                        </a>
                        <a href="#contacto" className="border-2 border-white text-white w-full md:w-auto px-8 py-3 md:py-4 font-bold tracking-wider hover:bg-white hover:text-gray-900 transition-all text-center text-sm uppercase rounded-sm">
                            Contactar
                        </a>
                    </div>
                </div>
            </div>

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
