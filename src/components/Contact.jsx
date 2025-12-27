import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import RevealOnScroll from "../utils/RevealOnScroll";

const Contact = () => {
    return (
        <section id="contacto" className="py-16 md:py-32 bg-gray-950 text-white relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">

                    <RevealOnScroll>
                        <div className="text-center lg:text-left mb-10 lg:mb-0">
                            <h2 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 leading-tight">Hablemos de tu <span className="text-amber-500 font-bold">inversión</span>.</h2>
                            <p className="text-gray-400 mb-8 font-light text-sm md:text-xl">Perspectiva experta y sin compromisos.</p>

                            <div className="space-y-6 md:space-y-8 mb-8 md:mb-12 inline-block text-left">
                                <a href="mailto:info@luxrealty.mx" className="flex items-center gap-4 md:gap-6 text-base md:text-xl hover:text-amber-500 transition-colors">
                                    <Mail size={20} className="text-amber-500" /> <span>info@luxrealty.mx</span>
                                </a>
                                <a href="tel:+529981234567" className="flex items-center gap-4 md:gap-6 text-base md:text-xl hover:text-amber-500 transition-colors">
                                    <Phone size={20} className="text-amber-500" /> <span>+52 998 123 4567</span>
                                </a>
                                <div className="flex items-center gap-4 md:gap-6 text-base md:text-xl">
                                    <MapPin size={20} className="text-amber-500" /> <span>Puerto Cancún, Torre Diomeda</span>
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center lg:justify-start">
                                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-all">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={300}>
                        <div className="bg-white text-gray-900 p-6 md:p-14 rounded-2xl shadow-2xl relative">
                            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Mensaje directo</h3>
                            <form className="grid md:grid-cols-2 gap-4 md:gap-8">
                                <div className="md:col-span-2">
                                    <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 focus:border-amber-500 focus:outline-none text-sm font-medium" placeholder="NOMBRE" />
                                </div>
                                <div>
                                    <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 focus:border-amber-500 focus:outline-none text-sm font-medium" placeholder="CORREO" />
                                </div>
                                <div>
                                    <input type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 focus:border-amber-500 focus:outline-none text-sm font-medium" placeholder="WHATSAPP" />
                                </div>
                                <div className="md:col-span-2">
                                    <textarea className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 focus:border-amber-500 focus:outline-none h-24 md:h-32 resize-none text-sm font-medium" placeholder="MENSAJE..." ></textarea>
                                </div>
                                <div className="md:col-span-2 mt-4">
                                    <button type="button" className="w-full bg-amber-500 text-white py-4 md:py-5 font-bold tracking-[0.2em] hover:bg-amber-600 transition-all uppercase text-xs md:text-sm rounded-sm shadow-lg">
                                        Enviar
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