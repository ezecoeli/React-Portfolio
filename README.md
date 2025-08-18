# React Portfolio

Este es mi primer proyecto con **React**, un portfolio sencillo creado como ejercicio de práctica.  
El objetivo principal es seguir aprendiendo, experimentar con nuevas herramientas y poner en práctica los conocimientos adquiridos, mientras muestro de forma básica algunos proyectos y secciones típicas de un portfolio personal.

---

## Tabla de contenido
1. [Demo en vivo](#-demo-en-vivo)
2. [Características](#-características)
3. [Stack tecnológico](#-stack-tecnológico)
4. [Estructura del proyecto](#-estructura-del-proyecto)
5. [Cómo ejecutar el proyecto localmente](#-cómo-ejecutar-el-proyecto-localmente)
6. [Multilenguaje (i18n)](#-multilenguaje-i18n)
7. [Deploy con GitHub Pages](#-deploy-con-github-pages)
8. [Contribuciones](#-contribuciones)
9. [Licencia](#-licencia)

---

## Demo en vivo
Puedes verlo funcionando en:  
**[React Portfolio en GitHub Pages](https://ezecoeli.github.io/React-Portfolio)**

---

## Características principales
- Diseño moderno y responsivo usando **Tailwind CSS** y **Framer Motion**.  
- Modo claro y oscuro con detección automática del sistema.  
- Internacionalización con **react-i18next**, soportando múltiples idiomas.  
- Secciones con diferentes elementos animados.   
- Navegación con scroll suave entre secciones.  
- Despliegue sencillo usando **GitHub Pages** vía la librería `gh-pages`.

---

## Stack tecnológico
| Herramienta / Librería | Uso principal |
|------------------------|---------------|
| React (v19)            | Base del frontend |
| Tailwind CSS           | Estilado y layout |
| Framer Motion          | Animaciones fluidas |
| react-i18next          | Internacionalización |
| Vite                   | Bundler y servidor de desarrollo |
| gh-pages               | Deploy automático en GitHub Pages |

---

## Estructura del proyecto
React-Portfolio/
├─ public/
│ └─ index.html
├─ src/
│ ├─ assets/ # Imágenes, videos, etc.
│ ├─ components/ # Componentes reutilizables (e.g. CounterBand)
│ ├─ sections/ # Secciones de tu portfolio (Profile, Projects, etc.)
│ ├─ i18n/ # Archivos JSON de traducción
│ ├─ App.jsx # Layout principal
│ ├─ main.jsx / index.jsx # Entry point
│ └─ index.css # Estilos globales y Tailwind base
├─ package.json
└─ vite.config.js # Configuración del bundler (base path)

---

## Cómo ejecutar en tu máquina

Clona el repositorio, instala dependencias y ejecuta el proyecto:

```bash
git clone https://github.com/ezecoeli/React-Portfolio.git
cd React-Portfolio
npm install
npm run dev

Abre tu navegador en http://localhost:XXXX

---

## Multilenguaje (i18n)

- Los textos están definidos en archivos JSON separados por idioma (e.g., `en.json`, `es.json`).

Se integran en tus componentes usando `useTranslation()` y `t('key')`.

Puedes fácilmente agregar más idiomas creando nuevos archivos JSON y extendiendo la configuración de `i18next`.

---

## Deploy a GitHub Pages

Agrega este script a package.json:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

Luego ejecuta:
npm run deploy
