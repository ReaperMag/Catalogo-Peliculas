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
          <p>Listado inicial conectado a los datos del catálogo.</p>
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
    </main>
  )
}
