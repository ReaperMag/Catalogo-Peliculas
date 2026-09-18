# Catalogo de Peliculas

## Estructura

```text
src/
|-- components/
|   |-- common/      # Botones y bloques reutilizables generales
|   |-- layout/      # Header, Footer y estructura compartida
|   `-- molecules/   # MovieCard, SearchBar, FilterChip
|-- contexts/        # Estado compartido de peliculas y favoritos
|-- data/            # Datos locales iniciales en JSON
|-- pages/           # Vistas principales de la aplicacion
|-- types/           # Tipos TypeScript compartidos
|-- App.tsx          # Navegacion temporal y composicion de paginas
|-- App.css          # Estilos de componentes y layout
`-- index.css        # Variables globales y reset base
```

## Comandos

```bash
npm run dev
npm run lint
npm run build
```

## Siguientes pasos sugeridos

- Instalar y conectar React Router cuando el equipo empiece las rutas reales.
- Reemplazar `src/data/movies.json` por el dataset definitivo.
- Implementar la busqueda en `SearchPage` y los filtros en `MoviesPage`.
- Dividir trabajo por componentes para evitar conflictos entre ramas.
