import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import RevealOnScroll from "../utils/RevealOnScroll";

const Contact = () => {
    return (
        <section id="contacto" className="py-20 md:py-32 bg-gray-950 text-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-50 z-0"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Contact Info */}
                    <RevealOnScroll className="lg:col-span-5 pt-10">
                        <div className="text-left mb-12 lg:mb-0">
                            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Contáctanos</span>
                            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                                Hablemos de tu <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Inversión</span>.
                            </h2>
                            <p className="text-gray-400 mb-12 font-light text-lg md:text-xl leading-relaxed max-w-md">
                                Perspectiva experta y sin compromisos. Diseñamos estrategias patrimoniales a tu medida.
                            </p>

                            <div className="space-y-8 mb-12">
                                <a href="mailto:info@luxrealty.mx" className="group flex items-start gap-4 text-lg md:text-xl transition-all hover:translate-x-2">
                                    <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-amber-500 group-hover:text-amber-500 transition-colors shrink-0">
                                        <Mail size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">E-mail</span>
                                        <span className="text-white group-hover:text-amber-500 transition-colors">info@luxrealty.mx</span>
                                    </div>
                                </a>

                                <a href="tel:+529981234567" className="group flex items-start gap-4 text-lg md:text-xl transition-all hover:translate-x-2">
                                    <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-amber-500 group-hover:text-amber-500 transition-colors shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Teléfono</span>
                                        <span className="text-white group-hover:text-amber-500 transition-colors">+52 998 123 4567</span>
                                    </div>
                                </a>

                                <div className="group flex items-start gap-4 text-lg md:text-xl transition-all hover:translate-x-2">
                                    <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-amber-500 group-hover:text-amber-500 transition-colors shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Oficina</span>
                                        <span className="text-white group-hover:text-amber-500 transition-colors">Puerto Cancún, Torre Diomeda</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-950 transition-all duration-300">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Right Column: Premium Form */}
                    <RevealOnScroll delay={300} className="lg:col-span-7 w-full">
                        <div className="bg-white text-gray-900 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[100px] -mr-8 -mt-8 z-0"></div>

                            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-10 relative z-10">Mensaje directo</h3>

                            <form className="grid md:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                                <div className="md:col-span-2 relative">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-gray-300 py-4 focus:border-gray-900 focus:outline-none transition-all peer text-gray-900 text-lg"
                                        placeholder="&nbsp;"
                                        id="nombre"
                                    />
                                    <label htmlFor="nombre" className="absolute left-0 top-4 text-gray-400 text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-amber-600 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-amber-600 peer-[:not(:placeholder-shown)]:text-[10px]">
                                        Nombre Completo
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-gray-300 py-4 focus:border-gray-900 focus:outline-none transition-all peer text-gray-900 text-lg"
                                        placeholder="&nbsp;"
                                        id="correo"
                                    />
                                    <label htmlFor="correo" className="absolute left-0 top-4 text-gray-400 text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-amber-600 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-amber-600 peer-[:not(:placeholder-shown)]:text-[10px]">
                                        Correo
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-b border-gray-300 py-4 focus:border-gray-900 focus:outline-none transition-all peer text-gray-900 text-lg"
                                        placeholder="&nbsp;"
                                        id="whatsapp"
                                    />
                                    <label htmlFor="whatsapp" className="absolute left-0 top-4 text-gray-400 text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-amber-600 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-amber-600 peer-[:not(:placeholder-shown)]:text-[10px]">
                                        WhatsApp
                                    </label>
                                </div>

                                <div className="md:col-span-2 relative">
                                    <textarea
                                        className="w-full bg-transparent border-b border-gray-300 py-4 focus:border-gray-900 focus:outline-none h-32 resize-none transition-all peer text-gray-900 text-lg"
                                        placeholder="&nbsp;"
                                        id="mensaje"
                                    ></textarea>
                                    <label htmlFor="mensaje" className="absolute left-0 top-4 text-gray-400 text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-amber-600 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-amber-600 peer-[:not(:placeholder-shown)]:text-[10px]">
                                        Mensaje
                                    </label>
                                </div>

                                <div className="md:col-span-2 pt-6">
                                    <button type="button" className="w-full bg-gray-900 text-white py-5 font-bold tracking-[0.3em] hover:bg-amber-600 transition-all duration-500 uppercase text-xs md:text-sm rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </form>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Contact;