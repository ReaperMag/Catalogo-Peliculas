import { useRef } from 'react'
import type { Actor } from '../../types/movie'
import { ActorCard } from './ActorCard'
import '../../styles/actors/ActorCarousel.css'

type ActorCarouselProps = {
  actors: Actor[]
  onSelectActor: (actorId: string) => void
}

export function ActorCarousel({
  actors,
  onSelectActor,
}: ActorCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -340,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 340,
      behavior: 'smooth',
    })
  }

  return (
    <div className="actor-carousel-wrapper">
      <button
        className="actor-carousel-button actor-carousel-button--left"
        type="button"
        onClick={scrollLeft}
        aria-label="Actor anterior"
      >
        ‹
      </button>

      <div
        className="actor-carousel"
        ref={carouselRef}
      >
        {actors.map((actor) => (
          <div
            className="actor-carousel__item"
            key={actor.id}
          >
            <ActorCard
              actor={actor}
              onViewProfile={onSelectActor}
            />
          </div>
        ))}
      </div>

      <button
        className="actor-carousel-button actor-carousel-button--right"
        type="button"
        onClick={scrollRight}
        aria-label="Actor siguiente"
      >
        ›
      </button>
    </div>
  )
}