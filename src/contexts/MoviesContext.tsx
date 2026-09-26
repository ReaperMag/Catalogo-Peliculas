import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import actorsData from '../data/actors.json'
import moviesData from '../data/movies.json'
import seriesData from '../data/series.json'
import type { Actor, Movie, Series } from '../types/movie'

type MoviesContextValue = {
  movies: Movie[]
  series: Series[]
  actors: Actor[]
  favorites: string[]
  featuredMovie: Movie
  favoriteMovies: Movie[]
  isFavorite: (movieId: string) => boolean
  toggleFavorite: (movieId: string) => void
}

const FAVORITES_STORAGE_KEY = 'favorite-movies'
const MoviesContext = createContext<MoviesContextValue | null>(null)

const readStoredFavorites = () => {
  const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
  return stored ? (JSON.parse(stored) as string[]) : []
}

export function MoviesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(readStoredFavorites)
  const movies = moviesData as Movie[]
  const series = seriesData as Series[]
  const actors = actorsData as Actor[]

  const value = useMemo<MoviesContextValue>(() => {
    const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id))

    return {
      movies,
      series,
      actors,
      favorites,
      favoriteMovies,
      featuredMovie: movies[0],
      isFavorite: (movieId) => favorites.includes(movieId),
      toggleFavorite: (movieId) => {
        setFavorites((currentFavorites) => {
          const nextFavorites = currentFavorites.includes(movieId)
            ? currentFavorites.filter((id) => id !== movieId)
            : [...currentFavorites, movieId]

          localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(nextFavorites))
          return nextFavorites
        })
      },
    }
  }, [actors, favorites, movies, series])

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export function useMovies() {
  const context = useContext(MoviesContext)

  if (!context) throw new Error('useMovies must be used inside MoviesProvider')
  return context
}
