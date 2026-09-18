import { Button } from '../components/common/Button'
import { MovieCard } from '../components/molecules/MovieCard'
import { useMovies } from '../contexts/MoviesContext'
import type { PageKey } from '../types/movie'

type HomePageProps = {
  onNavigate: (page: PageKey) => void
  onSelectMovie: (movieId: string) => void
}

export function HomePage({ onNavigate, onSelectMovie }: HomePageProps) {
  const { featuredMovie, isFavorite, movies, toggleFavorite } = useMovies()

  return (
    <>
      <section className="hero-section">
        <div className="hero-section__content">
          <span className="eyebrow">Catalogo local</span>
          <h1>{featuredMovie.title}</h1>
          <p>{featuredMovie.synopsis}</p>

          <div className="hero-section__actions">
            <Button onClick={() => onSelectMovie(featuredMovie.id)}>Ver destacada</Button>
            <Button onClick={() => onNavigate('movies')} variant="secondary">
              Explorar base
            </Button>
          </div>
        </div>
        <img src={featuredMovie.posterUrl} alt={`Imagen destacada de ${featuredMovie.title}`} />
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Primeros datos</span>
          <h2>Peliculas para reemplazar o ampliar</h2>
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
    </>
  )
}
