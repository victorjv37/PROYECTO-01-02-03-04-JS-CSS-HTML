# Fusion Web

Este proyecto es una web responsive construida con HTML, CSS y JavaScript (usando Vite). Contiene diferentes secciones interactivas como productos, galería (usando API de Unsplash) y portafolio profesional.

## Tecnologías utilizadas

- HTML5
- CSS3 (con variables y Flex/Grid)
- JavaScript Vanilla
- Vite

## Estructura

```
fusion-web/
├── index.html
├── style.css
├── vite.config.js
├── main.js
├── /components
│   └── ...
├── /pages
│   └── ...
├── /data
│   └── ...
```

## Requisitos cumplidos

- Código limpio y estructurado (componentes JS)
- HTML semántico, validado y sin errores
- FULL RESPONSIVE con Grid/Flex
- Uso de variables CSS y clases reutilizables
- Separación de lógica y estructura
- API funcional (Unsplash)
- Fallback en caso de búsqueda sin resultados
- Secciones:
  - Inicio
  - Productos
  - Galería
  - Portafolio

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```
El proyecto estará disponible en: `http://localhost:5173`

---

## **vite.config.js**
```js
export default {
  root: './',
};
``` 