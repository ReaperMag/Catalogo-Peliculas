import { Button } from '../components/common/Button'
import { useMovies } from '../contexts/useMovies'
import { getMediaImage } from '../lib/mediaImages'
import type { PageKey } from '../types/movie'

type SeriesDetailPageProps = { seriesId: string | null; onNavigate: (page: PageKey) => void }

export function SeriesDetailPage({ seriesId, onNavigate }: SeriesDetailPageProps) {
  const { series } = useMovies()
  const item = series.find((entry) => entry.id === seriesId) ?? series[0]
  const imageUrl = getMediaImage(item.image)
  const episodeCount = item.seasonDetails?.reduce(
    (total, season) => total + season.episodes,
    0,
  ) ?? item.episodes ?? 0
  return (
    <main className="cinema-detail">
      <section
        className="cinema-detail__hero"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
      >
        <div className="cinema-detail__overlay" />
        <div className="cinema-detail__hero-content">
          <div className="cinema-detail__poster-column">
            {imageUrl ? (
              <img className="cinema-detail__poster" src={imageUrl} alt={`Póster de ${item.title}`} />
            ) : (
              <>
                <span>Serie</span>
                <strong>{item.title}</strong>
              </>
            )}
          </div>

          <div className="cinema-detail__main-info">
            <div className="cinema-detail__kicker">
              <span>SERIE</span>
              <span>• {item.year}{item.endYear ? `-${item.endYear}` : ''}</span>
              <span>• {item.seasons} {item.seasons === 1 ? 'temporada' : 'temporadas'}</span>
              {item.episodes != null && <span>• {item.episodes} episodios</span>}
              {item.certification && <span>• {item.certification}</span>}
              <span>• {item.genres.join(' / ')}</span>
            </div>

            <h1>{item.title}</h1>
            {item.originalTitle && item.originalTitle !== item.title && (
              <p className="cinema-detail__tagline">Título original: {item.originalTitle}</p>
            )}
            {item.tagline && <p className="cinema-detail__tagline">“{item.tagline}”</p>}

            {(item.creators || item.writers || item.music) && (
              <div className="cinema-detail__credits">
              {item.creators && (
                <div>
                  <span>CREACIÓN</span>
                  <strong>{item.creators.join(', ')}</strong>
                </div>
              )}
              {item.writers && (
                <div>
                  <span>GUION</span>
                  <strong>{item.writers.join(', ')}</strong>
                </div>
              )}
              {item.music && (
                <div>
                  <span>MÚSICA</span>
                  <strong>{item.music}</strong>
                </div>
              )}
              </div>
            )}

            <div className="cinema-detail__stats">
              <article>
                <span>★ VALORACIÓN</span>
                <strong>{item.rating}/10</strong>
              </article>
              {item.metascore != null && (
                <article>
                  <span>METASCORE</span>
                  <strong className="cinema-detail__metascore">{item.metascore}</strong>
                </article>
              )}
              <article>
                <span>ESTADO</span>
                <strong>{item.status ?? 'Sin datos'}</strong>
              </article>
              <article>
                <span>DURACIÓN POR EPISODIO</span>
                <strong>{item.episodeDuration ?? 'Sin datos'}</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="cinema-detail__layout">
        <div className="cinema-detail__left">
          <section className="cinema-detail__section">
            <h2>Sinopsis</h2>
            <div className="cinema-detail__panel"><p>{item.synopsis}</p></div>
          </section>

          {item.seasonDetails && item.seasonDetails.length > 0 && (
            <section className="cinema-detail__section series-episode-guide">
              <header className="series-episode-guide__heading">
                <div>
                  <h2>Guía de episodios</h2>
                  <p>
                    {episodeCount} episodios
                    {item.status && <> · {item.status}</>}
                  </p>
                </div>
              </header>

              <div className="series-episode-guide__seasons">
                {item.seasonDetails.map((season) => (
                  <details className="series-season" id={`series-season-${season.season}`} key={season.season}>
                    <summary className="series-season__heading">
                      <div>
                        <h3>Temporada {season.season}</h3>
                        <span>{season.episodes} episodios · {season.year}</span>
                      </div>
                    </summary>

                    {(season.trailerUrl || (season.season === 1 ? item.trailerUrl : undefined)) && (
                      <div className="series-season__actions">
                        <a
                          className="series-trailer-button"
                          href={season.trailerUrl ?? item.trailerUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Ver tráiler de la temporada ${season.season} de ${item.title} en YouTube`}
                        >
                          ▶ Ver tráiler de temporada
                        </a>
                      </div>
                    )}

                    {season.episodeDetails && season.episodeDetails.length > 0 ? (
                      <div className="series-episode-list">
                          {season.episodeDetails.map((episode) => {
                            const episodeImage = getMediaImage(episode.image ?? item.image)
                            const episodeMeta = [
                              episode.director && `Dir: ${episode.director}`,
                              episode.location,
                            ].filter(Boolean)

                            return (
                              <article
                                className="series-episode"
                                id={`series-episode-${season.season}-${episode.number}`}
                                key={episode.number}
                              >
                                <div className="series-episode__image">
                                  {episodeImage ? (
                                    <img src={episodeImage} alt={`Imagen del episodio ${episode.number}: ${episode.title}`} />
                                  ) : (
                                    <span aria-label={`Episodio ${episode.number}`}>
                                      E{String(episode.number).padStart(2, '0')}
                                    </span>
                                  )}
                                  {episode.duration && <small>{episode.duration}</small>}
                                </div>
                                <div className="series-episode__body">
                                  <div className="series-episode__title-row">
                                    <div>
                                      <h4>{episode.number}. {episode.title}</h4>
                                      {episode.airDate && <time>{episode.airDate}</time>}
                                    </div>
                                    <strong className="series-episode__rating">
                                      ★ {episode.rating?.toFixed(1) ?? '—'}
                                    </strong>
                                  </div>
                                  {episode.synopsis && <p>{episode.synopsis}</p>}
                                  {episodeMeta.length > 0 && (
                                    <div className="series-episode__meta">
                                      {episodeMeta.map((value) => <span key={value}>{value}</span>)}
                                    </div>
                                  )}
                                </div>
                              </article>
                            )
                          })}
                      </div>
                    ) : (
                      <p className="series-season__empty">Todavía no hay episodios detallados para esta temporada.</p>
                    )}
                  </details>
                ))}
              </div>
            </section>
          )}

          {item.cast && item.cast.length > 0 && (
            <section className="cinema-detail__section">
              <h2>Reparto principal</h2>
              <div className="cinema-detail__cast">
                {item.cast.map((actor) => (
                  <article key={actor.name}>
                    <div>
                      <strong>{actor.name}</strong>
                      <span>{actor.character}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {item.reviews && item.reviews.length > 0 && (
            <section className="cinema-detail__section">
              <h2>Opinión de la comunidad</h2>
              <div className="cinema-detail__rating-summary">
                <strong>{item.rating}</strong>
                <span>★ ★ ★ ★ ★</span>
                <small>Valoración general</small>
              </div>
              <div className="cinema-detail__reviews">
                {item.reviews.map((review) => (
                  <article key={`${review.author}-${review.score}`}>
                    <div className="cinema-detail__review-heading">
                      <div>
                        <strong>{review.author}</strong>
                        <span>{review.source}</span>
                      </div>
                      <strong>{review.score}</strong>
                    </div>
                    <p>{review.text}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="cinema-detail__sidebar">
          {item.awards && item.awards.length > 0 && (
            <section className="cinema-detail__side-panel">
              <h3>Premios y distinciones</h3>
              {item.awards.map((award) => <p key={award}>{award}</p>)}
            </section>
          )}

          <section className="cinema-detail__side-panel">
            <h3>Ficha técnica</h3>
            <dl>
              {item.status && <><dt>Estado</dt><dd>{item.status}</dd></>}
              {item.endYear && <><dt>Año de finalización</dt><dd>{item.endYear}</dd></>}
              {item.directors && <><dt>Dirección</dt><dd>{item.directors.join(', ')}</dd></>}
              {item.productionCompanies && <><dt>Productoras</dt><dd>{item.productionCompanies.join(', ')}</dd></>}
              {item.streamingPlatforms && <><dt>Plataforma</dt><dd>{item.streamingPlatforms.join(', ')}</dd></>}
              {item.country && <><dt>País</dt><dd>{item.country}</dd></>}
              {item.language && <><dt>Idioma original</dt><dd>{item.language}</dd></>}
            </dl>
          </section>

          {item.trivia && item.trivia.length > 0 && (
            <section className="cinema-detail__side-panel">
              <h3>Curiosidades</h3>
              {item.trivia.map((fact) => (
                <article className="cinema-detail__trivia" key={fact.title}>
                  <strong>{fact.title}</strong>
                  <p>{fact.text}</p>
                </article>
              ))}
            </section>
          )}
        </aside>
      </div>

      <div className="cinema-detail__back">
        <Button onClick={() => onNavigate('home')} variant="secondary">Volver al inicio</Button>
      </div>
    </main>
  )
}
