export type MovieCredit = { label: string; name: string; detail: string }
export type MovieCastMember = { name: string; character: string }
export type MovieAward = { count: number; title: string; detail: string }
export type MovieInfoItem = { label: string; value: string }
export type MovieReview = {
  author: string
  role: string
  date: string
  rating: number
  title: string
  text: string
  helpful: number
}

export type Movie = {
  id: string
  title: string
  originalTitle?: string
  year: number
  rating: number
  ratingCount?: number
  metascore?: number
  certification?: string
  duration: string
  genres: string[]
  synopsis: string
  streamingPlatforms?: string[]
  trailerUrl?: string
  credits?: MovieCredit[]
  cast?: MovieCastMember[]
  awards?: MovieAward[]
  production?: MovieInfoItem[]
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
