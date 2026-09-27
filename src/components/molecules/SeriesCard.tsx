import type { Series } from '../../types/movie'
import { getMediaImage } from '../../lib/mediaImages'
import { Button } from '../common/Button'

type SeriesCardProps = { series: Series; onViewSeries: (seriesId: string) => void; featured?: boolean }

export function SeriesCard({ featured = false, onViewSeries, series }: SeriesCardProps) {
  const imageUrl = getMediaImage(series.image)
  const className = featured ? 'home-series-card home-series-card--featured' : 'home-series-card'

  return (
    <article className={className}>
      <div className="home-series-card__art">{imageUrl ? <img alt={series.title} src={imageUrl} /> : <span aria-hidden="true">{series.title.slice(0, 1)}</span>}<span className="home-series-card__rating">★ {series.rating}</span></div>
      <div className="home-series-card__body">
        <span className="home-card-kicker">{featured ? 'Serie destacada del mes' : `${series.year} · ${series.seasons} temporadas`}</span>
        <h3>{series.title}</h3>
        {featured ? <><p>{series.synopsis}</p><div className="home-series-card__genres">{series.genres.map((genre) => <span key={genre}>{genre}</span>)}</div></> : <p className="home-series-card__plain-genres">{series.genres.join(' · ')}</p>}
        <Button onClick={() => onViewSeries(series.id)} variant="secondary">Ver serie {!featured && <span aria-hidden="true">→</span>}</Button>
      </div>
    </article>
  )
}
