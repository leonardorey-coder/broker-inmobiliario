import { MapPin, Bed, Bath, Move, ArrowRight } from 'lucide-react';
import { useState } from "react";
import { PROPIEDADES } from "../data/mock";
import RevealOnScroll from '../utils/RevealOnScroll';
import PropertyModal from './PropertyModal';

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
                                    className={`flex-1 md:flex-none px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm font-bold transition-all rounded-md ${filter === type
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

export default Properties;