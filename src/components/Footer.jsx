
const Footer = () => {
    return (
        <>
            <footer className="relative z-10 bg-black text-white py-8 md:pt-12 md:pb-[1vh] md:mb-[20vh] border-t border-gray-900 text-center mb-[11vh] md:mb-32 pb-[1vh]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 items-center">
                        <div className="flex flex-col items-center">
                            <div className="text-2xl md:text-3xl font-bold tracking-widest text-white mb-2 md:mb-4 text-center">
                                LUX<span className="text-amber-500">REALTY</span>
                            </div>
                            <p className="text-gray-500 text-xs md:text-sm text-center">Real Estate Premium Cancún.</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-400">
                            <a href="#propiedades" className="hover:text-amber-500">Propiedades</a>
                            <a href="#servicios" className="hover:text-amber-500">Servicios</a>
                            <a href="#contacto" className="hover:text-amber-500">Contacto</a>
                        </div>

                        <div className="text-center text-gray-500 text-xs md:text-sm">
                            <p>© 2025 Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="fixed bottom-0 left-0 right-0 -z-10 pointer-events-none pb-[1vh] pt-[10vh] bg-black">
                <div className="container mx-auto px-4 md:px-6 flex justify-center">
                    <div className="text-5xl sm:text-6xl md:text-9xl lg:text-[10rem] font-bold tracking-widest text-white text-center w-full">
                        LUX<span className="text-amber-500">REALTY</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
