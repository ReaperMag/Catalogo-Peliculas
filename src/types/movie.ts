export type Movie = {
  id: string
  title: string
  year: number
  rating: number
  duration: string
  genres: string[]
  posterUrl: string
  synopsis: string
}

export type PageKey = 'home' | 'movies' | 'search' | 'favorites' | 'detail'
