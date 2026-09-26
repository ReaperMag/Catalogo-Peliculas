import { useState } from 'react'
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
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)
  const movie = movies.find((item) => item.id === movieId) ?? movies[0]
  const cast = movie.cast?.length
    ? movie.cast.map((person) => ({ ...person, actor: actors.find((actor) => actor.name === person.name) }))
    : actors.filter((actor) => actor.knownFor.includes(movie.title)).map((actor) => ({ name: actor.name, character: actor.nationality, actor }))
  const similarMovies = movies
    .filter((item) => item.id !== movie.id)
    .sort((first, second) => {
      const firstMatches = first.genres.filter((genre) => movie.genres.includes(genre)).length
      const secondMatches = second.genres.filter((genre) => movie.genres.includes(genre)).length
      return secondMatches - firstMatches
    })
  const voteCount = movie.ratingCount
    ? `${(movie.ratingCount / 1000).toFixed(1)}K votos`
    : 'Valoración del catálogo'

  return (
    <main className="movie-detail-page">
      <section className="movie-detail-hero" aria-labelledby="movie-title">
        <div className="movie-detail-hero__backdrop" aria-hidden="true" />
        <div className="movie-detail-hero__content">
          <div className="movie-detail__hero-labels">
            <span className="movie-detail__badge">Película · CineBase</span>
            {movie.rating >= 8.5 && <span className="movie-detail__trend"><span aria-hidden="true">↗</span> Selección destacada</span>}
          </div>
          <h1 id="movie-title">{movie.title}</h1>
          <p className="movie-detail__original">{movie.originalTitle ?? `${movie.title} (${movie.year})`}</p>
          <div className="movie-detail__meta" aria-label="Datos principales">
            <span>{movie.year}</span>
            {movie.certification && <span className="movie-detail__certification">{movie.certification}</span>}
            <span>{movie.duration}</span>
            <span>{movie.genres.join(' · ')}</span>
          </div>
          <div className="movie-detail-hero__bottom">
            <div className="movie-detail__score-cluster">
              <div className="movie-detail__rating" aria-label={`Valoración CineBase: ${movie.rating} de 10`}>
                <span className="movie-detail__rating-label">Rating CineBase</span>
                <span className="movie-detail__rating-score"><span aria-hidden="true">★</span> {movie.rating}<small>/10</small></span>
                <small className="movie-detail__vote-count">{voteCount}</small>
              </div>
              {movie.metascore && <div className="movie-detail__metascore"><span className="movie-detail__rating-label">Metascore</span><strong>{movie.metascore}</strong><small>Críticas favorables</small></div>}
            </div>
            <div className="movie-detail__actions">
              {movie.trailerUrl && <Button onClick={() => setIsTrailerOpen(true)}>▶ Ver tráiler oficial (4K)</Button>}
              <Button onClick={() => document.getElementById('movie-synopsis-title')?.scrollIntoView({ behavior: 'smooth' })}>Explorar ficha</Button>
              <Button onClick={() => toggleFavorite(movie.id)} variant="secondary">
                {isFavorite(movie.id) ? '♥ En favoritos' : '♡ Agregar a favoritos'}
              </Button>
              <Button onClick={() => onNavigate('movies')} variant="ghost">Volver al catálogo</Button>
            </div>
          </div>
        </div>
      </section>

      {movie.streamingPlatforms && movie.streamingPlatforms.length > 0 && (
        <div className="movie-detail-streaming"><div><span>Disponible para ver en:</span>{movie.streamingPlatforms.map((platform) => <strong key={platform}><b>{platform[0]}</b>{platform}</strong>)}</div></div>
      )}

      <div className="movie-detail-content">
        <div className="movie-detail-content__main">
          <section className="movie-detail-panel" aria-labelledby="movie-synopsis-title">
            <h2 id="movie-synopsis-title"><span aria-hidden="true" />Sinopsis</h2>
            <p className="movie-detail__synopsis">{movie.synopsis}</p>
            {movie.credits && movie.credits.length > 0 && <div className="movie-detail-credits">{movie.credits.map((credit) => <div key={credit.label}><span>{credit.label}</span><strong>{credit.name}</strong><small>{credit.detail}</small></div>)}</div>}
          </section>

          <section className="movie-detail-panel" aria-labelledby="movie-cast-title">
            <div className="movie-detail-panel__heading"><h2 id="movie-cast-title"><span aria-hidden="true" />Reparto principal</h2><span className="movie-detail__subtle">Personajes destacados</span></div>
            {cast.length > 0 ? <div className="movie-detail-cast">{cast.map((person) => <button className="movie-detail-cast__person" disabled={!person.actor} key={person.name} onClick={() => person.actor && onSelectActor(person.actor.id)} type="button"><span className="movie-detail-cast__avatar" aria-hidden="true">{person.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span><span><strong>{person.name}</strong><small>{person.character}</small></span>{person.actor && <span className="movie-detail-cast__arrow" aria-hidden="true">↗</span>}</button>)}</div> : <p className="movie-detail__empty">El reparto de esta película se agregará desde los datos del catálogo.</p>}
          </section>

          <section className="movie-detail-panel" aria-labelledby="movie-reviews-title">
            <div className="movie-detail-panel__heading"><div><h2 id="movie-reviews-title"><span aria-hidden="true" />Críticas de la comunidad</h2><p className="movie-detail__subtle">Valoraciones y opiniones sobre la película.</p></div>{movie.reviews && movie.reviews.length > 0 && <span className="movie-detail__review-cta">✎ Escribir una reseña</span>}</div>
            {movie.reviews && movie.reviews.length > 0 ? <div className="movie-detail-reviews">{movie.reviews.map((review) => <article className="movie-detail-review" key={review.author}><div className="movie-detail-review__top"><div><strong>{review.author}</strong><small>✓ Verificado · {review.role} · {review.date}</small></div><b>★ {review.rating}/10</b></div><h3>{review.title}</h3><p>{review.text}</p><small>👍 Útil ({review.helpful.toLocaleString('es-ES')})</small></article>)}</div> : <div className="movie-detail__empty movie-detail__empty--review"><strong>Sin críticas publicadas todavía</strong><span>La ficha ya está lista para mostrar las reseñas cuando se agreguen al JSON.</span></div>}
          </section>
        </div>

        <aside className="movie-detail-sidebar">
          <section className="movie-detail-panel" aria-labelledby="movie-facts-title">
            <h2 id="movie-facts-title"><span aria-hidden="true" />Ficha técnica</h2>
            <div className="movie-detail-sidebar__score"><span>Valoración CineBase</span><strong>★ {movie.rating}<small> / 10</small></strong><small>{voteCount}</small></div>
            <dl className="movie-detail-facts"><div><dt>Estreno</dt><dd>{movie.year}</dd></div>{movie.certification && <div><dt>Clasificación</dt><dd>{movie.certification}</dd></div>}<div><dt>Duración</dt><dd>{movie.duration}</dd></div><div><dt>Géneros</dt><dd>{movie.genres.join(' · ')}</dd></div></dl>
          </section>

          <section className="movie-detail-panel" aria-labelledby="movie-awards-title">
            <h2 id="movie-awards-title"><span aria-hidden="true" />Premios y distinciones</h2>
            {movie.awards && movie.awards.length > 0 ? <div className="movie-detail-awards">{movie.awards.map((award) => <article key={award.title}><strong>{award.count} 🏆</strong><div><b>{award.title}</b><small>{award.detail}</small></div></article>)}</div> : <p className="movie-detail__empty">Los premios se mostrarán cuando existan datos para esta película.</p>}
          </section>

          <section className="movie-detail-panel" aria-labelledby="movie-production-title">
            <h2 id="movie-production-title"><span aria-hidden="true" />Detalles de producción</h2>
            {movie.production && movie.production.length > 0 ? <dl className="movie-detail-facts">{movie.production.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl> : <div className="movie-detail-sidebar__note"><span aria-hidden="true">✦</span><p>Información cargada desde el catálogo de películas.</p></div>}
          </section>

          <section className="movie-detail-panel" aria-labelledby="movie-similar-title">
            <div className="movie-detail-panel__heading"><h2 id="movie-similar-title"><span aria-hidden="true" />Títulos similares</h2><span className="movie-detail__subtle">Explora más películas</span></div>
            <div className="movie-detail-similar">{similarMovies.slice(0, 3).map((similar) => <button className="movie-detail-similar__card" key={similar.id} onClick={() => onSelectMovie(similar.id)} type="button"><span className="movie-detail-similar__art" aria-hidden="true">{similar.title.slice(0, 1)}</span><span className="movie-detail-similar__info"><strong>{similar.title}</strong><small>{similar.year} · ★ {similar.rating}</small></span><span className="movie-detail-similar__arrow" aria-hidden="true">→</span></button>)}</div>
          </section>
        </aside>
      </div>
      {isTrailerOpen && movie.trailerUrl && <div className="movie-trailer-modal" onClick={() => setIsTrailerOpen(false)}><section aria-labelledby="movie-trailer-title" aria-modal="true" className="movie-trailer-modal__dialog" onClick={(event) => event.stopPropagation()} role="dialog"><header><h2 id="movie-trailer-title">Tráiler oficial · {movie.title}</h2><button aria-label="Cerrar tráiler" onClick={() => setIsTrailerOpen(false)} type="button">×</button></header><div className="movie-trailer-modal__player"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" src={`${movie.trailerUrl}?autoplay=1`} title={`Tráiler oficial de ${movie.title}`} /></div><p>Resolución disponible según el video oficial.</p><Button onClick={() => setIsTrailerOpen(false)} variant="secondary">Cerrar</Button></section></div>}
    </main>
  )
}
