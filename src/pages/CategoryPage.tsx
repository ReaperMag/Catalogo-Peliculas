// Página de categoría - Leidy
// Muestra en forma de matriz las películas y series de una categoría
import { useMovies } from '../contexts/MoviesContext'
import { filterByCategory } from '../lib/categories'
import { getMediaImage } from '../lib/mediaImages'
import type { PageKey } from '../types/movie'
import './CategoryPage.css'

type CategoryPageProps = {
  category: string | null
  onNavigate: (page: PageKey) => void
  onSelectMovie: (movieId: string) => void
  onSelectSeries: (seriesId: string) => void
}

type CategoryItem = {
  id: string
  title: string
  year: number
  rating: number
  genres: string[]
  image: string
}

function CategoryCard({ item, label, onSelect }: { item: CategoryItem; label: string; onSelect: (id: string) => void }) {
  const imageUrl = getMediaImage(item.image)

  return (
    <button className="category-page__card" onClick={() => onSelect(item.id)} type="button">
      <span className="category-page__poster">
        {imageUrl ? <img alt={item.title} src={imageUrl} /> : <span aria-hidden="true">{item.title.slice(0, 1)}</span>}
        <span className="category-page__rating">★ {item.rating}</span>
      </span>
      <span className="category-page__info">
        <span className="category-page__type">{label} · {item.year}</span>
        <strong>{item.title}</strong>
        <small>{item.genres.join(' · ')}</small>
      </span>
    </button>
  )
}

export function CategoryPage({ category, onNavigate, onSelectMovie, onSelectSeries }: CategoryPageProps) {
  const { movies, series } = useMovies()

  if (!category) {
    return (
      <main className="category-page">
        <button className="category-page__back" onClick={() => onNavigate('home')} type="button">← Volver al inicio</button>
        <p className="category-page__empty">No se seleccionó ninguna categoría.</p>
      </main>
    )
  }

  const categoryMovies = filterByCategory(movies, category)
  const categorySeries = filterByCategory(series, category)
  const total = categoryMovies.length + categorySeries.length

  return (
    <main className="category-page">
      <header className="category-page__header">
        <button className="category-page__back" onClick={() => onNavigate('home')} type="button">← Volver al inicio</button>
        <span className="category-page__eyebrow">Categoría</span>
        <h1>{category}</h1>
        <p>{total} {total === 1 ? 'título encontrado' : 'títulos encontrados'}</p>
      </header>

      {total === 0 && <p className="category-page__empty">Todavía no hay películas ni series en esta categoría.</p>}

      {categoryMovies.length > 0 && (
        <section className="category-page__section">
          <h2>Películas <span>{categoryMovies.length}</span></h2>
          <div className="category-page__grid">
            {categoryMovies.map((movie) => <CategoryCard item={movie} key={movie.id} label="Película" onSelect={onSelectMovie} />)}
          </div>
        </section>
      )}

      {categorySeries.length > 0 && (
        <section className="category-page__section">
          <h2>Series <span>{categorySeries.length}</span></h2>
          <div className="category-page__grid">
            {categorySeries.map((item) => <CategoryCard item={item} key={item.id} label="Serie" onSelect={onSelectSeries} />)}
          </div>
        </section>
      )}
    </main>
  )
}