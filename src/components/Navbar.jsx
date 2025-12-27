import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

const Navbar = ({ onOpenFeed }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4 md:py-6'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div className={`text-xl md:text-2xl font-bold tracking-widest ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                    LUX<span className="text-amber-500">REALTY</span>
                </div>

                <div className={`hidden md:flex space-x-8 font-medium text-sm tracking-wide ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                    {['Propiedades', 'Servicios', 'Experiencia', 'Contacto'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors relative group">
                            {item.toUpperCase()}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <button onClick={onOpenFeed} className="hover:text-amber-500 transition-colors relative group font-bold text-amber-500">
                        FEED
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                    </button>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-amber-500 p-1">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className={`absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
                {['Propiedades', 'Servicios', 'Experiencia', 'Contacto'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-800 font-bold text-sm tracking-widest hover:text-amber-500 w-full text-center py-2">
                        {item.toUpperCase()}
                    </a>
                ))}
                <button onClick={() => { setIsOpen(false); onOpenFeed(); }} className="text-amber-500 font-bold text-sm tracking-widest hover:text-amber-600 w-full text-center py-2">
                    FEED
                </button>
            </div>
        </nav>
    );
};

export default Navbar;