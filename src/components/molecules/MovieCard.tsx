import { Button } from '../common/Button'
import type { Movie } from '../../types/movie'

type MovieCardProps = {
  movie: Movie
  isFavorite: boolean
  onToggleFavorite: (movieId: string) => void
  onViewDetail: (movieId: string) => void
}

export function MovieCard({ isFavorite, movie, onToggleFavorite, onViewDetail }: MovieCardProps) {
  return (
    <article className="movie-card">
      <img src={movie.posterUrl} alt={`Poster de ${movie.title}`} />

      <div className="movie-card__body">
        <div className="movie-card__meta">
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
        </div>
        <h3>{movie.title}</h3>
        <p>{movie.synopsis}</p>
        <strong aria-label={`Rating ${movie.rating}`}>Rating {movie.rating}</strong>

        <div className="movie-card__actions">
          <Button onClick={() => onViewDetail(movie.id)} variant="secondary">
            Ver ficha
          </Button>
          <Button onClick={() => onToggleFavorite(movie.id)} variant="ghost">
            {isFavorite ? 'Quitar' : 'Favorito'}
          </Button>
        </div>
      </div>
    </article>
  )
}
