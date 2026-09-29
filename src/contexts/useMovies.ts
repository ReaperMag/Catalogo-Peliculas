import { useContext } from 'react'
import { MoviesContext } from './moviesContextStore'

export function useMovies() {
  const context = useContext(MoviesContext)

  if (!context) throw new Error('useMovies must be used inside MoviesProvider')
  return context
}
