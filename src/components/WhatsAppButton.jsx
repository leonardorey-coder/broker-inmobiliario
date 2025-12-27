import { MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

const WhatsAppButton = () => {
    useSEO();

    return (
        <a
            href="https://wa.me/529980000000"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-110 flex items-center justify-center group"
        >
            <MessageCircle size={28} className="md:w-9 md:h-9" fill="white" />
        </a>
    );
};

export default WhatsAppButton;
