import { Button } from '../common/Button'
import { getMediaImage } from '../../lib/mediaImages'
import type { Movie } from '../../types/movie'

type MovieCardProps = {
  movie: Movie
  onViewDetail: (movieId: string) => void
}

export function MovieCard({ movie, onViewDetail }: MovieCardProps) {
  const imageUrl = getMediaImage(movie.image)
  return (
    <article className="movie-card">
      {imageUrl && <img className="movie-card__poster" src={imageUrl} alt={`Póster de ${movie.title}`} />}

      <div className="movie-card__body">
        <div className="movie-card__meta">
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
        </div>
        <h3>{movie.title}</h3>
        <p>{movie.synopsis}</p>
        <strong aria-label={`Puntuación ${movie.rating}`}>Puntuación {movie.rating.toFixed(1)}/10</strong>

        <div className="movie-card__actions">
          <Button onClick={() => onViewDetail(movie.id)} variant="secondary">
            Ver ficha
          </Button>
        </div>
      </div>
    </article>
  )
}
