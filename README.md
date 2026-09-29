# CineBase

Catálogo web informativo de películas y series. Todo el contenido es **estático**: se
lee desde archivos JSON locales incluidos en el build, sin backend, sin base de
datos y sin peticiones a APIs externas. La app no actualiza datos en tiempo real;
para cambiar o agregar títulos se edita el JSON y se reinicia el servidor de
desarrollo.

## Características

- Catálogo de películas.
- Catálogo de series.
- Ficha de película: póster, duración, valoración, recaudación,
  dirección, guion, música, sinopsis, reparto, premios, críticas y curiosidades.
- Ficha de serie: datos de producción, guía de episodios por temporada con
  sinopsis, duración, fecha de emisión y valoración.
- Ficha de actor: biografía, datos de nacimiento, títulos conocidos y filmografía
  destacada.

## Tecnologías

| Área | Tecnología |
|-----|------------|
| UI | React 19 + React DOM 19 |
| Lenguaje | TypeScript 6 |
| Build | Vite 8 con React Compiler (Babel) |
| Estilos | CSS plano |
| Datos | Archivos JSON |
| Paquetes | npm o pnpm |

## Requisitos previos

- Node.js `^20.19.0` o `>=22.12.0` (mínimo que exige Vite 8).
- npm o pnpm.

## Instalación

```bash
npm install
```

Con pnpm:

```bash
pnpm install
```

## Comandos

```bash
npm run dev      # Servidor de desarrollo con HMR (http://localhost:5173)
npm run build    # Verificación de tipos (tsc -b) y build de producción en dist/
npm run lint     # ESLint sobre todo el proyecto
npm run preview  # Sirve localmente el build de producción
```

## Datos del catálogo

| Archivo | Contenido |
|---------|-----------|
| `src/data/movies.json` | Películas con ficha completa |
| `src/data/series.json` | Series con temporadas y detalle de episodios |
| `src/data/actors.json` | Actores con biografía y filmografía |
| `src/data/topMovies.json` | Ranking de películas más vistas |
| `src/data/categories.json` | Categorías destacadas de la home |