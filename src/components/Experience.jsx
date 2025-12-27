import RevealOnScroll from "../utils/RevealOnScroll";
import { Award, CheckCircle } from 'lucide-react';

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

export default Experience;