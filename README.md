# 🎤 Rockola & Karaoke App – React JS

Este proyecto es una aplicación web interactiva desarrollada en **React JS** que funciona como una **Rockola / Karaoke Universal**. Permite cargar pistas de audio reales, seleccionar y reproducir un catálogo dinámico de canciones, sincronizando la letra letra por letra de manera fluida y adaptando la interfaz visual al color temático de cada pista musical.

---

## 📌 Descripción del Proyecto

El objetivo principal de esta aplicación es construir una experiencia multimedia interactiva en el Frontend. El sistema utiliza el API nativa de Audio de HTML5 para sincronizar la reproducción con una matriz de tiempos configurada, garantizando que la letra coincida perfectamente con el sonido en tiempo real.

### 🌟 Mejoras e Innovaciones Clave:
- **Audio Nativo Sincronizado:** Implementación de `useRef` para controlar el elemento `<audio>` y `requestAnimationFrame` para una lectura de progreso a 60 FPS, eliminando los retrasos de los temporizadores tradicionales.
- **Sincronización Inteligente:** El motor de renderizado respeta los "tiempos muertos" iniciales y pausas instrumentales, permitiendo preparar la lectura de la letra antes de que esta se ilumine.
- **Renderizado Antiruido de Palabras:** Se implementó una lógica de segmentación con contenedores `whitespace-nowrap` que previene que las palabras largas se corten o quiebren a la mitad.
- **Estructura Modular:** El catálogo de música está desacoplado del código de la interfaz principal en `src/data/songs.js`.
- **Modo Creador Integrado:** Incluye una herramienta de sincronización interna para generar los tiempos de las canciones fácilmente mediante la barra espaciadora.

---

## 🛠️ Tecnologías Utilizadas

- **React JS** (Hooks: `useState`, `useEffect`, `useMemo`, `useRef`)
- **Web Audio API** (Sincronización precisa con elementos `HTMLAudioElement`)
- **Framer Motion** (Animaciones cinemáticas y transiciones de estado)
- **Tailwind CSS** (Estilos responsivos y diseño moderno)
- **JavaScript (ES6+)**
- **Node.js & npm**

---

## 📋 Requisitos Previos

Antes de instalar y correr el proyecto, asegúrate de contar con:

- **Node.js** (Versión 16 o superior) - [https://nodejs.org/](https://nodejs.org/)
- **npm** (Incluido con Node.js)
- Tus archivos `.mp3` colocados en la carpeta `public/music/` siguiendo la ruta definida en el catálogo.

---

## ⚙️ Instalación y Ejecución

Sigue estos pasos para montar el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/devgarcia/karaoke-piel-canela.git](https://github.com/devgarcia/karaoke-piel-canela.git)
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Ejecutar el proyecto en modo desarrollo

```bash
npm run dev
```

### 4. Abrir en el navegador

```txt
http://localhost:5173
```

---

## 📂 Estructura del proyecto

```bash
├── public/music/           # Archivos de audio (.mp3)
├── src/
│   ├── components/
│   │   ├── KaraokeText.jsx # Motor de renderizado y animación de letras
│   │   └── SyncTool.jsx    # Herramienta interna para crear sincronizaciones rápidas
│   ├── data/
│   │   └── songs.js        # Base de datos JSON con metadatos y tiempos de canciones
│   └── App.jsx             # Reproductor principal y gestor de estado
```

---

## 🎯 Funcionalidades

- Rockola de Selección: Menú dinámico para cambiar entre pistas.
- Sincronización Precisa: Lectura en tiempo real del archivo de audio.
- Visualizador de Progreso: Barra dinámica ajustada a la duración total de la pista.
- Experiencia tipo karaoke

---

## 📚 Objetivo de aprendizaje

Este desarrollo refuerza habilidades avanzadas en:

- Componentes en React
- Manejo de estados multimedia: Gestión de eventos de audio (play, pause, currentTime).
- Sincronización de audio y texto
- Optimización de animaciones: Uso de requestAnimationFrame vs setInterval.
- Escalabilidad de datos: Construcción de sistemas basados en configuración (JSON-driven development).

---

## 👨‍💻 Autor

Jose Manuel Garcia Calixto  
GitHub: https://github.com/devgarciacali

---

## 📄 Licencia

Proyecto desarrollado con fines educativos y pedagógicos. 
Los derechos de autor de las pistas de música y letras pertenecen a sus respectivos propietarios.
