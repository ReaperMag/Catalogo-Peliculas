import { Button } from '../components/common/Button'
import { useMovies } from '../contexts/MoviesContext'
import type { PageKey } from '../types/movie'

type MovieDetailPageProps = {
  movieId: string | null
  onNavigate: (page: PageKey) => void
  onSelectMovie: (movieId: string) => void
  onSelectActor: (actorId: string) => void
}

export function MovieDetailPage({ movieId, onNavigate, onSelectActor, onSelectMovie }: MovieDetailPageProps) {
  const { actors, isFavorite, movies, toggleFavorite } = useMovies()
  const movie = movies.find((item) => item.id === movieId) ?? movies[0]
  const cast = actors.filter((actor) => actor.knownFor.includes(movie.title))
  const similarMovies = movies.filter((item) => item.id !== movie.id)

  return (
    <main className="movie-detail-page">
      <section className="movie-detail-hero" aria-labelledby="movie-title">
        <div className="movie-detail-hero__backdrop" aria-hidden="true" />
        <div className="movie-detail-hero__content">
          <span className="movie-detail__badge">Película · CineBase</span>
          <h1 id="movie-title">{movie.title}</h1>
          <div className="movie-detail__meta" aria-label="Datos principales">
            <span>{movie.year}</span><span aria-hidden="true">•</span>
            <span>{movie.duration}</span><span aria-hidden="true">•</span>
            <span>{movie.genres.join(' · ')}</span>
          </div>
          <div className="movie-detail-hero__bottom">
            <div className="movie-detail__rating" aria-label={`Valoración CineBase: ${movie.rating} de 10`}>
              <span className="movie-detail__rating-label">Rating CineBase</span>
              <span className="movie-detail__rating-score"><span aria-hidden="true">★</span> {movie.rating}<small>/10</small></span>
            </div>
            <div className="movie-detail__actions">
              <Button onClick={() => toggleFavorite(movie.id)}>
                {isFavorite(movie.id) ? '♥ En favoritos' : '♡ Agregar a favoritos'}
              </Button>
              <Button onClick={() => onNavigate('movies')} variant="secondary">Volver al catálogo</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="movie-detail-content">
        <div className="movie-detail-content__main">
          <section className="movie-detail-panel" aria-labelledby="movie-synopsis-title">
            <h2 id="movie-synopsis-title"><span aria-hidden="true" />Sinopsis</h2>
            <p className="movie-detail__synopsis">{movie.synopsis}</p>
            <dl className="movie-detail-specs">
              <div><dt>Año de estreno</dt><dd>{movie.year}</dd></div>
              <div><dt>Duración</dt><dd>{movie.duration}</dd></div>
              <div><dt>Géneros</dt><dd>{movie.genres.join(', ')}</dd></div>
            </dl>
          </section>

          <section className="movie-detail-panel" aria-labelledby="movie-cast-title">
            <div className="movie-detail-panel__heading">
              <h2 id="movie-cast-title"><span aria-hidden="true" />Reparto relacionado</h2>
              <span className="movie-detail__subtle">Desde el catálogo de actores</span>
            </div>
            {cast.length > 0 ? (
              <div className="movie-detail-cast">
                {cast.map((actor) => (
                  <button className="movie-detail-cast__person" key={actor.id} onClick={() => onSelectActor(actor.id)} type="button">
                    <span className="movie-detail-cast__avatar" aria-hidden="true">{actor.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
                    <span><strong>{actor.name}</strong><small>{actor.nationality}</small></span>
                    <span className="movie-detail-cast__arrow" aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            ) : <p className="movie-detail__subtle">Aún no hay actores vinculados a esta película.</p>}
          </section>

          <section className="movie-detail-panel" aria-labelledby="movie-similar-title">
            <div className="movie-detail-panel__heading">
              <h2 id="movie-similar-title"><span aria-hidden="true" />Títulos similares</h2>
              <span className="movie-detail__subtle">Explora más películas</span>
            </div>
            <div className="movie-detail-similar">
              {similarMovies.map((item) => (
                <button className="movie-detail-similar__card" key={item.id} onClick={() => onSelectMovie(item.id)} type="button">
                  <span className="movie-detail-similar__art" aria-hidden="true">{item.title.slice(0, 1)}</span>
                  <span className="movie-detail-similar__info"><strong>{item.title}</strong><small>{item.year} · ★ {item.rating}</small></span>
                  <span className="movie-detail-similar__arrow" aria-hidden="true">→</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        <aside className="movie-detail-panel movie-detail-sidebar" aria-labelledby="movie-facts-title">
          <h2 id="movie-facts-title"><span aria-hidden="true" />Ficha técnica</h2>
          <div className="movie-detail-sidebar__score"><span>Valoración</span><strong>★ {movie.rating}<small> / 10</small></strong></div>
          <dl className="movie-detail-facts">
            <div><dt>Estreno</dt><dd>{movie.year}</dd></div>
            <div><dt>Duración</dt><dd>{movie.duration}</dd></div>
            <div><dt>Géneros</dt><dd>{movie.genres.join(' · ')}</dd></div>
          </dl>
          <div className="movie-detail-sidebar__note"><span aria-hidden="true">✦</span><p>Información cargada desde el catálogo de películas.</p></div>
        </aside>
      </div>
    </main>
  )
}
