import { PlaceholderSection } from '../components/common/PlaceholderSection'
import { MovieCard } from '../components/molecules/MovieCard'
import { useMovies } from '../contexts/MoviesContext'

type FavoritesPageProps = {
  onSelectMovie: (movieId: string) => void
}

export function FavoritesPage({ onSelectMovie }: FavoritesPageProps) {
  const { favoriteMovies, isFavorite, toggleFavorite } = useMovies()

  return (
    <main className="page-stack">
      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Coleccion</span>
          <h1>Favoritos</h1>
          <p>Persistencia inicial con localStorage bajo la clave favorite-movies.</p>
        </div>

        {favoriteMovies.length > 0 ? (
          <div className="movie-grid">
            {favoriteMovies.map((movie) => (
              <MovieCard
                isFavorite={isFavorite(movie.id)}
                key={movie.id}
                movie={movie}
                onToggleFavorite={toggleFavorite}
                onViewDetail={onSelectMovie}
              />
            ))}
          </div>
        ) : (
          <PlaceholderSection
            description="Marca peliculas como favoritas para probar el flujo base."
            slots={['FavoritesList', 'LocalStorageSync']}
            title="Todavia no hay favoritos"
          />
        )}
      </section>
    </main>
  )
}
