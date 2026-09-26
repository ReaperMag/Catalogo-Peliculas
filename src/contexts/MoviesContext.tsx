import { createContext, useContext, useMemo, type ReactNode } from 'react'
import actorsData from '../data/actors.json'
import moviesData from '../data/movies.json'
import seriesData from '../data/series.json'
import type { Actor, Movie, Series } from '../types/movie'

type MoviesContextValue = {
  movies: Movie[]
  series: Series[]
  actors: Actor[]
  featuredMovie: Movie
}

const MoviesContext = createContext<MoviesContextValue | null>(null)

export function MoviesProvider({ children }: { children: ReactNode }) {
  const movies = moviesData as Movie[]
  const series = seriesData as Series[]
  const actors = actorsData as Actor[]

  const value = useMemo<MoviesContextValue>(() => {
    return {
      movies,
      series,
      actors,
      featuredMovie: movies[0],
    }
  }, [actors, movies, series])

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export function useMovies() {
  const context = useContext(MoviesContext)

  if (!context) throw new Error('useMovies must be used inside MoviesProvider')
  return context
}
