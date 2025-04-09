<p align="center">
  <a href="" rel="noopener">
 <img src="public/spotify-logo.webp" alt="Project logo" width="80"></a>
</p>
<h3 align="center">Spotify Clone</h3>

---

<p align="center">
    Clon de la aplicación Spotify, desarrollado con fines académicos, permitiendo la reproducción de música, creación de listas de reproducción y búsqueda de canciones, emulando la experiencia de la <a href="https://www.spotify.com">plataforma original</a> 
    <br>
    <br> 
</p>


## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 Problem Statement ](#-problem-statement-)
- [💡 Solution ](#-solution-)
- [🚀 How Does It Work? ](#-how-does-it-work-)
- [🏁 Getting Started ](#-getting-started-)
  - [1️⃣ Clonar el repositorio](#1️⃣-clonar-el-repositorio)
  - [2️⃣ Instalar dependencias](#2️⃣-instalar-dependencias)
  - [3️⃣ Iniciar el servidor de desarrollo](#3️⃣-iniciar-el-servidor-de-desarrollo)
- [🎨 Screenshots \& Previews ](#-screenshots--previews-)
  - [🔑 Página de Inicio de Sesión](#-página-de-inicio-de-sesión)
  - [🚀 Hero de Pagina Principal](#-hero-de-pagina-principal)
  - [📋 Tabla de Eventos](#-tabla-de-eventos)
  - [📝 Creación de Evento](#-creación-de-evento)
  - [👀 Previsualización de Evento](#-previsualización-de-evento)
- [📐 Project Structure ](#-project-structure-)
- [⛏️ Technology Stack ](#️-technology-stack-)
- [✍️ Authors ](#️-authors-)

## 🧐 Problem Statement <a name = "problem_statement"></a>

El objetivo de este proyecto fue desarrollar un clon de la aplicación Spotify, replicando sus funcionalidades básicas, como la búsqueda y reproducción de música, la creación y gestión de listas de reproducción, y el acceso a contenido musical.

El desafío consistió en emular la experiencia de usuario de Spotify, manejando una navegación fluida con animaciones entre páginas, y asegurando un diseño responsive para garantizar su adaptabilidad a diferentes dispositivos. Se buscó crear una plataforma intuitiva, que ofrezca una experiencia de streaming de música eficiente y atractiva.

## 💡 Solution <a name = "solution"></a>

Para optimizar la experiencia del usuario, se recreó el clon de Spotify usando tecnologías modernas. La aplicación permite la búsqueda y reproducción de música, la creación de listas de reproducción y el guardado de playlists favoritas utilizando local storage.

Además, se implementó la <strong>Web Audio API</strong> del navegador para la reproducción de audio y se diseñó una interfaz responsive para adaptarse a diferentes dispositivos. La navegación fluida y las animaciones entre páginas mejoran la interacción y hacen la experiencia más agradable.


## 🚀 How Does It Work? <a name="future_scope"></a>

- Los usuarios pueden buscar y reproducir música de manera sencilla.
- La plataforma permite crear y gestionar listas de reproducción, que se guardan en **local storage** para mantenerlas disponibles en futuras sesiones.
- La **Web Audio API** del navegador se utiliza para la reproducción de sonido, con control total sobre el volumen y la calidad de la reproducción.
- Los usuarios pueden guardar sus playlists favoritas, permitiendo un acceso rápido a su música preferida en cualquier momento.
- La interfaz es **responsive**, adaptándose a diferentes dispositivos y pantallas.
- La navegación entre las diferentes secciones es fluida, mejorada con animaciones que hacen la experiencia más interactiva y atractiva.


## 🏁 Getting Started <a name = "getting_started"></a>

### 1️⃣ Clonar el repositorio  
Abre una terminal y ejecuta: 

```bash
git clone https://github.com/Nekolas777/spotify-clone.git
cd spotify-clonbe
```

### 2️⃣ Instalar dependencias
Instala las dependencias del proyecto ejecutando:

```bash
npm install
```

### 3️⃣ Iniciar el servidor de desarrollo
Inicia el servidor de desarrollo ejecutando:

```bash
npm run dev
```

Ahora puedes abrir tu navegador y navegar a `http://localhost:4321` para ver la aplicación en funcionamiento.

## 🎨 Screenshots & Previews <a name="screenshots"></a>

### 🔑 Página de Inicio de Sesión  
<img src="public/design/ss_login.jpeg" alt="Página de Inicio de Sesión" width="100%">

### 🚀 Hero de Pagina Principal 
<img src="public/design/ss_hero.png" alt="Hero" width="100%">

### 📋 Tabla de Eventos  
<img src="public/design/ss_table.jpeg" alt="Tabla de Eventos" width="100%">

### 📝 Creación de Evento  
<img src="public/design/ss_event.png" alt="Creación de Evento" width="100%">

### 👀 Previsualización de Evento  
<img src="public/design/ss_preview.jpeg" alt="Previsualización de Evento" width="100%">


## 📐 Project Structure <a name="project_structure"></a>

```
.
└── src
    ├── assets
    │   # Contiene recursos estáticos como imágenes y estilos.
    ├── features
    ├── auth
    │   ├── context
    │   │   # Contextos de autenticación para la gestión del estado global.
    │   ├── hooks
    │   │   # Hooks personalizados relacionados con autenticación.
    │   ├── model
    │   │   # Modelos de datos para la autenticación.
    │   ├── pages
    │   │   # Páginas relacionadas con autenticación (login, registro, recuperación de contraseña, etc.).
    │   └── service
    │       # Servicios para manejar autenticación y llamadas a la API.
    │       
    ├── events
    │   ├── components
    │   │   # Componentes reutilizables para la gestión de eventos.
    │   ├── hooks
    │   │   # Hooks personalizados relacionados con eventos.
    │   ├── model
    │   │   # Modelos de datos para eventos.
    │   ├── pages
    │   │   # Páginas donde se muestran y gestionan eventos.
    │   ├── routes
    │   │   # Definición de rutas específicas para eventos.
    │   └── service
    │       # Servicios para la gestión de eventos y conexión con la API.
    │
    ├── public
    │   # Contiene archivos públicos como index.html e íconos.
    ├── router
    │   # Configuración y gestión de rutas de la aplicación.
    ├── shared
    │   # Elementos compartidos como utilidades, helpers y tipos globales.
    └── main.tsx
        # Archivo principal que monta la aplicación en React.
```

## ⛏️ Technology Stack <a name = "tech_stack"></a>

- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que añade tipado estático.  
- [React](https://react.dev/) - Biblioteca de JavaScript para la construcción de interfaces de usuario.  
- [React Router](https://reactrouter.com/) - Biblioteca para la gestión de rutas en aplicaciones React.  
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo para construir aplicaciones rápidas con React.  
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS para el diseño de interfaces con clases utilitarias.  

## ✍️ Authors <a name = "authors"></a>

- [@Nekolas777](https://github.com/Nekolas777)
- [@sergio185678](https://github.com/sergio185678)
- [@asotito](https://github.com/asotito)
- [@KevinDextreMiguel](https://github.com/KevinDextreMiguel)