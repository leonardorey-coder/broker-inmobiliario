import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import RevealOnScroll from "../utils/RevealOnScroll";
import PropertyModal from "./PropertyModal";
import { CASOS_EXITO, PROPIEDADES } from "../data/mock";

const SuccessCases = ({ onContactWithCase, onContactWithProperty }) => {
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleOpenProperty = (event, caso) => {
        event.stopPropagation();
        const property = PROPIEDADES.find((prop) => prop.id === caso.propiedadId);
        if (property) {
            setSelectedProperty(property);
        }
    };

    const handleContactClick = (event, caso) => {
        event.stopPropagation();
        onContactWithCase?.(caso);
    };

    return (
        <section id="casos-exito" className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.08),_transparent_55%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-10 md:mb-16">
                        <h4 className="text-amber-500 font-bold tracking-widest text-xs md:text-sm mb-4">CASOS DE EXITO</h4>
                        <h2 className="text-3xl md:text-5xl font-light">Resultados con precision y estrategia</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-lg">
                            Cada operacion se disena para maximizar valor, minimizar tiempos y proteger la inversion.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
                    {CASOS_EXITO.map((caso) => (
                        <RevealOnScroll key={caso.id} delay={caso.id * 120}>
                            <div
                                onClick={() => onContactWithCase?.(caso)}
                                className="group cursor-pointer bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
                            >
                                <div
                                    onClick={(event) => handleOpenProperty(event, caso)}
                                    className="relative aspect-square md:aspect-[4/3] bg-gray-200 overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={caso.imagen}
                                        alt={caso.titulo}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] md:text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                                        {caso.tipo}
                                    </div>
                                    <div className="hidden md:flex absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 justify-between items-center text-white z-10 bg-gradient-to-t from-gray-900/80 to-transparent">
                                        <span className="font-bold tracking-wider">VER DETALLES</span>
                                        <ArrowRight size={24} className="bg-amber-500 p-1 rounded-full" />
                                    </div>
                                </div>

                                <div className="p-3 md:p-5">
                                    <div className="mb-2 md:mb-3">
                                        <h3 className="text-sm md:text-lg font-bold text-white truncate leading-tight">
                                            {caso.titulo}
                                        </h3>
                                        <span className="text-amber-300 font-bold text-[11px] md:text-sm block mt-1 uppercase tracking-wider flex items-center gap-1">
                                            <MapPin size={12} className="text-amber-500 shrink-0" />
                                            {caso.ubicacion}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-[11px] md:text-sm mb-3 md:mb-5 leading-snug line-clamp-2">
                                        {caso.contexto}
                                    </p>

                                    <div className="flex flex-col gap-3 border-t border-white/10 pt-3 sm:flex-row sm:flex-wrap sm:gap-4">
                                        {caso.resultados.map((resultado, idx) => (
                                            <div key={idx} className="w-full sm:flex-1 sm:min-w-[140px] rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                                                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-amber-300 whitespace-nowrap">
                                                    {resultado.etiqueta}
                                                </p>
                                                <p className="text-xs md:text-sm font-semibold text-white">
                                                    {resultado.valor}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={(event) => handleContactClick(event, caso)}
                                        className="mt-4 w-full inline-flex items-center justify-center rounded-full border border-amber-300/70 bg-white/5 py-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.28em] text-amber-200 shadow-[0_10px_30px_rgba(251,191,36,0.08)] transition-all duration-300 hover:border-amber-300 hover:bg-amber-400 hover:text-slate-950 hover:shadow-[0_12px_30px_rgba(251,191,36,0.25)]"
                                    >
                                        Quiero un resultado similar
                                    </button>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

            <PropertyModal
                property={selectedProperty}
                onClose={() => setSelectedProperty(null)}
                onContact={onContactWithProperty}
            />
        </section>
    );
};

export default SuccessCases;
