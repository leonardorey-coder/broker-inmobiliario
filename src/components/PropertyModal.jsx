import { X, MapPin, Bed, Bath, Move, MessageCircle } from 'lucide-react';

const PropertyModal = ({ property, onClose, onContact }) => {
    if (!property) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={handleBackdropClick}>
            <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative animate-slide-up flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white z-20 text-gray-900 shadow-md"
                >
                    <X size={20} />
                </button>

                <div className="h-64 sm:h-80 relative shrink-0">
                    <img src={property.imagen} alt={property.titulo} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                        {property.tipo}
                    </div>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{property.titulo}</h3>
                            <p className="text-gray-500 flex items-center gap-2 text-sm"><MapPin size={16} className="text-amber-500" /> {property.ubicacion}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                            <span className="text-2xl font-bold text-amber-600 block text-right">{property.precio}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-6 border-t border-b border-gray-100 mb-6 bg-gray-50 rounded-lg px-2">
                        <div className="text-center">
                            <span className="block text-gray-400 text-[10px] uppercase tracking-wider mb-1">Hab</span>
                            <span className="text-lg font-bold flex items-center justify-center gap-1 text-gray-800"><Bed size={20} className="text-amber-500" /> {property.habitaciones}</span>
                        </div>
                        <div className="text-center border-l border-gray-200">
                            <span className="block text-gray-400 text-[10px] uppercase tracking-wider mb-1">Baños</span>
                            <span className="text-lg font-bold flex items-center justify-center gap-1 text-gray-800"><Bath size={20} className="text-amber-500" /> {property.banos}</span>
                        </div>
                        <div className="text-center border-l border-gray-200">
                            <span className="block text-gray-400 text-[10px] uppercase tracking-wider mb-1">Área</span>
                            <span className="text-lg font-bold flex items-center justify-center gap-1 text-gray-800"><Move size={20} className="text-amber-500" /> {property.area}</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base font-light">
                        {property.descripcion} Oportunidad única en el mercado actual. Diseño arquitectónico que maximiza luz y vistas.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button className="w-full bg-gray-900 text-white py-4 font-bold tracking-widest hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 uppercase text-xs md:text-sm rounded-sm">
                            <MessageCircle size={18} /> Info por WhatsApp
                        </button>
                        <button
                            className="w-full border-2 border-gray-900 text-gray-900 py-4 font-bold tracking-widest hover:bg-gray-900 hover:text-white transition-colors uppercase text-xs md:text-sm rounded-sm"
                            onClick={() => {
                                if (onContact) {
                                    onContact(property);
                                }
                                onClose();
                            }}
                        >
                            Agendar Visita
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyModal;