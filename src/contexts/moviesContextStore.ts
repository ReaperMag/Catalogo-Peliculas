import { createContext } from 'react'
import type { Actor, Movie, Series } from '../types/movie'

export type MoviesContextValue = {
  movies: Movie[]
  series: Series[]
  actors: Actor[]
  featuredMovie: Movie
  topMovies: Movie[]
}

export const MoviesContext = createContext<MoviesContextValue | null>(null)
