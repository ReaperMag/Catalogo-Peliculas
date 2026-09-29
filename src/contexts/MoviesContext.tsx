import { useMemo, type ReactNode } from 'react'
import actorsData from '../data/actors.json'
import moviesData from '../data/movies.json'
import seriesData from '../data/series.json'
import topMoviesData from '../data/topMovies.json' //Leidy
import { MoviesContext } from './moviesContextStore'
import type { MoviesContextValue } from './moviesContextStore'
import type { Actor, Movie, Series } from '../types/movie'

export function MoviesProvider({ children }: { children: ReactNode }) {
  const movies = moviesData as Movie[]
  const series = seriesData as Series[]
  const actors = actorsData as Actor[]
  const topMovies = topMoviesData as Movie[] // Leidy

  const value = useMemo<MoviesContextValue>(() => {
    return {
      movies,
      series,
      actors,
      featuredMovie: movies[0],
      topMovies, // Leidy
    }
  }, [actors, movies, series, topMovies]) // Leidy:  se agregó topMovies al final

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}
