import { useMovies } from '../contexts/MoviesContext'
import { Button } from '../components/common/Button'
import { getMediaImage } from '../lib/mediaImages'
type MovieDetailPageProps = {
  movieId: string | null
  onBack: () => void
}

export function MovieDetailPage({
  movieId,
  onBack,
}: MovieDetailPageProps) {
  const { movies } = useMovies()

  const movie = movies.find((item) => item.id === movieId) ?? movies[0]

  if (!movie) {
    return <main className="cinema-detail"><p className="cinema-detail__empty">No hay películas en el catálogo.</p></main>
  }

  const imageUrl = getMediaImage(movie.image)


  return (
    <main className="cinema-detail">

      {/* ENCABEZADO PRINCIPAL */}
      <section className="cinema-detail__hero">
        <div className="cinema-detail__overlay" />

        <div className="cinema-detail__hero-content">

        <div className="cinema-detail__poster-column">
        {imageUrl && (
        <img
        className="cinema-detail__poster"
        src={imageUrl}
        alt={`Poster de ${movie.title}`}
        />
        )}
        </div>

          <div className="cinema-detail__main-info">

            <div className="cinema-detail__kicker">
              <span>PELÍCULA OFICIAL</span>
              <span>• {movie.year}</span>
              <span>• {movie.duration}</span>

              {movie.certification && (
                <span>• {movie.certification}</span>
              )}

              <span>• {movie.genres.join(' / ')}</span>
            </div>

            <h1>{movie.title}</h1>

            {movie.tagline && (
              <p className="cinema-detail__tagline">
                “{movie.tagline}”
              </p>
            )}

            <div className="cinema-detail__credits">

              {movie.director && (
                <div>
                  <span>DIRECCIÓN</span>
                  <strong>{movie.director}</strong>
                </div>
              )}

              {movie.writers && (
                <div>
                  <span>GUION</span>
                  <strong>{movie.writers.join(', ')}</strong>
                </div>
              )}

              <div>
                <span>MÚSICA</span>
                <strong>{movie.music ?? 'Sin registrar'}</strong>
              </div>

            </div>

            <div className="cinema-detail__stats">

              <article>
                <span>★ RATING</span>
                <strong>{movie.rating}/10</strong>
              </article>

              {movie.metascore != null && (
                <article>
                  <span>▣ PUNTUACION</span>
                  <strong className="cinema-detail__metascore">
                    {movie.metascore}
                  </strong>
                </article>
              )}

              <article>
                <span>RECAUDACIÓN MUNDIAL</span>
                <strong>{movie.boxOffice ?? 'Sin datos'}</strong>
              </article>

            </div>

            {movie.trailerUrl && (
              <a
                className="cinema-detail__trailer"
                href={movie.trailerUrl}
                target="_blank"
                rel="noreferrer"
              >
                ▶ Ver Tráiler Oficial
              </a>
            )}

          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="cinema-detail__layout">

        <div className="cinema-detail__left">

          {/* SINOPSIS */}
          <section className="cinema-detail__section">
            <h2>Sinopsis de la Película</h2>

            <div className="cinema-detail__panel">
              <p>{movie.synopsis}</p>
            </div>
          </section>

          {/* REPARTO */}
          {movie.cast && movie.cast.length > 0 && (
            <section className="cinema-detail__section">
              <h2>Reparto Principal & Personajes</h2>

              <div className="cinema-detail__cast">
                {movie.cast.map((actor) => (
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

          {/* CRÍTICAS */}
          {movie.reviews && movie.reviews.length > 0 && (
            <section className="cinema-detail__section">
              <h2>
                Críticas de la Comunidad & Prensa Especializada
              </h2>

              <div className="cinema-detail__rating-summary">
                <strong>{movie.rating}</strong>
                <span>★ ★ ★ ★ ★</span>
                <small>Valoración CineBase</small>
              </div>

              <div className="cinema-detail__reviews">
                {movie.reviews.map((review) => (
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

        {/* SIDEBAR */}
        <aside className="cinema-detail__sidebar">

          {movie.awards && movie.awards.length > 0 && (
            <section className="cinema-detail__side-panel">
              <h3> Premios & Distinciones</h3>

              {movie.awards.map((award) => (
                <p key={award}>{award}</p>
              ))}
            </section>
          )}

          <section className="cinema-detail__side-panel">
            <h3> Ficha Técnica Cinematográfica</h3>

            <dl>
              {movie.productionCompanies && (
                <>
                  <dt>Compañías productoras</dt>
                  <dd>{movie.productionCompanies.join(', ')}</dd>
                </>
              )}

              {movie.cinematography && (
                <>
                  <dt>Director de fotografía</dt>
                  <dd>{movie.cinematography}</dd>
                </>
              )}

              {movie.editing && (
                <>
                  <dt>Montaje / Edición</dt>
                  <dd>{movie.editing}</dd>
                </>
              )}

              {movie.music && (
                <>
                  <dt>Música original</dt>
                  <dd>{movie.music}</dd>
                </>
              )}

              {movie.country && (
                <>
                  <dt>País de origen</dt>
                  <dd>{movie.country}</dd>
                </>
              )}

              {movie.language && (
                <>
                  <dt>Idioma original</dt>
                  <dd>{movie.language}</dd>
                </>
              )}
            </dl>
          </section>

          {movie.trivia && movie.trivia.length > 0 && (
            <section className="cinema-detail__side-panel">
              <h3> Trivia & Curiosidades</h3>

              {movie.trivia.map((item) => (
                <article
                  className="cinema-detail__trivia"
                  key={item.title}
                >
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </section>
          )}

        </aside>

      </div>

      <div className="cinema-detail__back">
        <Button
          onClick={onBack}
          variant="secondary"
        >
          ← Volver al catálogo
        </Button>
      </div>

    </main>
  )
}
