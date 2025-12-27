
import RevealOnScroll from "../utils/RevealOnScroll";

const About = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                <div className="md:col-span-6 relative">
                    <RevealOnScroll delay={200}>
                        <img
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000"
                            alt="Lifestyle"
                            className="w-full h-[300px] md:h-[600px] object-cover rounded-sm shadow-xl"
                        />
                    </RevealOnScroll>
                </div>
                <div className="md:col-span-6 text-center md:text-left">
                    <RevealOnScroll>
                        <h4 className="text-amber-500 font-bold tracking-widest text-xs md:text-sm mb-4">FILOSOFÍA</h4>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Construyo patrimonio.</h2>
                        <p className="text-base md:text-xl text-gray-600 mb-6 leading-relaxed font-light">
                            Honestidad radical: mi prioridad es proteger tu inversión. Si una propiedad no cumple mis estándares, te lo diré.
                        </p>
                        <div className="border-l-4 md:border-l-8 border-amber-500 pl-4 md:pl-8 py-2 md:py-4 italic text-gray-800 text-lg md:text-2xl font-serif bg-gray-50 rounded-r-lg">
                            "El verdadero lujo es la inteligencia de la inversión."
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default About;
