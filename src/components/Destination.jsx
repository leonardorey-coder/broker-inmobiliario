
import RevealOnScroll from "../utils/RevealOnScroll";
import { useState, useEffect } from "react";
import { DESTINATION_IMAGES } from "../data/mock";

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
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'
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

export default Destination;
