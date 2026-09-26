import { Button } from '../common/Button'
import type { Movie } from '../../types/movie'

type MovieCardProps = {
  movie: Movie
  onViewDetail: (movieId: string) => void
}

export function MovieCard({ movie, onViewDetail }: MovieCardProps) {
  return (
    <article className="movie-card">

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
        </div>
      </div>
    </article>
  )
}
