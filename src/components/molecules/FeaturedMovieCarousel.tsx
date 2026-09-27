import { useEffect, useState } from 'react'
import type { FocusEvent } from 'react'
import type { Movie, PageKey } from '../../types/movie'
import { getMediaImage } from '../../lib/mediaImages'
import { Button } from '../common/Button'

type FeaturedMovieCarouselProps = {
  movies: Movie[]
  onNavigate: (page: PageKey) => void
  onSelectMovie: (movieId: string) => void
}

export function FeaturedMovieCarousel({ movies, onNavigate, onSelectMovie }: FeaturedMovieCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const shouldPause = isPaused || isHovered || isFocused

  useEffect(() => {
    if (movies.length < 2 || shouldPause) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % movies.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [movies.length, shouldPause])

  if (movies.length === 0) return null

  const movie = movies[activeIndex % movies.length]
  const imageUrl = getMediaImage(movie.image)
  const changeSlide = (direction: number) => setActiveIndex((current) => (current + direction + movies.length) % movies.length)
  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false)
  }

  return (
    <section aria-label="Películas destacadas" aria-roledescription="carrusel" className="home-carousel" onBlurCapture={handleBlur} onFocusCapture={() => setIsFocused(true)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="home-carousel__art" aria-hidden="true">
        {imageUrl && <img alt="" src={imageUrl} />}
      </div>
      <div className="home-carousel__shade" aria-hidden="true" />
      <div aria-live="polite" className="home-carousel__content" key={movie.id} role="group" aria-roledescription="diapositiva">
        <span className="home-eyebrow">Película destacada · CineBase</span>
        <h1>{movie.title}</h1>
        <div className="home-carousel__meta">
          <span>{movie.year}</span><span>★ {movie.rating}</span><span>{movie.genres.join(' · ')}</span>
        </div>
        <p>{movie.synopsis}</p>
        <div className="home-carousel__actions">
          <Button onClick={() => onSelectMovie(movie.id)}>▶ Ver ficha</Button>
          <Button onClick={() => onNavigate('movies')} variant="secondary">Ver catálogo</Button>
        </div>
      </div>
      <div className="home-carousel__controls">
        <button aria-label="Película anterior" onClick={() => changeSlide(-1)} type="button">‹</button>
        <div aria-label={`Diapositiva ${activeIndex + 1} de ${movies.length}`} className="home-carousel__indicators">
          {movies.map((item, index) => <button aria-label={`Mostrar ${item.title}`} aria-current={activeIndex === index ? 'true' : undefined} className={activeIndex === index ? 'is-active' : ''} key={item.id} onClick={() => setActiveIndex(index)} type="button" />)}
        </div>
        <span className="home-carousel__count">{String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(movies.length).padStart(2, '0')}</span>
        <button aria-label={isPaused ? 'Reanudar carrusel automático' : 'Pausar carrusel automático'} aria-pressed={isPaused} onClick={() => setIsPaused((paused) => !paused)} type="button">{isPaused ? '▶' : 'Ⅱ'}</button>
        <button aria-label="Película siguiente" onClick={() => changeSlide(1)} type="button">›</button>
      </div>
    </section>
  )
}
