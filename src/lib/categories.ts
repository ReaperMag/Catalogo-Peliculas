// Script de categorías - Leidy
// Relaciona los géneros de movies.json y series.json con las categorías de categories.json

type WithGenres = { genres: string[] }

// Géneros con otro nombre -> categoría (claves en minúsculas y sin tildes)
const genreAliases: Record<string, string> = {
  action: 'Acción',
  adventure: 'Aventura',
  'sci-fi': 'Ciencia ficción',
  'science fiction': 'Ciencia ficción',
  comedy: 'Comedia',
  'comedia negra': 'Comedia',
  crime: 'Crimen',
  drama: 'Drama',
  fantasy: 'Fantasía',
  romance: 'Romance',
  thriller: 'Suspenso',
  mystery: 'Misterio',
  horror: 'Terror',
  slasher: 'Terror',
  sport: 'Deporte',
  sports: 'Deporte',
}

// Quita tildes, espacios extra y mayúsculas para comparar sin errores
function normalizeText(text: string) {
  return text.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

// Convierte un género (en inglés o español) a su categoría
export function genreToCategory(genre: string) {
  return genreAliases[normalizeText(genre)] ?? genre
}

// Devuelve solo los elementos (películas o series) que pertenecen a la categoría
export function filterByCategory<T extends WithGenres>(items: T[], category: string): T[] {
  const target = normalizeText(category)
  return items.filter((item) => item.genres.some((genre) => normalizeText(genreToCategory(genre)) === target))
}