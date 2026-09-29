# Cómo contribuir en CineBase

Guía de trabajo del equipo: cómo preparar cambios, qué convenciones sigue el
proyecto y qué verificar antes de abrir un Pull Request.

## Antes de empezar

Requisitos: Node.js `^20.19.0` o `>=22.12.0` y npm o pnpm.

```bash
git clone https://github.com/ReaperMag/Catalogo-Peliculas.git
cd Catalogo-Peliculas
npm install        # o: pnpm install
npm run dev
```

Trabaja siempre sobre una rama propia creada desde `develop`, nunca
directamente sobre `main` ni `develop`.

```bash
git checkout develop
git pull origin develop
git checkout -b feature/mi-aporte
```

## Ramas

| Rama | Uso | Quién integra |
|------|-----|---------------|
| `main` | Código listo para producción | Responsable del proyecto |
| `develop` | Rama de integración, punto de partida de cada aporte | Se integra al terminar cada PR |
| `feature/*` | Funcionalidad nueva o ampliación de contenido | Cualquier integrante |
| `release/*` | Preparacion para desplegar al usuario | Cualquier integrante |
| `hotfix/*` | Corrección urgente sobre `main` | Cualquier integrante |

Nombra las ramas de forma descriptiva y en minúsculas: `feature/series-italiana`,
`bugfix/imagen-series`, `feature/actores-documental`.

## Commits

Formato tipo [Conventional Commits](https://www.conventionalcommits.org/):
`<tipo>(<ámbito>): <descripción en imperativo y en minúscula>`

| Tipo | Uso |
|------|-----|
| `feat` | Funcionalidad o sección nueva |
| `fix` | Corrección de error |
| `docs` | Documentación (README, comentarios) |
| `style` | Formato sin cambios de comportamiento |
| `refactor` | Reorganización de código existente |
| `chore` | Dependencias, configuración, tareas varios |

Ejemplos:

```text
feat(home): agrega carrusel de series populares
feat(peliculas): agrega la película Ella es el hombre
fix(series): corrige la imagen de la serie The Bear
docs(readme): documenta cómo agregar contenido al catálogo
chore(deps): actualiza vite a la última versión
```

Reglas prácticas:

- Un commit hace una sola cosa; divide los cambios grandes en varios commits.
- No subas `node_modules` ni `dist` (ya están en `.gitignore`).
- No incluyas secretos, tokens ni datos personales.
- Escribe la descripción en español, como el resto del proyecto.

## Pull Requests

1. Sincroniza tu rama con `develop` antes de pedir revisión.
2. Abre el PR contra `develop`, nunca contra `main`.
3. Completa la descripción: qué cambia, por qué, y cómo se verifica.
4. Pide al menos una revisión de otro integrante.
5. Resuelve los comentarios antes de integrar.
6. Avisa al equipo si tu cambio toca archivos compartidos.

```bash
git fetch origin
git merge origin/develop
git push origin feature/mi-aporte
```

## Verificación antes de abrir el PR

El proyecto no tiene pruebas automáticas, así que la revisión manual es
obligatoria.

```bash
npm run lint     # debe terminar sin errores
npm run build    # tsc -b + build de producción, sin errores de tipos
npm run dev      # revisar la sección tocada en el navegador
```

## Agregar contenido al catálogo

Todo el contenido vive en `src/data/*.json` y los tipos están en
`src/types/movie.ts`.

1. Copia la imagen a la carpeta correcta: `src/assets/images/peliculas/`,
   `src/assets/images/series/` o `src/assets/images/actores/`.
2. Agrega el registro al JSON correspondiente respetando el tipo exacto.
3. Usa un `id` único: `m*` para películas, `s*` para series, `a*` para actores,
   `t*` para el ranking de más vistas.
4. En `image` guarda la ruta relativa a `src/assets/images/`, por ejemplo
   `peliculas/ella-es-el-hombre.jpg`. Si la ruta no existe, la vista muestra la
   letra inicial del título, así que revisa que sea correcta.
5. Para el campo `image` de un episodio dentro de
   `seasonDetails[].episodeDetails[]` usa una imagen de la serie o una propia en
   `series/`.
6. `trailerUrl` es un enlace de YouTube; se abre en una pestaña nueva.
7. Reinicia `npm run dev` para que Vite recargue el JSON.
