import { useRef } from 'react'
import type { Series } from '../../types/movie'
import { SeriesCard } from './SeriesCard'

type PopularSeriesCarouselProps = {
  series: Series[]
  onSelectSeries: (seriesId: string) => void
}

export function PopularSeriesCarousel({ series, onSelectSeries }: PopularSeriesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({ left: direction * 420, behavior: 'smooth' })
  }

  return (
    <div aria-label="Series populares" className="home-movie-carousel home-series-carousel">
      <button aria-label="Series anteriores" className="home-carousel-button" onClick={() => scroll(-1)} type="button">‹</button>
      <div className="home-movie-carousel__track home-series-carousel__track" ref={trackRef}>
        {series.map((item) => (
          <div className="home-movie-carousel__item home-series-carousel__item" key={item.id}>
            <SeriesCard onViewSeries={onSelectSeries} series={item} />
          </div>
        ))}
      </div>
      <button aria-label="Series siguientes" className="home-carousel-button" onClick={() => scroll(1)} type="button">›</button>
    </div>
  )
}