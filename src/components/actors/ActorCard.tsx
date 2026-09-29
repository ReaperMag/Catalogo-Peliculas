import type { Actor } from '../../types/movie'
import { getMediaImage } from '../../lib/mediaImages'
import { Button } from '../common/Button'
import '../../styles/actors/ActorCard.css'

type ActorCardProps = {
  actor: Actor
  onViewProfile: (actorId: string) => void
}

export function ActorCard({
  actor,
  onViewProfile,
}: ActorCardProps) {
  const imageUrl = getMediaImage(actor.image)

  const initials = actor.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <article className="home-actor-card">
      <div className="home-actor-card__portrait">
        {imageUrl ? (
          <img
            alt={actor.name}
            src={imageUrl}
          />
        ) : (
          <span aria-hidden="true">
            {initials}
          </span>
        )}
      </div>

      <div className="home-actor-card__body">
        <span className="home-card-kicker">
          En tendencia
        </span>

        <h3>{actor.name}</h3>

        <p>
          {actor.nationality} · {actor.birthYear}
        </p>

        <Button
          onClick={() => onViewProfile(actor.id)}
          variant="secondary"
        >
          Ver perfil
        </Button>
      </div>
    </article>
  )
}