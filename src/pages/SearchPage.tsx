import { useMemo, useState } from 'react'
import { PlaceholderSection } from '../components/common/PlaceholderSection'
import { MovieCard } from '../components/molecules/MovieCard'
import { SearchBar } from '../components/molecules/SearchBar'
import { useMovies } from '../contexts/MoviesContext'
import type { Movie } from '../types/movie'

type SearchPageProps = { onSelectMovie: (movieId: string) => void }

export function SearchPage({ onSelectMovie }: SearchPageProps) {
  const [query, setQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  const { movies } = useMovies()
  const results = useMemo(() => {
    const normalizedQuery = submittedQuery.trim().toLocaleLowerCase('es')
    if (!normalizedQuery) return []

    return movies.filter((movie: Movie) => [movie.title, String(movie.year), ...movie.genres, movie.synopsis]
      .some((value) => value.toLocaleLowerCase('es').includes(normalizedQuery)))
  }, [movies, submittedQuery])

  return (
    <main className="page-stack">
      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Buscar en el catálogo</span>
          <h1>Buscar películas</h1>
          <p>Encuentra películas por título, género, año o descripción.</p>
        </div>

        <SearchBar onQueryChange={setQuery} onSearch={() => setSubmittedQuery(query)} query={query} />
      </section>

      {submittedQuery.trim() ? (
        <section aria-live="polite" className="content-section">
          <div className="section-heading">
            <span className="eyebrow">Resultados</span>
            <h2>{results.length ? `${results.length} ${results.length === 1 ? 'película encontrada' : 'películas encontradas'}` : 'No encontramos películas'}</h2>
            {!results.length && <p>Prueba con otro título, género o año del catálogo.</p>}
          </div>
          {results.length > 0 && <div className="movie-grid">{results.map((movie) => <MovieCard key={movie.id} movie={movie} onViewDetail={onSelectMovie} />)}</div>}
        </section>
      ) : (
        <PlaceholderSection description="Escribe un título, género o año y presiona Buscar para ver coincidencias del catálogo." slots={['Título', 'Género', 'Año']} title="Busca una película" />
      )}
    </main>
  )
}
