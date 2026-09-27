import { MovieCard } from '../components/molecules/MovieCard'
import { MoviePosterCard } from '../components/molecules/MoviePosterCard'
import { useMovies } from '../contexts/MoviesContext'

type MoviesPageProps = {
  selectedCategory: string | null
  onSelectMovie: (movieId: string) => void
}

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export function MoviesPage({ selectedCategory, onSelectMovie }: MoviesPageProps) {
  const { movies } = useMovies()
  const visibleMovies = selectedCategory
    ? movies.filter((movie) => movie.collections?.some((category) => normalize(category) === normalize(selectedCategory)))
    : movies

  return (
    <main className="page-stack">
      <section className={selectedCategory ? 'content-section content-section--category' : 'content-section'}>
        <div className="section-heading">
          <span className="eyebrow">{selectedCategory ? 'Categoría' : 'Catálogo'}</span>
          <h1>{selectedCategory ?? 'Películas'}</h1>
          <p>{selectedCategory ? `Películas disponibles en ${selectedCategory}.` : 'Listado de películas del catálogo.'}</p>
        </div>

        {selectedCategory ? (
          <div className="movie-poster-grid">
            {visibleMovies.map((movie) => <MoviePosterCard key={movie.id} movie={movie} onSelect={onSelectMovie} />)}
          </div>
        ) : (
          <div className="movie-grid">
            {visibleMovies.map((movie) => <MovieCard key={movie.id} movie={movie} onViewDetail={onSelectMovie} />)}
          </div>
        )}
        {visibleMovies.length === 0 && <p className="empty-state">Todavía no hay películas en esta categoría.</p>}
      </section>
    </main>
  )
}
