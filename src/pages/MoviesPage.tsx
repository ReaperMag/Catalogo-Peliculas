import { PlaceholderSection } from '../components/common/PlaceholderSection'
import { FilterChip } from '../components/molecules/FilterChip'
import { MovieCard } from '../components/molecules/MovieCard'
import { useMovies } from '../contexts/MoviesContext'

type MoviesPageProps = {
  onSelectMovie: (movieId: string) => void
}

export function MoviesPage({ onSelectMovie }: MoviesPageProps) {
  const { isFavorite, movies, toggleFavorite } = useMovies()

  return (
    <main className="page-stack">
      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Catalogo</span>
          <h1>Peliculas</h1>
          <p>Vista base para filtros, paginacion y tarjetas reutilizables.</p>
        </div>

        <div className="filter-row" aria-label="Filtros pendientes">
          <FilterChip active label="Todas" />
          <FilterChip label="Accion" />
          <FilterChip label="Drama" />
          <FilterChip label="Sci-Fi" />
        </div>

        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              isFavorite={isFavorite(movie.id)}
              key={movie.id}
              movie={movie}
              onToggleFavorite={toggleFavorite}
              onViewDetail={onSelectMovie}
            />
          ))}
        </div>
      </section>

      <PlaceholderSection
        description="Aqui pueden entrar paginacion, filtros avanzados o carga desde JSON mas grande."
        slots={['Pagination', 'GenreFilter', 'RatingFilter']}
        title="Espacios para features del equipo"
      />
    </main>
  )
}
