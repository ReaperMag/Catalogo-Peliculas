import { Button } from '../components/common/Button'
import { useMovies } from '../contexts/MoviesContext'
import type { PageKey } from '../types/movie'

type SeriesDetailPageProps = { seriesId: string | null; onNavigate: (page: PageKey) => void }

export function SeriesDetailPage({ seriesId, onNavigate }: SeriesDetailPageProps) {
  const { series } = useMovies()
  const item = series.find((entry) => entry.id === seriesId) ?? series[0]

  return <main className="detail-page"><section><span className="eyebrow">Plantilla de serie</span><h1>{item.title}</h1><div className="detail-meta"><span>{item.year}</span><span>{item.seasons} temporadas</span><span>Valoración {item.rating}</span></div><p>{item.synopsis}</p><div className="genre-list">{item.genres.map((genre) => <span key={genre}>{genre}</span>)}</div><Button onClick={() => onNavigate('home')} variant="secondary">Volver al inicio</Button></section></main>
}
