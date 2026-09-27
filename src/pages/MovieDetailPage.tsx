import { useEffect, useState } from 'react'
import { useMovies } from '../contexts/MoviesContext'
import { getMediaImage } from '../lib/mediaImages'
import type { ReactNode } from 'react'
import type { Movie } from '../types/movie'
import '../template.css'

type MovieDetailPageProps = {
  movieId: string | null
  onNavigate: (destination: 'inicio' | 'peliculas' | 'series' | 'celebridades') => void
}

function initials(name: string) {
  return name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase()
}

function CastPortrait({ name, image, enabled }: { name: string; image?: string; enabled: boolean }) {
  const [portraitUrl, setPortraitUrl] = useState(() => image ? getMediaImage(image) : '')

  useEffect(() => {
    if (image || !enabled) return
    const controller = new AbortController()
    const page = encodeURIComponent(name.replaceAll(' ', '_'))
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${page}`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((profile) => { if (profile?.thumbnail?.source) setPortraitUrl(profile.thumbnail.source) })
      .catch(() => undefined)
    return () => controller.abort()
  }, [image, name, enabled])

  return <div className="comedia-cast-photo">{portraitUrl ? <img src={portraitUrl} alt={`Fotografía de ${name}`} onError={() => setPortraitUrl('')} /> : initials(name)}</div>
}

function getReviewScore(movie: Movie, source: string) {
  return movie.reviews?.find((review) => review.author.toLowerCase().includes(source.toLowerCase()))?.score
}

function percentageFromScore(score?: string, index = 0) {
  if (!score) return null
  const values = score.match(/\d+(?:\.\d+)?/g)
  return values?.[index] ? Number(values[index]) : null
}

function formatGross(boxOffice?: string) {
  return boxOffice?.split(';')[0] ?? 'Sin datos disponibles'
}

export function MovieDetailPage({ movieId, onNavigate }: MovieDetailPageProps) {
  const { movies } = useMovies()
  const movie = movies.find((item) => item.id === movieId)

  if (!movie) {
    return <main className="movie-template"><p>No se encontró esta película en el catálogo.</p></main>
  }

  const isComedyMovie = movie.collections?.includes('Comedia') ?? false
  const imageUrl = getMediaImage(movie.image)
  const rottenScore = getReviewScore(movie, 'rotten tomatoes')
  const criticScore = percentageFromScore(rottenScore)
  const audienceScore = percentageFromScore(rottenScore, 1)
  const metascore = movie.metascore ?? percentageFromScore(getReviewScore(movie, 'metacritic'))
  const normalizedScoreDifference = metascore == null ? null : Math.round(metascore - movie.rating * 10)
  const reviewRows = movie.reviews ?? []
  const techRows = [
    ['Producción', movie.productionCompanies?.join(' / ')],
    ['Formato de rodaje', 'Sin registrar'],
    ['Relación de aspecto', 'Sin registrar'],
    ['Mezcla de sonido', 'Sin registrar'],
    ['Fotografía', movie.cinematography],
    ['Montaje / edición', movie.editing],
    ['País de origen', movie.country],
    ['Idioma original', movie.language],
  ] as const

  return (
    <div className={`movie-template${isComedyMovie ? ' movie-template--comedia' : ''}`}>
      <header className="fixed">
        <div className="h-16 w-full max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <a aria-label="Ir al inicio" className="flex items-center gap-space-sm no-underline" href="#inicio" onClick={(event) => { event.preventDefault(); onNavigate('inicio') }}>
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">Cine<span className="text-primary-container">Base</span></span>
            </a>
          </div>
          <div className="flex-1 max-w-2xl hidden md:flex items-center" />
          <nav aria-label="Navegación principal" className="hidden xl:flex items-center gap-space-lg shrink-0">
            <a href="#peliculas" onClick={(event) => { event.preventDefault(); onNavigate('peliculas') }}>Películas</a>
            <a href="#series" onClick={(event) => { event.preventDefault(); onNavigate('series') }}>Series</a>
            <a href="#celebridades" onClick={(event) => { event.preventDefault(); onNavigate('celebridades') }}>Celebridades</a>
          </nav>
        </div>
      </header>

      <main className="w-full pt-16 bg-surface-container-lowest min-h-[calc(100vh-280px)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 h-[480px] bg-gradient-to-b from-primary-container/10 via-surface-container-high/40 to-surface-container-lowest pointer-events-none -z-10" />
            <div aria-hidden="true" className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg pt-space-md pb-space-xl">
              {!isComedyMovie && <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg text-on-surface-variant font-label-md text-label-md movie-breadcrumbs">
                <div className="flex items-center gap-space-xs flex-wrap">
                  <a href="#inicio" onClick={(event) => { event.preventDefault(); onNavigate('inicio') }}>⌂ Inicio</a>
                  <span>/</span>
                  <a href="#peliculas" onClick={(event) => { event.preventDefault(); onNavigate('peliculas') }}>Películas</a>
                  <span>/</span>
                  <span className="text-on-surface font-semibold">{movie.title} ({movie.year})</span>
                  {movie.certification && <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase ml-1 movie-certification">{movie.certification}</span>}
                </div>
                {!isComedyMovie && <div className="flex items-center gap-space-xs bg-surface-container-high/80 px-space-sm py-1 rounded-full shadow-sm backdrop-blur movie-cinebase-badge">
                  <span aria-hidden="true" className="template-icon text-primary-container text-[18px]">✓</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide">Ficha CineBase</span>
                </div>}
              </nav>}

              <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl movie-hero-layout">
                <div className="lg:col-span-4 flex flex-col gap-space-md movie-poster-column">
                  <div className="group relative rounded-xl overflow-hidden shadow-2xl bg-surface-container aspect-[2/3] w-full">
                    {imageUrl ? <img alt={`Póster de ${movie.title}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imageUrl} /> : <div className="w-full h-full flex items-center justify-center">{movie.title}</div>}
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between movie-info-column">
                  <div>
                    <div className="inline-flex flex-wrap items-center gap-2 px-space-sm py-1 rounded-full bg-surface-container-high/90 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-space-sm movie-meta-badge">
                      <span className="text-primary-container font-bold">Película</span><span>•</span><span>{movie.year}</span><span>•</span><span>{movie.duration}</span><span>•</span>
                      {movie.certification && <><span className="text-on-surface">{movie.certification}</span><span>•</span></>}
                      <span className="text-primary">{movie.genres.join(' · ')}</span>
                    </div>
                    <h1 className="font-display-lg text-display-lg font-bold tracking-tight text-on-surface text-balance mb-space-xs">{movie.title}</h1>
                    {movie.tagline && <p className="font-headline-sm text-headline-sm italic text-on-surface-variant font-normal mb-space-md">“{movie.tagline}”</p>}

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 py-space-sm px-space-md rounded-lg bg-surface-container mb-space-lg text-on-surface font-body-sm text-body-sm movie-crew">
                      {movie.director && <div><span className="text-on-surface-variant font-label-sm text-label-sm uppercase mr-1.5">Dirección:</span><span className="font-semibold text-on-surface">{movie.director}</span></div>}
                      {movie.writers?.length ? <div><span className="text-on-surface-variant font-label-sm text-label-sm uppercase mr-1.5">Guion:</span><span className="font-semibold text-on-surface">{movie.writers.join(' y ')}</span></div> : null}
                      {movie.music && <div><span className="text-on-surface-variant font-label-sm text-label-sm uppercase mr-1.5">Música:</span><span className="font-semibold text-on-surface">{movie.music}</span></div>}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mb-space-lg movie-metrics">
                      <Metric label="IMDb" value={`${movie.rating}/10`} detail="Valoración de usuarios" icon="★" />
                      <Metric label="Metascore" value={metascore != null ? `${metascore}` : '—'} detail="Críticas profesionales" icon="▥" />
                      <Metric label="Estreno" value={`${movie.year}`} detail={movie.country ?? 'Año de estreno'} icon="♛" />
                      <Metric label="Taquilla global" value={formatGross(movie.boxOffice)} detail="Recaudación mundial aprox." icon="＄" />
                    </div>
                  </div>

                  <div className="bg-surface-container-high/70 p-space-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md mt-auto shadow-md movie-trailer-row">
                    {movie.trailerUrl ? <a className="w-full sm:w-auto px-space-lg py-3 rounded-lg bg-primary-container hover:bg-primary-fixed-dim text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md" href={movie.trailerUrl} rel="noreferrer" target="_blank"><span aria-hidden="true">▶</span><span>Ver tráiler oficial</span></a> : <span>Tráiler no disponible</span>}
                    <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm text-center sm:text-right"><span aria-hidden="true">▣</span><span>Consulta la disponibilidad de <strong className="text-on-surface">streaming</strong> según tu región.</span></div>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg movie-detail-grid">
                <div className="lg:col-span-8 flex flex-col gap-space-xl movie-detail-main">
                  <section className="bg-surface-container p-space-lg rounded-xl shadow-sm" id="sinopsis">
                    <div className="flex items-center justify-between mb-space-md"><h2 className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-space-xs"><span className="w-1.5 h-6 bg-primary-container rounded-full" /><span>Sinopsis de la película</span></h2><span className="px-space-sm py-1 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm tracking-wider uppercase font-bold">Duración {movie.duration}</span></div>
                    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed text-balance">{movie.synopsis}</p>
                  </section>

                  {!!movie.cast?.length && <section className="bg-surface-container p-space-lg rounded-xl shadow-sm" id="reparto">
                    <div className="flex items-center justify-between mb-space-lg"><h2 className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-space-xs"><span className="w-1.5 h-6 bg-primary-container rounded-full" /><span>Reparto principal &amp; personajes</span></h2><span className="font-label-md text-label-md text-on-surface-variant">{movie.cast.length} principales</span></div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-space-md${isComedyMovie ? ' comedia-cast-grid' : ''}`}>{movie.cast.map((actor) => isComedyMovie ? <article className="comedia-cast-card" key={actor.name}><CastPortrait name={actor.name} image={actor.image} enabled /><div className="comedia-cast-copy"><div>{actor.name}</div><div>{actor.character}</div></div></article> : <article className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors shadow-sm" key={actor.name}><div className="w-16 h-20 rounded-md shrink-0 bg-surface-container-high flex items-center justify-center text-primary font-headline-sm">{initials(actor.name)}</div><div className="min-w-0 flex-1"><div className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">{actor.name}</div><div className="font-body-md text-body-md text-primary-container truncate font-medium">{actor.character}</div></div></article>)}</div>
                  </section>}

                  {!!reviewRows.length && <section className="bg-surface-container p-space-lg rounded-xl shadow-sm movie-review-section">
                    <div className="flex items-center justify-between mb-space-lg movie-review-title"><h2 className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-space-xs"><span className="w-1.5 h-6 bg-primary-container rounded-full" /><span>Críticas de la comunidad y prensa especializada</span></h2>{criticScore != null && <span className="font-label-md text-label-md text-primary">{criticScore}% Tomatometer</span>}</div>
                    <div className="p-space-md rounded-xl bg-surface-container-high/50 flex flex-col md:flex-row items-center gap-space-lg mb-space-lg movie-review-overview">
                      <div className="text-center md:text-left shrink-0 movie-review-rating"><div className="font-display-lg text-display-lg font-bold text-primary-container">{movie.rating}</div><div className="flex items-center justify-center md:justify-start gap-1 text-primary-container my-1" aria-label={`Calificación ${movie.rating} de 10`}>★★★★★</div><div className="font-body-sm text-body-sm text-on-surface-variant">Calificación IMDb</div></div>
                      <div className="w-full flex-1 flex flex-col gap-1.5 font-label-sm text-label-sm movie-review-scores">
                        {isComedyMovie ? <>
                          <div className="movie-review-scores-heading">Puntuaciones disponibles <span>Escalas normalizadas para comparar</span></div>
                          <ScoreBar label="IMDb · usuarios" score={movie.rating * 10} valueLabel={`${movie.rating}/10`} />
                          {criticScore != null && <ScoreBar label="Rotten Tomatoes · crítica" score={criticScore} />}
                          {audienceScore != null && <ScoreBar label="Rotten Tomatoes · público" score={audienceScore} />}
                          {metascore != null && <ScoreBar label="Metascore · crítica" score={metascore} suffix="/100" />}
                          <p className="movie-review-method">IMDb refleja valoraciones de usuarios; Metascore y Rotten Tomatoes resumen la recepción de la crítica según sus propias escalas. Solo se muestran puntuaciones registradas para esta película.</p>
                        </> : <>
                          <ScoreBar label="Rotten Tomatoes" score={criticScore} />
                          <ScoreBar label="Público RT" score={audienceScore} />
                          <ScoreBar label="Metacritic" score={metascore} suffix="/100" />
                        </>}
                      </div>
                    </div>
                    {isComedyMovie && normalizedScoreDifference != null && <div className="movie-review-comparison"><strong>Lectura de puntuaciones</strong><p>IMDb marca {movie.rating}/10 y Metascore {metascore}/100. En una escala de 100, la diferencia entre ambas valoraciones es de {Math.abs(normalizedScoreDifference)} puntos; {normalizedScoreDifference > 0 ? 'Metascore queda por encima' : normalizedScoreDifference < 0 ? 'IMDb queda por encima' : 'ambas puntuaciones coinciden'}.</p></div>}
                    <div className="flex flex-col gap-space-md movie-review-list">{reviewRows.map((review) => <article className="p-space-md rounded-xl bg-surface-container-high/40 movie-review-card" key={`${review.author}-${review.score}`}><div className="flex items-start justify-between mb-space-sm movie-review-head"><div className="movie-review-byline"><div className="movie-review-author"><span className="font-headline-sm text-headline-sm font-bold text-on-surface">{review.author}</span><span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm">{review.source}</span></div><div className="font-body-sm text-body-sm text-on-surface-variant movie-review-caption">{isComedyMovie ? review.source === 'Ficha informativa' ? 'Comentario editorial de la ficha' : 'Puntuación reportada por la fuente' : 'Puntuación agregada'}</div></div><div className="flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-lg movie-review-score"><span aria-hidden="true">★</span><span className="font-headline-sm text-headline-sm font-bold text-on-surface">{review.score}</span></div></div><p className="font-body-md text-body-md italic text-on-surface leading-relaxed movie-review-text">{review.text}</p></article>)}</div>
                  </section>}
                </div>

                <aside className="lg:col-span-4 flex flex-col gap-space-lg movie-detail-aside">
                  {!!movie.awards?.length && <InfoPanel title="Premios y reconocimientos" icon="award" comedia={isComedyMovie}><ul className="flex flex-col gap-space-sm">{movie.awards.map((award) => <li className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-start gap-space-sm" key={award}><span aria-hidden="true" className="text-primary">{isComedyMovie ? <DetailIcon type="medal" /> : '🏅'}</span><span className="font-body-sm text-body-sm text-on-surface-variant">{award}</span></li>)}</ul></InfoPanel>}
                  <InfoPanel title="Ficha técnica cinematográfica" icon="film" comedia={isComedyMovie}><dl className="flex flex-col gap-space-sm font-body-sm text-body-sm">{techRows.map(([label, value]) => <div className="flex justify-between gap-4 py-1.5 px-space-sm rounded bg-surface-container-high/30" key={label}><dt className="text-on-surface-variant">{label}</dt><dd className="font-semibold text-on-surface text-right">{value || 'Sin registrar'}</dd></div>)}</dl></InfoPanel>
                  {!!movie.trivia?.length && <InfoPanel title="Curiosidades" icon="idea" comedia={isComedyMovie}><div className="flex flex-col gap-space-md">{movie.trivia.map((item) => <article className="p-space-sm rounded-lg bg-surface-container-high/40" key={item.title}><h4 className="font-label-md text-label-md text-primary font-bold mb-1">{item.title}</h4><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{item.text}</p></article>)}</div></InfoPanel>}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-dim border-t border-surface-variant/30"><div className="max-w-[1440px] mx-auto px-margin md:px-margin-md lg:px-margin-lg pt-space-xl pb-space-lg"><div className="border-t border-surface-variant/20 pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left"><p className="font-body-sm text-body-sm text-on-surface-variant">© 2026 CineBase Entertainment. Todos los derechos reservados.</p><p className="font-body-sm text-body-sm text-on-surface-variant/70">Datos cinematográficos y audiovisuales curados para consulta pública.</p></div></div></footer>
    </div>
  )
}

function Metric({ label, value, detail, icon }: { label: string; value: string; detail: string; icon: string }) {
  return <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between shadow-sm"><div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase"><span>{label}</span><span aria-hidden="true" className="template-icon text-primary-container text-[16px]">{icon}</span></div><div className="my-space-xs"><span className="font-headline-md text-headline-md font-bold text-on-surface">{value}</span></div><div className="font-body-sm text-body-sm text-on-surface-variant truncate">{detail}</div></div>
}

function ScoreBar({ label, score, suffix = '%', valueLabel }: { label: string; score: number | null; suffix?: string; valueLabel?: string }) {
  const percentage = score == null ? 0 : Math.max(0, Math.min(score, 100))
  return <div className="flex items-center gap-2 movie-review-bar"><span className="w-24 text-on-surface-variant">{label}</span><div className="flex-1 h-2 rounded-full bg-surface-container-lowest overflow-hidden"><div className="h-full bg-primary-container rounded-full" style={{ width: `${percentage}%` }} /></div><span className="w-10 text-right text-on-surface">{valueLabel ?? (score == null ? '—' : `${score}${suffix}`)}</span></div>
}

function DetailIcon({ type }: { type: 'award' | 'film' | 'idea' | 'medal' }) {
  const paths: Record<typeof type, ReactNode> = {
    award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" /></>,
    film: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4m-4 6h4m10-6h4m-4 6h4" /></>,
    idea: <><path d="M9 18h6m-5 3h4m-5-6a7 7 0 1 1 6 0c-.8.5-1 1.2-1 3h-4c0-1.8-.2-2.5-1-3Z" /></>,
    medal: <><circle cx="12" cy="9" r="5" /><path d="m8.5 13-1 8 4.5-2.5 4.5 2.5-1-8" /></>,
  }
  return <svg aria-hidden="true" className="comedia-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>
}

function InfoPanel({ title, icon, children, comedia }: { title: string; icon: 'award' | 'film' | 'idea'; children: ReactNode; comedia: boolean }) {
  return <section className="bg-surface-container p-space-lg rounded-xl shadow-sm"><h3 className="font-headline-sm text-headline-sm font-bold text-on-surface flex items-center gap-2 mb-space-md"><span aria-hidden="true" className="template-icon text-primary-container text-[20px]">{comedia ? <DetailIcon type={icon} /> : ({ award: '🏆', film: '🎬', idea: '💡' }[icon])}</span><span>{title}</span></h3>{children}</section>
}
