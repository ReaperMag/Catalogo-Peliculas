import { useState } from 'react'
import './App.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { MoviesProvider } from './contexts/MoviesContext'
import { FavoritesPage } from './pages/FavoritesPage'
import { HomePage } from './pages/HomePage'
import { MovieDetailPage } from './pages/MovieDetailPage'
import { MoviesPage } from './pages/MoviesPage'
import { SearchPage } from './pages/SearchPage'
import type { PageKey } from './types/movie'

function App() {
  const [activePage, setActivePage] = useState<PageKey>('home')
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null)

  const selectMovie = (movieId: string) => {
    setSelectedMovieId(movieId)
    setActivePage('detail')
  }

  return (
    <MoviesProvider>
      <div className="app-shell">
        <Header activePage={activePage} onNavigate={setActivePage} />

        {activePage === 'home' && <HomePage onNavigate={setActivePage} onSelectMovie={selectMovie} />}
        {activePage === 'movies' && <MoviesPage onSelectMovie={selectMovie} />}
        {activePage === 'search' && <SearchPage />}
        {activePage === 'favorites' && <FavoritesPage onSelectMovie={selectMovie} />}
        {activePage === 'detail' && <MovieDetailPage movieId={selectedMovieId} onNavigate={setActivePage} />}

        <Footer />
      </div>
    </MoviesProvider>
  )
}

export default App
