/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",           // el index.html en la raíz
    "./css/**/*.css",         // todos los archivos CSS dentro de la carpeta css y subcarpetas
    "./**/index.html",        // todos los index.html en cualquier carpeta dentro del proyecto
    "./**/*.css"              // todos los CSS dentro de cualquier carpeta y subcarpetas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
