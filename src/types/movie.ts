export type MovieCast = {
  name: string
  character: string
  image?: string
}
export type MovieReview = {
  author: string
  source: string
  score: string
  text: string
}

export type MovieTrivia = {
  title: string
  text: string
}

export type Movie = {
  id: string
  title: string
  originalTitle?: string
  tagline?: string

  year: number
  rating: number
  metascore?: number
  duration: string
  certification?: string

  genres: string[]
  synopsis: string

  image: string
  trailerUrl?: string
  viewCount?: number | null

  director?: string
  writers?: string[]
  basedOn?: string
  music?: string
  cinematography?: string
  editing?: string

  country?: string
  language?: string
  productionCompanies?: string[]
  boxOffice?: string

  cast?: MovieCast[]

  awards?: string[]
  trivia?: MovieTrivia[]
  reviews?: MovieReview[]
}
export type Series = {
  id: string
  title: string
  year: number
  rating: number
  seasons: number
  genres: string[]
  synopsis: string
  image: string
}

export type Actor = {
  id: string
  name: string
  birthYear: number
  nationality: string
  biography: string
  knownFor: string[]
  image: string
}

export type PageKey = 'home' | 'movies' | 'search' | 'detail' | 'series' | 'actor'
