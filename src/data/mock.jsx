import { Home, TrendingUp, DollarSign, Award, CheckCircle } from 'lucide-react';

export const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
];

export const DESTINATION_IMAGES = [
    "https://images.unsplash.com/photo-1544161513-0179fe746fd5?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000"
];

export const PROPIEDADES = [
    {
        id: 1,
        titulo: "Penthouse Vista Mar",
        ubicacion: "Puerto Cancún",
        precio: "$1.2M USD",
        tipo: "venta",
        habitaciones: 3,
        banos: 3.5,
        area: "280 m²",
        estado: "Disponible",
        imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
        descripcion: "Espectacular penthouse con acabados de lujo, terraza privada y acceso directo a marina."
    },
    {
        id: 2,
        titulo: "Residencia V. Magna",
        ubicacion: "Zona Hotelera",
        precio: "$850k USD",
        tipo: "venta",
        habitaciones: 4,
        banos: 5,
        area: "450 m²",
        estado: "Disponible",
        imagen: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
        descripcion: "Casa familiar en condominio exclusivo con seguridad 24/7 y áreas verdes."
    },
    {
        id: 3,
        titulo: "Loft Centro",
        ubicacion: "SM 4, Centro",
        precio: "$25k MXN",
        tipo: "renta",
        habitaciones: 1,
        banos: 1.5,
        area: "90 m²",
        estado: "Rentada",
        imagen: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
        descripcion: "Ideal para ejecutivos. Totalmente amueblado y equipado en el corazón de la ciudad."
    },
    {
        id: 4,
        titulo: "Depto Lagunas",
        ubicacion: "Polígono Sur",
        precio: "$3.5M MXN",
        tipo: "venta",
        habitaciones: 2,
        banos: 2,
        area: "110 m²",
        estado: "Vendido",
        imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
        descripcion: "Oportunidad de inversión. Alta plusvalía y amenidades tipo resort."
    },
    {
        id: 5,
        titulo: "Villa Laguna",
        ubicacion: "Zona Hotelera",
        precio: "$2.1M USD",
        tipo: "venta",
        habitaciones: 5,
        banos: 6,
        area: "600 m²",
        estado: "Disponible",
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
        descripcion: "Muelle privado, alberca infinita y las mejores vistas del atardecer."
    },
    {
        id: 6,
        titulo: "Estudio Chic",
        ubicacion: "Av. Huayacán",
        precio: "$18k MXN",
        tipo: "renta",
        habitaciones: 1,
        banos: 1,
        area: "60 m²",
        estado: "Disponible",
        imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
        descripcion: "Estudio chic con amenidades, gimnasio y coworking en la torre."
    }
];

export const CASOS_EXITO = [
    {
        id: 1,
        propiedadId: 1,
        tipo: "Departamento",
        ubicacion: "Puerto Cancún",
        titulo: "Venta en 21 dias por arriba del precio objetivo",
        contexto: "Propiedad con 6 meses en el mercado sin ofertas serias.",
        resultados: [
            { etiqueta: "Tiempo de cierre", valor: "21 dias" },
            { etiqueta: "Precio", valor: "+8% vs. objetivo" },
            { etiqueta: "Visitas", valor: "12 en 7 dias" }
        ],
        imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400"
    },
    {
        id: 2,
        propiedadId: 2,
        tipo: "Residencia",
        ubicacion: "Zona Hotelera",
        titulo: "Cierre express con comprador internacional",
        contexto: "Se requerian condiciones flexibles y asesoramiento legal bilingue.",
        resultados: [
            { etiqueta: "Tiempo de cierre", valor: "28 dias" },
            { etiqueta: "Oferta", valor: "Pago de contado" },
            { etiqueta: "Negociacion", valor: "+5% sobre lista" }
        ],
        imagen: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1400"
    },
    {
        id: 3,
        propiedadId: 5,
        tipo: "Villa",
        ubicacion: "Lagos del Sol",
        titulo: "Reposicionamiento de marca y venta premium",
        contexto: "Se redisenaron materiales, staging y estrategia de precio.",
        resultados: [
            { etiqueta: "Tiempo de cierre", valor: "34 dias" },
            { etiqueta: "Interes", valor: "18 prospectos calificados" },
            { etiqueta: "Resultado", valor: "Venta con muebles" }
        ],
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400"
    }
];

export const TESTIMONIOS = [
    {
        nombre: "Carlos Mendez",
        comentario: "Encontro exactamente lo que buscaba en Puerto Cancun en tiempo record.",
        estrellas: 5,
        rol: "Inversionista"
    },
    {
        nombre: "Sarah Johnson",
        comentario: "Professional and reliable. Helped us navigate the buying process smoothly.",
        estrellas: 5,
        rol: "Compradora"
    },
    {
        nombre: "Familia Torres",
        comentario: "Vendimos nuestra casa al precio justo gracias a su valoracion experta.",
        estrellas: 5,
        rol: "Vendedores"
    }
];

export const SERVICIOS = [
    { icon: <Home size={24} />, title: "Compra", desc: "Te guío a tu hogar ideal." },
    { icon: <TrendingUp size={24} />, title: "Inversión", desc: "Alto ROI garantizado." },
    { icon: <DollarSign size={24} />, title: "Renta", desc: "Largo plazo y vacacional." },
    { icon: <Award size={24} />, title: "Avalúos", desc: "Valor real de mercado." },
    { icon: <CheckCircle size={24} />, title: "Promoción", desc: "Marketing agresivo." },
];

export const ZONAS_MAPA = [
    {
        nombre: "Zona Hotelera",
        lat: 21.0797,
        lng: -86.7735,
        desc: "Zona Hotelera - Lujo y turismo"
    },
    {
        nombre: "Puerto Cancún",
        lat: 21.1556,
        lng: -86.8067,
        desc: "Puerto Cancún - Marina privada"
    },
    {
        nombre: "Huayacán",
        lat: 21.0463,
        lng: -86.8479,
        desc: "Huayacán - Residencial premium"
    },
    {
        nombre: "Lagos del Sol",
        lat: 21.0369,
        lng: -86.9032,
        desc: "Lagos del Sol - Inversión"
    },
    {
        nombre: "Zona Sur",
        lat: 20.9839,
        lng: -86.8503,
        desc: "Zona Sur - Privada y segura"
    },
    {
        nombre: "Centro",
        lat: 21.1619,
        lng: -86.8515,
        desc: "Centro - Comercial y ejecutivo"
    }
];

export const ZONAS = ZONAS_MAPA.map(z => z.nombre);

export const FEED_POSTS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        likes: 124,
        caption: "Nueva captación en Puerto Cancún. Vistas inigualables al mar Caribe. 🌊🏠 #LuxuryRealEstate #Cancun #Mexico",
        date: "Hace 2 horas"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        likes: 89,
        caption: "Entrega de llaves exitosa. Felicidades a la familia R. por su nuevo hogar. 🗝️✨ #Sold #RealEstateLife",
        date: "Hace 1 día"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        likes: 256,
        caption: "Invirtiendo en el futuro. Lagos del Sol es la zona con mayor plusvalía este año. 📈🌴 #Investment #CancunRealEstate",
        date: "Hace 3 días"
    }
];