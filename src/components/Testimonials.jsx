import { TESTIMONIOS } from "../data/mock";
import RevealOnScroll from "../utils/RevealOnScroll";
import { Star } from "lucide-react";

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

export default Testimonials