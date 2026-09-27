import { ActorCarousel } from '../components/actors/ActorCarousel'
import { useRef } from 'react'
import { FeaturedMovieCarousel } from '../components/molecules/FeaturedMovieCarousel'
import { SeriesCard } from '../components/molecules/SeriesCard'
import { useMovies } from '../contexts/MoviesContext'
import categoriesData from '../data/categories.json'
import { getMediaImage } from '../lib/mediaImages'
import type { Movie, PageKey } from '../types/movie'
import './TopMoviesSection.css' // Leidy

type HomePageProps = {
  onNavigate: (page: PageKey) => void
  onSelectMovie: (movieId: string) => void
  onSelectSeries: (seriesId: string) => void
  onSelectActor: (actorId: string) => void
}

function HomeMovieCard({ movie, onSelectMovie }: { movie: Movie; onSelectMovie: (movieId: string) => void }) {
  const imageUrl = getMediaImage(movie.image)
  return (
    <article className="home-movie-card">
      <div className="home-movie-card__art">{imageUrl ? <img alt={movie.title} src={imageUrl} /> : <span aria-hidden="true">{movie.title.slice(0, 1)}</span>}<span className="home-movie-card__rating">★ {movie.rating}</span></div>
      <div className="home-movie-card__body"><span className="home-card-kicker">{movie.year} · {movie.duration}</span><h3>{movie.title}</h3><p>{movie.genres.join(' · ')}</p><div className="home-movie-card__actions"><button onClick={() => onSelectMovie(movie.id)} type="button">Ver película <span aria-hidden="true">→</span></button></div></div>
    </article>
  )
}

export function HomePage({ onNavigate, onSelectMovie, onSelectSeries, onSelectActor }: HomePageProps) {
  const { actors, movies, series, topMovies } = useMovies() // Leidy
  const moviesCarouselRef = useRef<HTMLDivElement>(null)

const scrollMoviesLeft = () => {
  moviesCarouselRef.current?.scrollBy({
    left: -420,
    behavior: 'smooth',
  })
}

const scrollMoviesRight = () => {
  moviesCarouselRef.current?.scrollBy({
    left: 420,
    behavior: 'smooth',
  })
}
  const mostViewedMovies = [...topMovies].sort((first, second) => (second.viewCount ?? -1) - (first.viewCount ?? -1)).slice(0, 10) // Leidy

  return (
    <main className="home-page">
      <FeaturedMovieCarousel movies={movies} onNavigate={onNavigate} onSelectMovie={onSelectMovie} />

      {series[0] && <section className="home-section home-section--featured-series"><div className="home-section__heading"><div><span className="home-eyebrow">Recomendación CineBase</span><h2>Serie destacada del mes</h2></div><span className="home-section__index">01</span></div><SeriesCard featured onViewSeries={onSelectSeries} series={series[0]} /></section>}

      <section className="home-section" id="home-actors">
        <div className="home-section__heading">
          <div>
            <span className="home-eyebrow">
              Talento que marca tendencia
            </span>

            <h2>Actores en tendencia</h2>
          </div>

          <span className="home-section__index">
            02
          </span>
        </div>

        <ActorCarousel
          actors={actors}
          onSelectActor={onSelectActor}
        />
      </section>
      <section className="home-section"><div className="home-section__heading"><div><span className="home-eyebrow">Historias para seguir</span><h2>Series populares</h2></div><span className="home-section__index">02</span></div><div className="home-series-grid">{series.map((item) => <SeriesCard key={item.id} onViewSeries={onSelectSeries} series={item} />)}</div></section>

      <section className="home-section">
  <div className="home-section__heading">
    <div>
      <span className="home-eyebrow">En la gran pantalla</span>
      <h2>Películas populares</h2>
    </div>

    <button
      className="home-section__link"
      onClick={() => onNavigate('movies')}
      type="button"
    >
      Ver catálogo <span aria-hidden="true">→</span>
    </button>
  </div>

  <div className="home-movie-carousel">
    <button
      className="home-carousel-button"
      onClick={scrollMoviesLeft}
      type="button"
      aria-label="Películas anteriores"
    >
      ‹
    </button>

    <div
      className="home-movie-carousel__track"
      ref={moviesCarouselRef}
    >
      {movies.map((movie) => (
        <div
          className="home-movie-carousel__item"
          key={movie.id}
        >
          <HomeMovieCard
            movie={movie}
            onSelectMovie={onSelectMovie}
          />
        </div>
      ))}
    </div>

    <button
      className="home-carousel-button"
      onClick={scrollMoviesRight}
      type="button"
      aria-label="Películas siguientes"
    >
      ›
    </button>
  </div>
</section>

      <section className="home-section home-section--views"><div className="home-section__heading"><div><span className="home-eyebrow">Solo información</span><h2>Top 10 películas más vistas</h2><p>Ranking de las películas con más visualizaciones en CineBase.</p></div><span className="home-section__index">03</span></div><ol className="home-view-list">{mostViewedMovies.map((movie, index) => <li key={movie.id}><span className="home-view-list__rank">{String(index + 1).padStart(2, '0')}</span><div className="top-movies__info">{getMediaImage(movie.image) && <img alt={movie.title} className="top-movies__thumb" src={getMediaImage(movie.image)} />}<div className="top-movies__text"><strong>{movie.title}</strong><small>{movie.year} · {movie.genres.join(' · ')}</small></div></div><span className="home-view-list__count">{movie.viewCount == null ? 'Vistas sin registrar' : `${movie.viewCount.toLocaleString('es-ES')} vistas`}</span></li>)}</ol></section>
0
      <section className="home-section home-section--categories"><div className="home-section__heading"><div><span className="home-eyebrow">Encuentra tu próxima historia</span><h2>Categorías</h2></div></div><div className="home-category-grid">{(categoriesData as string[]).map((category, index) => <article className={`home-category home-category--${index + 1}`} key={category}><span className="home-category__number">0{index + 1}</span><strong>{category}</strong><span className="home-category__arrow" aria-hidden="true">✦</span></article>)}</div></section>
    </main>
  )
}
