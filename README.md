# 🦷 Diente a Diente

Una moderna aplicación web para servicios dentales desarrollada con Next.js, diseñada para ofrecer una experiencia digital completa tanto para pacientes como para profesionales de la salud dental.

## ✨ Características

- **Interfaz Moderna**: Diseño responsivo y atractivo con Tailwind CSS
- **Reserva de Citas**: Sistema integrado de contacto y solicitud de citas
- **Información de Servicios**: Catálogo completo de tratamientos dentales
- **Formulario de Contacto**: Integración con nodemailer para envío de correos
- **Experiencia Mobile-First**: Optimizado para dispositivos móviles
- **SEO Optimizado**: Estructura de Next.js con App Router

## 🚀 Servicios Ofrecidos

- Limpieza dental profesional
- Blanqueamiento dental
- Resinas estéticas
- Extracciones y cirugías dentales
- Tratamientos de ortodoncia
- Rehabilitación oral
- Tratamientos de endodoncia
- Y mucho más...

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15.3.4](https://nextjs.org/)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4.0
- **UI Components**: Custom components con diseño moderno
- **Iconos**: Heroicons
- **Email**: Nodemailer para formularios de contacto
- **Deploy**: Optimizado para Vercel

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/MartinezErwin/web-diente.git
cd web-diente
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Configura las variables de entorno:

```bash
cp .env.example .env.local
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── UI/
│   │   │   ├── header.tsx      # Navegación principal
│   │   │   └── footer.tsx      # Pie de página
│   │   ├── links.js            # Enlaces de navegación
│   │   └── tratamientos.js     # Componentes de servicios
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts        # API para envío de correos
│   ├── contacto/
│   │   └── page.tsx           # Página de contacto
│   ├── sobre-mi/
│   │   └── page.tsx           # Página sobre la profesional
│   ├── tratamientos/
│   │   └── page.tsx           # Página de servicios
│   ├── globals.css            # Estilos globales
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página de inicio
└── public/                    # Recursos estáticos
```

## 🌐 Páginas Principales

- **Inicio** (`/`) - Landing page con información principal
- **Sobre Mí** (`/sobre-mi`) - Información sobre Paola Brizuela
- **Tratamientos** (`/tratamientos`) - Catálogo de servicios dentales
- **Contacto** (`/contacto`) - Formulario de contacto y reserva de citas

## 📱 Contacto

- **WhatsApp**: +52 464 651 6461
- **Email**: contacto@dienteadiente.com
- **Facebook**: [/dienteadiente](https://www.facebook.com/dienteadiente)
- **Instagram**: [@dienteadiente](https://www.instagram.com/dienteadiente)

## 🚀 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo con Turbopack
npm run build        # Construir para producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar ESLint
```

## 🔧 Configuración

El proyecto utiliza:

- **Turbopack** para desarrollo rápido
- **ESLint** para calidad de código
- **PostCSS** para procesamiento CSS
- **TypeScript** para tipado estático

## 📄 Licencia

© 2025 Diente a Diente. Todos los derechos reservados.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

---

Desarrollado con ❤️ para ofrecer servicios dentales de calidad.
