# 🎤 Rockola & Karaoke App – React JS

Este proyecto es una aplicación web interactiva desarrollada en **React JS** que funciona como una **Rockola / Karaoke Universal**. Permite cargar pistas de audio reales, seleccionar y reproducir un catálogo dinámico de canciones, sincronizando la letra con una precisión extrema (palabra por palabra) de manera fluida y adaptando la interfaz visual a los efectos cinematográficos o temáticos de cada pista musical.

---

## 📌 Descripción del Proyecto

El objetivo principal de esta aplicación es construir una experiencia multimedia interactiva avanzada en el Frontend. El sistema utiliza la API nativa de Audio de HTML5 para sincronizar la reproducción con una matriz de tiempos configurada, garantizando que la letra y los efectos visuales coincidan perfectamente con el sonido en tiempo real.

### 🌟 Mejoras e Innovaciones Clave:
- **Sincronización Avanzada "Palabra por Palabra"**: Evolución del formato de lectura mediante estructuras de arreglos que permiten iluminar de manera dinámica fragmentos individuales y palabras exactas basándose en su propia duración.
- **Modo Desarrollo (Developer Mode)**: Herramienta de auditoría de tiempos integrada, activable desde la configuración de la canción. Permite visualizar el progreso con precisión de milisegundos (en lugar de minutos) para facilitar el trabajo de sincronización de las líricas.
- **Motor de Efectos Visuales Universal**: Implementación de componentes reutilizables y escalables (como `LottieEffect`, lluvia de pétalos, rosas, etc.) que son invocados dinámicamente según los parámetros configurados en el JSON de cada canción, sin ensuciar la lógica principal del `App.jsx`.
- **Renderizado Antiruido de Palabras**: Sistema de segmentación en contenedores `whitespace-nowrap` diseñado para prevenir que palabras largas se corten de forma abrupta a mitad de la línea por limitaciones de la interfaz.
- **Estructura 100% Modular**: El catálogo de música, variables temáticas, efectos visuales y tiempos están completamente desacoplados del código de la interfaz principal en 
`src/data/songs.js`.

---

## 🛠️ Tecnologías Utilizadas

- **React JS** (Hooks: `useState`, `useEffect`, `useMemo`, `useRef`)
- **Web Audio API** (Sincronización precisa con elementos `HTMLAudioElement`)
- **Framer Motion** (Animaciones cinemáticas, transiciones de estado y montajes de vista previa)
- **Tailwind CSS** (Estilos responsivos y diseño UI/UX moderno)
- **Lottie / Efectos de Partículas** (Soporte para integraciones visuales inmersivas)
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
git clone [https://github.com/Genaro43/PlayList.git](https://github.com/Genaro43/PlayList.git)
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
├── public/
│   ├── music/               # Archivos de audio (.mp3)
│   └── assets/              # Archivos Lottie / JSONs de efectos visuales
├── src/
│   ├── components/
│   │   ├── KaraokeText.jsx  # Motor de renderizado "palabra por palabra"
│   │   ├── LottieEffect.jsx # Componente universal para efectos de fondo
│   │   └── SyncTool.jsx     # Herramienta interna para crear sincronizaciones
│   ├── data/
│   │   └── songs.js         # Base de datos JSON (metadatos, color, efectos, tiempos)
│   └── App.jsx              # Reproductor principal, Switch Mágico y gestor de estado
```

---

## 🎯 Funcionalidades

- **Rockola Dinámica**: Menú robusto para alternar entre distintas pistas musicales sin recargar.
- **Sincronización Ultrasensible**: Iluminación de líricas en tiempo real con distintos modos (Línea Continua o Híbrido).
- **Vista Previa de Letras**: Renderizado opaco de los siguientes versos mientras la línea actual se reproduce.
- **Visualizador de Progreso e Interacción**: Barra de tiempo clickeable inteligente que reajusta de inmediato tanto el audio como la letra.
- **Ambientes Cinemáticos**: Fondos que brillan y cambian de color / animación según los requerimientos visuales de cada pista.

---

## 📚 Objetivo de aprendizaje

Este desarrollo refuerza habilidades avanzadas en:

- Arquitectura de Componentes Universales y Reutilizables en React.
- Manejo profundo de estados multimedia y eventos de la API Nativa de Audio (`play`, `pause`, `currentTime`).
- Matemáticas de sincronización UI-Audio, controlando estados visuales mediante interpolación matemática de tiempos.
- Optimización de animaciones cinematográficas fluidas (Framer Motion).
- JSON-Driven Development: Construcción de sistemas escalables basados en archivos externos de configuración.

---

## 👨‍💻 Autor

Genaro Rosales Carrasco  
GitHub: https://github.com/Genaro43

---

## 📄 Licencia

Proyecto desarrollado con fines educativos y pedagógicos. 
Los derechos de autor de las pistas de música y letras pertenecen a sus respectivos propietarios.
