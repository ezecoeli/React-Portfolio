# React Portfolio

Este es mi primer proyecto con **React**, un portfolio sencillo creado como ejercicio de práctica.  
El objetivo principal es seguir aprendiendo, experimentar con nuevas herramientas y poner en práctica los conocimientos adquiridos, mientras muestro de forma básica algunos proyectos y secciones típicas de un portfolio personal.

---

## Tabla de contenido
1. [Demo en vivo]
2. [Características]
3. [Stack tecnológico]
4. [Cómo ejecutar el proyecto localmente]
5. [Multilenguaje (i18n)]
6. [Deploy con GitHub Pages]

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

## Cómo ejecutar en tu máquina

Clona el repositorio, instala dependencias y ejecuta el proyecto:

- En terminal:
git clone https://github.com/ezecoeli/React-Portfolio.git
cd React-Portfolio
npm install
npm run dev

- Abre tu navegador en http://localhost:XXXX

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

---


