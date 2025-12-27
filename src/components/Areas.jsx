

import { useState } from "react";
import { ZONAS_MAPA, ZONAS } from "../data/mock";
import RevealOnScroll from "../utils/RevealOnScroll";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const Areas = () => {
    const [selectedZona, setSelectedZona] = useState(ZONAS_MAPA[0]); // Inicia con primera zona

    const handleZonaClick = (zonaName) => {
        const zona = ZONAS_MAPA.find(z => z.nombre === zonaName);
        if (zona) {
            setSelectedZona(zona);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Zonas clave</h2>
                    <p className="text-base md:text-xl text-gray-600 font-light max-w-3xl mx-auto mb-10 md:mb-16">
                        Especialista en las áreas de mayor plusvalía de Cancún.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
                        {ZONAS.map((zona, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleZonaClick(zona)}
                                className={`px-4 py-2 md:px-8 md:py-3 transition-all shadow-sm rounded-sm text-xs md:text-sm font-bold tracking-wide uppercase ${selectedZona?.nombre === zona
                                    ? 'bg-amber-500 text-white border border-amber-500'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-500'
                                    }`}
                            >
                                {zona}
                            </button>
                        ))}
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={400}>
                    <div className="mt-8 md:mt-12 w-full h-[250px] md:h-[500px] bg-gray-900 rounded-xl overflow-hidden relative group shadow-lg">
                        <MapContainer
                            center={[selectedZona?.lat || 21.0631, selectedZona?.lng || -87.0694]}
                            zoom={12}
                            style={{ height: '100%', width: '100%' }}
                            className="rounded-xl"
                            key={`${selectedZona?.lat}-${selectedZona?.lng}`}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {ZONAS_MAPA.map((zona, idx) => (
                                <Marker
                                    key={idx}
                                    position={[zona.lat, zona.lng]}
                                    eventHandlers={{
                                        click: () => setSelectedZona(zona),
                                    }}
                                >
                                    <Popup className="rounded-lg">
                                        <div className="text-center">
                                            <h3 className="font-bold text-gray-900 mb-1">{zona.nombre}</h3>
                                            <p className="text-xs text-gray-600">{zona.desc}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>

                        {selectedZona && (
                            <div className="absolute bottom-4 left-4 right-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg max-w-xs">
                                <h4 className="font-bold mb-1">{selectedZona.nombre}</h4>
                                <p className="text-sm text-gray-600">{selectedZona.desc}</p>
                            </div>
                        )}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Areas;
