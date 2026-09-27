export type Movie = {
  id: string
  title: string
  year: number
  rating: number
  duration: string
  genres: string[]
  synopsis: string
  image: string
  viewCount?: number | null
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
  birthDate?: string
  birthPlace?: string
  nationality: string
  occupation?: string
  biography: string
  knownFor: string[]
  filmography?: ActorWork[]
  image: string
}
export type ActorWork = {
  year: number
  title: string
  character: string
  type: 'Película' | 'Serie' | 'Miniserie'
  rating?: number
}

export type PageKey = 'home' | 'movies' | 'search' | 'detail' | 'series' | 'actor'
