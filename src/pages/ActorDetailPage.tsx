import { Button } from '../components/common/Button'
import { useMovies } from '../contexts/MoviesContext'
import type { PageKey } from '../types/movie'

type ActorDetailPageProps = { actorId: string | null; onNavigate: (page: PageKey) => void }

export function ActorDetailPage({ actorId, onNavigate }: ActorDetailPageProps) {
  const { actors } = useMovies()
  const actor = actors.find((entry) => entry.id === actorId) ?? actors[0]

  return <main className="detail-page"><section><span className="eyebrow">Plantilla de actor</span><h1>{actor.name}</h1><div className="detail-meta"><span>{actor.nationality}</span><span>Nacimiento: {actor.birthYear}</span></div><p>{actor.biography}</p><h2>Conocido por</h2><div className="genre-list">{actor.knownFor.map((title) => <span key={title}>{title}</span>)}</div><Button onClick={() => onNavigate('home')} variant="secondary">Volver al inicio</Button></section></main>
}
