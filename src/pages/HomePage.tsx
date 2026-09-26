import { Button } from '../components/common/Button'
import { MovieCard } from '../components/molecules/MovieCard'
import { useMovies } from '../contexts/MoviesContext'
import type { PageKey } from '../types/movie'

type HomePageProps = {
  onNavigate: (page: PageKey) => void
  onSelectMovie: (movieId: string) => void
  onSelectSeries: (seriesId: string) => void
  onSelectActor: (actorId: string) => void
}

export function HomePage({ onNavigate, onSelectMovie, onSelectSeries, onSelectActor }: HomePageProps) {
  const { actors, featuredMovie, isFavorite, movies, series, toggleFavorite } = useMovies()

  return (
    <main>
      <section className="hero-section">
        <div className="hero-section__content">
          <span className="eyebrow">Plantilla de inicio</span>
          <h1>{featuredMovie.title}</h1>
          <p>{featuredMovie.synopsis}</p>
          <div className="hero-section__actions">
            <Button onClick={() => onSelectMovie(featuredMovie.id)}>Ver película</Button>
            <Button onClick={() => onNavigate('movies')} variant="secondary">Ver catálogo</Button>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading"><span className="eyebrow">Plantillas base</span><h2>Películas</h2></div>
        <div className="movie-grid">
          {movies.map((movie) => <MovieCard isFavorite={isFavorite(movie.id)} key={movie.id} movie={movie} onToggleFavorite={toggleFavorite} onViewDetail={onSelectMovie} />)}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading"><span className="eyebrow">Plantilla base</span><h2>Series</h2></div>
        <div className="template-list">
          {series.map((item) => <article className="template-card" key={item.id}><div><h3>{item.title}</h3><p>{item.year} · {item.seasons} temporadas · {item.genres.join(', ')}</p></div><Button onClick={() => onSelectSeries(item.id)} variant="secondary">Ver serie</Button></article>)}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading"><span className="eyebrow">Plantilla base</span><h2>Actores</h2></div>
        <div className="template-list">
          {actors.map((actor) => <article className="template-card" key={actor.id}><div><h3>{actor.name}</h3><p>{actor.nationality} · {actor.birthYear}</p></div><Button onClick={() => onSelectActor(actor.id)} variant="secondary">Ver perfil</Button></article>)}
        </div>
      </section>
    </main>
  )
}
