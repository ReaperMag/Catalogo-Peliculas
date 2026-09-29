import { useMemo, useState } from 'react'
import { Button } from '../components/common/Button'
import { PlaceholderSection } from '../components/common/PlaceholderSection'
import { MovieCard } from '../components/molecules/MovieCard'
import { SearchBar } from '../components/molecules/SearchBar'
import { useMovies } from '../contexts/useMovies'
import { getMediaImage } from '../lib/mediaImages'
import type { Movie, Series } from '../types/movie'

type SearchPageProps = {
  onSelectMovie: (movieId: string) => void
  onSelectSeries: (seriesId: string) => void
}

type SearchResult =
  | { type: 'movie'; item: Movie }
  | { type: 'series'; item: Series }

function matchesQuery(values: Array<string | number>, query: string) {
  return values.some((value) => String(value).toLocaleLowerCase('es').includes(query))
}

function SeriesSearchCard({ series, onViewSeries }: { series: Series; onViewSeries: (seriesId: string) => void }) {
  const imageUrl = getMediaImage(series.image)

  return (
    <article className="movie-card">
      {imageUrl && <img alt={series.title} src={imageUrl} />}
      <div className="movie-card__body">
        <div className="movie-card__meta">
          <span>{series.year}</span>
          <span>{series.seasons} {series.seasons === 1 ? 'temporada' : 'temporadas'}</span>
          <span>Serie</span>
        </div>
        <h3>{series.title}</h3>
        <p>{series.synopsis}</p>
        <p>{series.genres.join(' · ')}</p>
        <strong aria-label={`Rating ${series.rating}`}>Rating {series.rating}</strong>
        <div className="movie-card__actions">
          <Button onClick={() => onViewSeries(series.id)} variant="secondary">Ver serie</Button>
        </div>
      </div>
    </article>
  )
}

export function SearchPage({ onSelectMovie, onSelectSeries }: SearchPageProps) {
  const [query, setQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  const { movies, series } = useMovies()
  const results = useMemo(() => {
    const normalizedQuery = submittedQuery.trim().toLocaleLowerCase('es')
    if (!normalizedQuery) return []

    const movieResults: SearchResult[] = movies
      .filter((movie) => matchesQuery([movie.title, movie.year, ...movie.genres, movie.synopsis], normalizedQuery))
      .map((item) => ({ type: 'movie', item }))
    const seriesResults: SearchResult[] = series
      .filter((item) => matchesQuery([item.title, item.year, ...item.genres, item.synopsis], normalizedQuery))
      .map((item) => ({ type: 'series', item }))

    return [...movieResults, ...seriesResults]
  }, [movies, series, submittedQuery])

  return (
    <main className="page-stack">
      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Buscar en el catálogo</span>
          <h1>Buscar películas y series</h1>
          <p>Encuentra películas y series por título, género, año o descripción.</p>
        </div>

        <SearchBar onQueryChange={setQuery} onSearch={() => setSubmittedQuery(query)} query={query} />
      </section>

      {submittedQuery.trim() ? (
        <section aria-live="polite" className="content-section">
          <div className="section-heading">
            <span className="eyebrow">Resultados</span>
            <h2>{results.length ? `${results.length} ${results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}` : 'No encontramos coincidencias'}</h2>
            {!results.length && <p>Prueba con otro título, género o año del catálogo.</p>}
          </div>
          {results.length > 0 && (
            <div className="movie-grid">
              {results.map((result) => result.type === 'movie' ? (
                <MovieCard key={`movie-${result.item.id}`} movie={result.item} onViewDetail={onSelectMovie} />
              ) : (
                <SeriesSearchCard key={`series-${result.item.id}`} onViewSeries={onSelectSeries} series={result.item} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <PlaceholderSection description="Escribe un título, género o año y presiona Buscar para ver coincidencias de películas y series." slots={['Título', 'Género', 'Año']} title="Busca en el catálogo" />
      )}
    </main>
  )
}
