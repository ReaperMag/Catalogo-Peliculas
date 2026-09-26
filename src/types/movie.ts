export type Movie = {
  id: string
  title: string
  year: number
  rating: number
  duration: string
  genres: string[]
  synopsis: string
}

export type Series = {
  id: string
  title: string
  year: number
  rating: number
  seasons: number
  genres: string[]
  synopsis: string
}

export type Actor = {
  id: string
  name: string
  birthYear: number
  nationality: string
  biography: string
  knownFor: string[]
}

export type PageKey = 'home' | 'movies' | 'search' | 'favorites' | 'detail' | 'series' | 'actor'
