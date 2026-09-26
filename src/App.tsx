import { useState } from 'react'
import './App.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { MoviesProvider } from './contexts/MoviesContext'
import { ActorDetailPage } from './pages/ActorDetailPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { HomePage } from './pages/HomePage'
import { MovieDetailPage } from './pages/MovieDetailPage'
import { MoviesPage } from './pages/MoviesPage'
import { SearchPage } from './pages/SearchPage'
import { SeriesDetailPage } from './pages/SeriesDetailPage'
import type { PageKey } from './types/movie'

function App() {
  const [activePage, setActivePage] = useState<PageKey>('home')
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null)
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null)
  const [selectedActorId, setSelectedActorId] = useState<string | null>(null)
  const selectMovie = (id: string) => { setSelectedMovieId(id); setActivePage('detail') }
  const selectSeries = (id: string) => { setSelectedSeriesId(id); setActivePage('series') }
  const selectActor = (id: string) => { setSelectedActorId(id); setActivePage('actor') }

  return (
    <MoviesProvider>
      <div className="app-shell">
        <Header activePage={activePage} onNavigate={setActivePage} />
        {activePage === 'home' && <HomePage onNavigate={setActivePage} onSelectMovie={selectMovie} onSelectSeries={selectSeries} onSelectActor={selectActor} />}
        {activePage === 'movies' && <MoviesPage onSelectMovie={selectMovie} />}
        {activePage === 'search' && <SearchPage />}
        {activePage === 'favorites' && <FavoritesPage onSelectMovie={selectMovie} />}
        {activePage === 'detail' && <MovieDetailPage movieId={selectedMovieId} onNavigate={setActivePage} />}
        {activePage === 'series' && <SeriesDetailPage seriesId={selectedSeriesId} onNavigate={setActivePage} />}
        {activePage === 'actor' && <ActorDetailPage actorId={selectedActorId} onNavigate={setActivePage} />}
        <Footer />
      </div>
    </MoviesProvider>
  )
}

export default App
