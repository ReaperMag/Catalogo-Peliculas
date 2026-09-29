// Carrusel de categorías del Home - Leidy
import { useRef } from 'react'
import { useMovies } from '../../contexts/useMovies'
import { filterByCategory } from '../../lib/categories'
import './CategoryCarousel.css'

type CategoryCarouselProps = {
  categories: string[]
  onSelectCategory: (category: string) => void
}

export function CategoryCarousel({ categories, onSelectCategory }: CategoryCarouselProps) {
  const { movies, series } = useMovies()
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: number) => {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  return (
    <div className="category-carousel">
      <button aria-label="Categorías anteriores" className="category-carousel__arrow" onClick={() => scroll(-1)} type="button">‹</button>

      <div className="category-carousel__track" ref={trackRef}>
        {categories.map((category, index) => {
          const total = filterByCategory(movies, category).length + filterByCategory(series, category).length

          return (
            <button className="home-category category-carousel__item" key={category} onClick={() => onSelectCategory(category)} type="button">
              <span className="home-category__number">{String(index + 1).padStart(2, '0')}</span>
              <strong>{category}</strong>
              <small className="category-carousel__count">{total} {total === 1 ? 'título' : 'títulos'}</small>
              <span aria-hidden="true" className="home-category__arrow">✦</span>
            </button>
          )
        })}
      </div>

      <button aria-label="Categorías siguientes" className="category-carousel__arrow" onClick={() => scroll(1)} type="button">›</button>
    </div>
  )
}
