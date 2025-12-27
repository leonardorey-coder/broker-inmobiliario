import { useEffect } from "react";
import { HERO_IMAGES } from "../data/mock";

export const useSEO = () => {
    useEffect(() => {
        document.documentElement.lang = 'es';

        const setMetaTag = (attributes) => {
            const selectorKey = attributes.name ? 'name' : 'property';
            const selectorValue = attributes.name || attributes.property;
            let tag = document.querySelector(`meta[${selectorKey}="${selectorValue}"]`);

            if (!tag) {
                tag = document.createElement('meta');
                document.head.appendChild(tag);
            }

            Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
            return tag;
        };

        const metaDefinitions = [
            { name: 'description', content: 'Broker inmobiliario boutique en Cancún. Captamos, vendemos y rentamos propiedades premium con marketing de alto impacto y asesoría integral.' },
            { name: 'keywords', content: 'broker inmobiliario Cancún, bienes raíces lujo Cancún, venta departamentos Cancún, inversión inmobiliaria Quintana Roo' },
            { name: 'author', content: 'LuxRealty' },
            { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' },
            { property: 'og:title', content: 'Broker inmobiliario de lujo en Cancún | LuxRealty' },
            { property: 'og:description', content: 'Ventas y rentas premium en Cancún. Leads calificados, marketing digital y acompañamiento 360° para inversionistas y propietarios.' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: window.location.href },
            { property: 'og:image', content: HERO_IMAGES[0] },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Luxury Real Estate Cancún | Asesoría experta' },
            { name: 'twitter:description', content: 'Agenda una estrategia personalizada para comprar, vender o invertir en propiedades de alto valor en Cancún.' },
        ];

        const createdTags = metaDefinitions.map(setMetaTag);

        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', window.location.href);

        document.title = 'Broker inmobiliario en Cancún | LuxRealty';

        const structuredData = {
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'LuxRealty',
            url: window.location.href,
            image: HERO_IMAGES[1],
            description: 'Especialistas en corretaje y marketing inmobiliario premium en Cancún.',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cancún',
                addressRegion: 'Quintana Roo',
                addressCountry: 'MX',
            },
            areaServed: ['Cancún', 'Puerto Cancún', 'Zona Hotelera', 'Lagos del Sol', 'Huayacán'],
            makesOffer: ['Venta', 'Renta', 'Inversión', 'Avalúo'],
            telephone: '+52 998 123 4567',
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: '+52 998 123 4567',
                availableLanguage: ['Spanish', 'English'],
            },
        };

        let ldJsonScript = document.getElementById('luxrealty-ldjson');
        if (!ldJsonScript) {
            ldJsonScript = document.createElement('script');
            ldJsonScript.id = 'luxrealty-ldjson';
            ldJsonScript.type = 'application/ld+json';
            document.head.appendChild(ldJsonScript);
        }
        ldJsonScript.textContent = JSON.stringify(structuredData);

        return () => {
            createdTags.forEach((tag) => {
                if (tag && !metaDefinitions.some((def) => {
                    const key = def.name ? 'name' : 'property';
                    return tag.getAttribute(key) === (def.name || def.property);
                })) {
                    tag.remove();
                }
            });
        };
    }, []);
};