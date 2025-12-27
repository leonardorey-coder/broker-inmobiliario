import React from 'react';
import RevealOnScroll from '../utils/RevealOnScroll';
import { SERVICIOS } from '../data/mock';

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

export default Services;
