import { Button } from '../components/common/Button'
import { useMovies } from '../contexts/MoviesContext'
import { getMediaImage } from '../lib/mediaImages'
import type { PageKey } from '../types/movie'
import '../styles/actors/ActorDetailPage.css'

type ActorDetailPageProps = {
  actorId: string | null
  onNavigate: (page: PageKey) => void
}

export function ActorDetailPage({
  actorId,
  onNavigate,
}: ActorDetailPageProps) {
  const { actors } = useMovies()

  const actor =
    actors.find((entry) => entry.id === actorId) ?? actors[0]

  if (!actor) {
    return (
      <main className="actor-detail-page">
        <section className="actor-detail-empty">
          <h1>Actor no encontrado</h1>

          <Button
            onClick={() => onNavigate('home')}
            variant="secondary"
          >
            Volver al inicio
          </Button>
        </section>
      </main>
    )
  }

  const imageUrl = getMediaImage(actor.image)

  const initials = actor.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <main className="actor-detail-page">

      <section className="actor-detail">
        <div className="actor-detail__portrait">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={actor.name}
            />
          ) : (
            <span aria-hidden="true">
              {initials}
            </span>
          )}
        </div>

        <div className="actor-detail__content">
          <span className="actor-detail__eyebrow">
            Perfil del actor
          </span>

          <h1>{actor.name}</h1>

          <div className="actor-detail__meta">
            <span>{actor.nationality}</span>

            {actor.occupation && (
              <span>{actor.occupation}</span>
            )}

            <span>
              Nacimiento: {actor.birthYear}
            </span>

            {actor.birthDate && (
              <span>{actor.birthDate}</span>
            )}

            {actor.birthPlace && (
              <span>{actor.birthPlace}</span>
            )}
          </div>

          <div className="actor-detail__section">
            <h2>Biografía</h2>
            <p>{actor.biography}</p>
          </div>

          <div className="actor-detail__section">
            <h2>Conocido por</h2>

            <div className="actor-detail__known-for">
              {actor.knownFor.map((title) => (
                <span key={title}>
                  {title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {actor.filmography && actor.filmography.length > 0 && (
        <section className="actor-filmography">
          <h2>Filmografía destacada</h2>

          <div className="actor-filmography__table">
            <div className="actor-filmography__header">
              <span>Año</span>
              <span>Título y personaje</span>
              <span>Tipo</span>
              <span>CineBase</span>
            </div>

            {actor.filmography.map((work, index) => (
              <div
                className="actor-filmography__row"
                key={`${work.title}-${work.year}-${index}`}
              >
                <span className="actor-filmography__year">
                  {work.year}
                </span>

                <div className="actor-filmography__work">
                  <strong>{work.title}</strong>
                  <span>como {work.character}</span>
                </div>

                <span className="actor-filmography__type">
                  {work.type}
                </span>

                <span className="actor-filmography__rating">
                  {work.rating != null
                    ? `★ ${work.rating.toFixed(1)}`
                    : 'Sin valoración'}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="actor-detail__actions">
        <Button
          onClick={() => onNavigate('home')}
          variant="secondary"
        >
          Volver al inicio
        </Button>
      </div>

    </main>
  )
}