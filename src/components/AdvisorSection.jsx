import {
    Menu, X, MapPin, Bed, Bath, Move, Star, Phone, Mail,
    Instagram, Facebook, Linkedin, ArrowRight, CheckCircle,
    Home, TrendingUp, DollarSign, Award, Map, MessageCircle,
    ChevronDown, Heart, Bookmark
} from 'lucide-react';

import { useRef, useState, useEffect } from "react";

const AdvisorSection = ({ onOpenFeed }) => {
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
                const progress = Math.min(1, Math.max(0, scrolled /
                    scrollableDistance)); setScrollProgress(progress);
            } else if (scrolled < 0) { setScrollProgress(0); } else {
                setScrollProgress(1);
            }
        }; window.addEventListener('scroll', handleScroll); handleScroll(); return () =>
            window.removeEventListener('scroll', handleScroll);
    }, []);

    const phase1 = Math.min(1, scrollProgress * 3);
    const phase2 = Math.max(0, Math.min(1, (scrollProgress - 0.1) * 3));
    const phase3 = Math.max(0, Math.min(1, (scrollProgress - 0.2) * 3));
    const phase4 = Math.max(0, Math.min(1, (scrollProgress - 0.4) * 2));

    const cardTranslateY = 100 - (phase1 * 100);
    const cardOpacity = phase1;

    const cardFlipRotation = phase4 * 180;

    const titleOpacity = phase2;
    const titleTranslateY = 50 - (phase2 * 50);

    const contentOpacity = phase3;
    const contentTranslateX = 30 - (phase3 * 30);

    return (
        <div ref={containerRef} className="relative h-[550vh] sm:h-[550vh] md:h-[600vh] lg:h-[700vh] bg-black">
            <div className="sticky top-0 min-h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>
                    <div
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/8 via-transparent to-transparent">
                    </div>
                    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900/60 to-transparent">
                    </div>
                    <div
                        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent">
                    </div>
                    <div
                        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent">
                    </div>
                    <div
                        className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-amber-500/15 to-transparent hidden lg:block">
                    </div>
                    <div
                        className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-amber-500/15 to-transparent hidden lg:block">
                    </div>
                </div>

                <div
                    className="container mx-auto px-5 sm:px-6 lg:px-8 h-full relative z-10 flex items-start lg:items-center pt-24 sm:pt-28 lg:pt-20">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-12 items-start lg:items-center w-full gap-8 sm:gap-10 lg:gap-12 pb-8 lg:pb-16">

                        <div className="lg:col-span-5 relative will-change-transform flex flex-col items-center justify-center order-1 mt-4 lg:mt-0"
                            style={{ transform: `translateY(${cardTranslateY}px)`, opacity: cardOpacity, }}>
                            <div className="relative w-[180px] h-[250px] sm:w-[220px] sm:h-[310px] md:w-[260px] md:h-[360px] lg:w-[280px] lg:h-[380px] xl:w-[320px] xl:h-[420px]"
                                style={{ perspective: '1200px' }}>
                                <div className="relative w-full h-full transition-transform duration-700 ease-out" style={{
                                    transformStyle: 'preserve-3d', transform: `rotateY(${cardFlipRotation}deg)`,
                                }}>
                                    <div className="absolute inset-0 rounded-lg overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] border border-white/10"
                                        style={{ backfaceVisibility: 'hidden' }}>
                                        <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=800"
                                            alt="Asesora Inmobiliaria" className="w-full h-full object-cover" />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent">
                                        </div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent">
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                                            <div
                                                className="w-12 h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 mb-4 sm:mb-5">
                                            </div>
                                            <p
                                                className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
                                                Tu Nombre</p>
                                            <p
                                                className="text-amber-400/90 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] mt-2">
                                                Luxury Real Estate</p>
                                        </div>

                                        <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                                            <div
                                                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/30 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center">
                                                <Award size={18} className="sm:w-5 sm:h-5 text-amber-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 rounded-lg overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-white/10 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between"
                                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', }}>
                                        <div>
                                            <div
                                                className="w-12 h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 mb-5 sm:mb-6">
                                            </div>
                                            <h3
                                                className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide mb-2 sm:mb-3">
                                                Credenciales</h3>
                                            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                                                Especialista certificado en el mercado de lujo de Cancún y Riviera Maya.
                                            </p>
                                        </div>

                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex items-center gap-4 py-3 border-b border-white/5">
                                                <div
                                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/5 flex items-center justify-center shrink-0 border border-amber-500/20">
                                                    <TrendingUp size={16}
                                                        className="sm:w-[18px] sm:h-[18px] text-amber-400" />
                                                </div>
                                                <div>
                                                    <span
                                                        className="text-white font-semibold text-base sm:text-lg md:text-xl block">+$150M</span>
                                                    <span
                                                        className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest">En
                                                        ventas totales</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 py-3 border-b border-white/5">
                                                <div
                                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/5 flex items-center justify-center shrink-0 border border-amber-500/20">
                                                    <Home size={16} className="sm:w-[18px] sm:h-[18px] text-amber-400" />
                                                </div>
                                                <div>
                                                    <span
                                                        className="text-white font-semibold text-base sm:text-lg md:text-xl block">+200</span>
                                                    <span
                                                        className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest">Propiedades
                                                        vendidas</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 py-3">
                                                <div
                                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/5 flex items-center justify-center shrink-0 border border-amber-500/20">
                                                    <Star size={16} className="sm:w-[18px] sm:h-[18px] text-amber-400" />
                                                </div>
                                                <div>
                                                    <span
                                                        className="text-white font-semibold text-base sm:text-lg md:text-xl block">98%</span>
                                                    <span
                                                        className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest">Satisfacción
                                                        cliente</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            <span
                                                className="px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-transparent text-[10px] sm:text-xs rounded text-amber-400 border border-amber-500/25 font-medium tracking-wider">AMPI</span>
                                            <span
                                                className="px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-transparent text-[10px] sm:text-xs rounded text-amber-400 border border-amber-500/25 font-medium tracking-wider">Luxury</span>
                                            <span
                                                className="px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-transparent text-[10px] sm:text-xs rounded text-amber-400 border border-amber-500/25 font-medium tracking-wider">Premium</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button onClick={onOpenFeed}
                                className="mt-6 md:mt-8 px-8 py-3 bg-white/5 border border-amber-500/30 hover:bg-amber-500/10 hover:border-amber-500 text-amber-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 flex items-center gap-2 group cursor-pointer backdrop-blur-sm">
                                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                                Ver Feed
                            </button>
                        </div>

                        <div className="lg:col-span-7 order-2 text-center lg:text-left">
                            <div className="will-change-transform mb-6 sm:mb-8 lg:mb-6" style={{
                                opacity: titleOpacity,
                                transform: `translateY(${titleTranslateY}px)`,
                            }}>
                                <div
                                    className="flex items-center gap-3 mb-3 sm:mb-4 lg:mb-4 justify-center lg:justify-start">
                                    <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-amber-400 to-amber-500"></div>
                                    <h4
                                        className="text-amber-400 font-medium tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm">
                                        SOBRE MÍ</h4>
                                </div>
                                <h2
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extralight text-white leading-[1.1] mb-4 sm:mb-5">
                                    Tu aliado en <br className="hidden sm:block" />
                                    <span
                                        className="font-semibold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">bienes
                                        raíces</span>
                                </h2>
                                <div
                                    className="w-20 sm:w-24 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 mx-auto lg:mx-0">
                                </div>
                            </div>

                            <div className="will-change-transform space-y-4 sm:space-y-5 lg:space-y-4" style={{
                                opacity:
                                    contentOpacity, transform: `translateX(${contentTranslateX}px)`,
                            }}>
                                <p
                                    className="text-gray-400 text-sm sm:text-base lg:text-base font-light leading-[1.7] max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
                                    Con más de una década de experiencia en el mercado de lujo de Cancún, transformo sueños
                                    en direcciones. Mi enfoque está en entender tus necesidades y encontrar la propiedad
                                    perfecta.
                                </p>

                                <div className="relative max-w-xl mx-auto lg:mx-0">
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
                                    </div>
                                    <div
                                        className="pl-5 sm:pl-6 py-3 sm:py-4 bg-gradient-to-r from-white/[0.03] to-transparent rounded-r-lg">
                                        <p
                                            className="text-gray-300/90 italic text-base sm:text-lg lg:text-lg font-light leading-relaxed">
                                            "Cada propiedad cuenta una historia, déjame ayudarte a escribir la tuya."
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-wrap gap-6 sm:gap-8 lg:gap-8 justify-center lg:justify-start pt-2 sm:pt-4">
                                    <div className="text-center lg:text-left">
                                        <span
                                            className="text-3xl sm:text-4xl lg:text-4xl font-light text-white block mb-1">+10</span>
                                        <span
                                            className="text-[10px] sm:text-xs text-amber-400/80 uppercase tracking-[0.2em] font-medium">Años</span>
                                    </div>
                                    <div
                                        className="w-px h-12 sm:h-14 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block">
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <span
                                            className="text-3xl sm:text-4xl lg:text-4xl font-light text-white block mb-1">+200</span>
                                        <span
                                            className="text-[10px] sm:text-xs text-amber-400/80 uppercase tracking-[0.2em] font-medium">Ventas</span>
                                    </div>
                                    <div
                                        className="w-px h-12 sm:h-14 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block">
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <span
                                            className="text-3xl sm:text-4xl lg:text-4xl font-light text-white block mb-1">98%</span>
                                        <span
                                            className="text-[10px] sm:text-xs text-amber-400/80 uppercase tracking-[0.2em] font-medium">Satisfacción</span>
                                    </div>
                                </div>

                                <div className="pt-4 sm:pt-6 lg:pt-4">
                                    <a href="#contacto"
                                        className="inline-flex items-center gap-3 sm:gap-4 text-white font-medium tracking-wider text-xs sm:text-sm uppercase hover:text-amber-400 transition-all duration-300 group border-b border-white/20 pb-2 hover:border-amber-400/50">
                                        Trabajemos juntos
                                        <ArrowRight size={18}
                                            className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex absolute bottom-8 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2"
                    style={{ opacity: Math.max(0, 1 - scrollProgress * 3) }}>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/25 font-light">Scroll</span>
                    <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-2 backdrop-blur-sm">
                        <div className="w-1 h-2 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full animate-bounce">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisorSection;
