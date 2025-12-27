
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import RevealOnScroll from "../utils/RevealOnScroll";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 md:py-12 border-t border-gray-900 text-center md:text-left">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 items-center">
                    <div>
                        <div className="text-2xl md:text-3xl font-bold tracking-widest text-white mb-2 md:mb-4">
                            LUX<span className="text-amber-500">REALTY</span>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm">Real Estate Premium Cancún.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-400">
                        <a href="#propiedades" className="hover:text-amber-500">Propiedades</a>
                        <a href="#servicios" className="hover:text-amber-500">Servicios</a>
                        <a href="#contacto" className="hover:text-amber-500">Contacto</a>
                    </div>

                    <div className="md:text-right text-gray-500 text-xs md:text-sm">
                        <p>© 2025 Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
