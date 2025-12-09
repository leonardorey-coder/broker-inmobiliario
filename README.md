# LuxRealty - Real Estate One Page Website

Sitio web premium de bienes raíces especializado en propiedades de lujo en Cancún. Una page totalmente responsivo con animaciones fluidas y experiencia de usuario excepcional.

## Características

✨ **Características Principales:**
- Navbar fijo y responsive con efecto scroll
- Hero con carrusel de imágenes automático
- Grid de propiedades con filtros (venta/renta)
- Modal interactivo de propiedades
- Sección de servicios con iconos animados
- Testimonios con carrusel horizontal
- Sección de experiencia y trayectoria
- Formulario de contacto
- Botón flotante de WhatsApp
- Animaciones al scroll (Reveal on Scroll)
- Totalmente responsivo (mobile first)

## Stack Tecnológico

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling utilitario
- **Lucide React** - Iconografía
- **React Hooks** - State management

## Instalación

```bash
# Clonar o navegar al proyecto
cd /Users/leonardocruz/Documents/proyectos/broker-inmobiliario

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Vista previa de la compilación
- `npm run lint` - Ejecuta ESLint

## Estructura del Proyecto

```
src/
├── App.jsx          # Componente principal con todas las secciones
├── App.css          # Estilos (Tailwind)
├── index.css        # Estilos globales
├── main.jsx         # Punto de entrada
└── assets/          # Imágenes y recursos
```

## Componentes

- **RevealOnScroll** - Utilidad para animar elementos al hacer scroll
- **Navbar** - Navegación con menú mobile
- **Hero** - Sección principal con carrusel
- **Properties** - Grid de propiedades con modal
- **Services** - Servicios ofrecidos
- **Experience** - Trayectoria profesional
- **Testimonials** - Testimonios de clientes
- **Areas** - Zonas de especialización
- **About** - Sección sobre filosofía
- **Destination** - Sección sobre Cancún
- **Contact** - Formulario de contacto
- **Footer** - Pie de página
- **WhatsAppButton** - Botón flotante

## Datos

El proyecto incluye datos de ejemplo (mock data) que pueden ser reemplazados:
- `HERO_IMAGES` - Imágenes del hero
- `DESTINATION_IMAGES` - Imágenes del destino
- `PROPIEDADES` - Listado de propiedades
- `TESTIMONIOS` - Testimonios de clientes
- `SERVICIOS` - Servicios ofrecidos
- `ZONAS` - Zonas de cobertura

## Personalización

Para personalizar el sitio:

1. **Cambiar colores**: Actualizar la paleta de colors en `tailwind.config.js`
2. **Reemplazar imágenes**: Cambiar URLs en los arrays de imágenes
3. **Actualizar datos**: Modificar los objetos de datos (PROPIEDADES, TESTIMONIOS, etc.)
4. **Cambiar textos**: Editar directamente en los componentes

## Optimizaciones

- ✅ Imágenes de Unsplash (optimizadas)
- ✅ Tailwind CSS purged para producción
- ✅ Code splitting automático con Vite
- ✅ Lazy loading de componentes
- ✅ Animaciones CSS suave

## Deploy

Para hacer deploy del proyecto:

```bash
npm run build
```

La carpeta `dist/` estará lista para subir a cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc.).

## Licencia

Proyecto creado como plantilla para agencias inmobiliarias premium.

---

**Última actualización:** 9 de diciembre de 2025
