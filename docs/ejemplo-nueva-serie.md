# Ejemplo: agregar una serie

La ficha de series usa una sola plantilla. Para agregar otra serie, añade sus datos a `src/data/series.json`; no crees un nuevo componente ni una página por título.

## 1. Agrega los datos

Añade un objeto al arreglo de `series.json`. Recuerda poner una coma después del objeto anterior:

```json
{
  "id": "s3",
  "title": "Serie de ejemplo",
  "year": 2024,
  "rating": 8.2,
  "seasons": 1,
  "genres": [
    "Drama",
    "Misterio"
  ],
  "synopsis": "Una archivista descubre una serie de mensajes ocultos en los documentos de una estación abandonada.",
  "image": ""
}
```

Cada `id` debe ser único. Los campos tienen que coincidir con el tipo `Series` de `src/types/movie.ts`.

## 2. Opcional: agrega una imagen

Guarda la imagen dentro de `src/assets/images/series/` y escribe su ruta relativa a `src/assets/images` en el campo `image`. Por ejemplo:

```json
"image": "series/serie-de-ejemplo.webp"
```

Si `image` queda vacío, la página usa el fondo visual predeterminado.

## 3. Cómo llega a la misma plantilla

1. `HomePage` muestra las series del contexto como tarjetas.
2. Al elegir una tarjeta, se llama a `onSelectSeries(id)`.
3. `App.tsx` guarda ese ID y abre la vista de series.
4. `SeriesDetailPage.tsx` busca el registro por ID en `series` y muestra sus datos con el mismo diseño.

Por eso, al seleccionar `s3`, la plantilla muestra “Serie de ejemplo”; al seleccionar `s1`, muestra Dark. No se cambia de sitio ni se necesita una redirección externa.

El botón “Volver al catálogo” regresa a la página de inicio dentro de la aplicación. Las fichas actuales muestran un marcador de episodios; para mostrar episodios reales habrá que extender el tipo `Series` y agregar esos datos al JSON.
