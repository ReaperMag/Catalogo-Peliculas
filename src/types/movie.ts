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

export type SeriesEpisode = {
  number: number
  title: string
  image?: string
  rating?: number
  synopsis?: string
  duration?: string
  airDate?: string
  director?: string
  location?: string
}

export type SeriesSeason = {
  season: number
  episodes: number
  year: number
  rating?: number
  trailerUrl?: string
  episodeDetails?: SeriesEpisode[]
}

export type Series = {
  id: string
  title: string
  originalTitle?: string
  tagline?: string
  year: number
  endYear?: number
  status?: string
  rating: number
  metascore?: number
  seasons: number
  episodes?: number
  episodeDuration?: string
  certification?: string
  genres: string[]
  synopsis: string
  image: string
  trailerUrl?: string
  creators?: string[]
  writers?: string[]
  directors?: string[]
  music?: string
  country?: string
  language?: string
  streamingPlatforms?: string[]
  productionCompanies?: string[]
  seasonDetails?: SeriesSeason[]
  cast?: MovieCast[]
  awards?: string[]
  trivia?: MovieTrivia[]
  reviews?: MovieReview[]
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
