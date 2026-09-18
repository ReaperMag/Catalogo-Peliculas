import { Button } from '../components/common/Button'
import { useMovies } from '../contexts/MoviesContext'
import type { PageKey } from '../types/movie'

type MovieDetailPageProps = {
  movieId: string | null
  onNavigate: (page: PageKey) => void
}

export function MovieDetailPage({ movieId, onNavigate }: MovieDetailPageProps) {
  const { isFavorite, movies, toggleFavorite } = useMovies()
  const movie = movies.find((item) => item.id === movieId) ?? movies[0]

  return (
    <main className="detail-page">
      <img src={movie.posterUrl} alt={`Poster de ${movie.title}`} />

      <section>
        <span className="eyebrow">Ficha tecnica base</span>
        <h1>{movie.title}</h1>
        <div className="detail-meta">
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span>Rating {movie.rating}</span>
        </div>
        <p>{movie.synopsis}</p>

        <div className="genre-list">
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>

        <div className="hero-section__actions">
          <Button onClick={() => toggleFavorite(movie.id)}>{isFavorite(movie.id) ? 'Quitar favorito' : 'Agregar favorito'}</Button>
          <Button onClick={() => onNavigate('movies')} variant="secondary">
            Volver al catalogo
          </Button>
        </div>
      </section>
    </main>
  )
}
