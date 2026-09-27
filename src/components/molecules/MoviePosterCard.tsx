import { getMediaImage } from '../../lib/mediaImages'
import type { Movie } from '../../types/movie'

type MoviePosterCardProps = {
  movie: Movie
  onSelect: (movieId: string) => void
}

export function MoviePosterCard({ movie, onSelect }: MoviePosterCardProps) {
  const imageUrl = getMediaImage(movie.image)

  return (
    <button className="movie-poster-card" onClick={() => onSelect(movie.id)} type="button">
      <span className="movie-poster-card__art">
        {imageUrl ? <img src={imageUrl} alt={`Póster de ${movie.title}`} /> : <span aria-hidden="true">{movie.title.slice(0, 1)}</span>}
        <span className="movie-poster-card__year">{movie.year}</span>
      </span>
      <span className="movie-poster-card__title">{movie.title}</span>
    </button>
  )
}
