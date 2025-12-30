import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Move } from 'lucide-react';
import { PROPIEDADES } from '../data/mock';
import PropertyModal from './PropertyModal';

const PropertySlider = ({ autoPlay = true, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProp, setSelectedProp] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const properties = PROPIEDADES.filter(p => p.estado === 'Disponible');

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % properties.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, properties.length]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, properties.length]);

    const goToSlide = (index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, nextSlide]);

    if (properties.length === 0) return null;

    const currentProperty = properties[currentIndex];

    return (
        <section id="slider" className="py-12 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <h4 className="text-amber-500 font-bold tracking-widest text-xs md:text-sm mb-2 md:mb-4">
                        GALERÍA
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Propiedades Destacadas
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Main Slider */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {properties.map((prop) => (
                                <div
                                    key={prop.id}
                                    className="min-w-full relative cursor-pointer"
                                    onClick={() => setSelectedProp(prop)}
                                >
                                    {/* Image */}
                                    <div className="aspect-[16/9] md:aspect-[21/9] relative">
                                        <img
                                            src={prop.imagen}
                                            alt={prop.titulo}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        
                                        {/* Type Badge */}
                                        <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                            <span className="bg-amber-500 text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 uppercase tracking-wider rounded-full">
                                                {prop.tipo}
                                            </span>
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                                            <div className="max-w-3xl">
                                                <h3 className="text-xl md:text-4xl font-bold mb-2 md:mb-3">
                                                    {prop.titulo}
                                                </h3>
                                                <p className="flex items-center gap-2 text-sm md:text-lg text-white/80 mb-3 md:mb-4">
                                                    <MapPin size={16} className="text-amber-400" />
                                                    {prop.ubicacion}
                                                </p>
                                                <p className="hidden md:block text-white/70 mb-4 max-w-xl">
                                                    {prop.descripcion}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                                                    <span className="flex items-center gap-2 text-sm md:text-base">
                                                        <Bed size={18} className="text-amber-400" />
                                                        {prop.habitaciones} Hab
                                                    </span>
                                                    <span className="flex items-center gap-2 text-sm md:text-base">
                                                        <Bath size={18} className="text-amber-400" />
                                                        {prop.banos} Baños
                                                    </span>
                                                    <span className="flex items-center gap-2 text-sm md:text-base">
                                                        <Move size={18} className="text-amber-400" />
                                                        {prop.area}
                                                    </span>
                                                </div>
                                                <div className="text-2xl md:text-4xl font-bold text-amber-400">
                                                    {prop.precio}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="top-[40%] md:top-[35%] absolute left-2 md:-left-5 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="top-[40%] md:top-[35%] absolute right-2 md:-right-5 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
                        {properties.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-amber-500 w-6 md:w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Ir a propiedad ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Thumbnails (Desktop) */}
                    <div className="hidden lg:flex gap-4 mt-6 justify-center">
                        {properties.map((prop, index) => (
                            <button
                                key={prop.id}
                                onClick={() => goToSlide(index)}
                                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'ring-2 ring-amber-500 ring-offset-2 scale-105'
                                        : 'opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={prop.imagen}
                                    alt={prop.titulo}
                                    className="w-24 h-16 object-cover"
                                />
                                {index === currentIndex && (
                                    <div className="absolute inset-0 bg-amber-500/20" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <PropertyModal property={selectedProp} onClose={() => setSelectedProp(null)} />
        </section>
    );
};

export default PropertySlider;
