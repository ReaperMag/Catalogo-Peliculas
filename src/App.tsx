import { useState } from 'react'
import './App.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { MoviesProvider } from './contexts/MoviesContext'
import { ActorDetailPage } from './pages/ActorDetailPage'
import { HomePage } from './pages/HomePage'
import { MovieDetailPage } from './pages/MovieDetailPage'
import { MoviesPage } from './pages/MoviesPage'
import { SearchPage } from './pages/SearchPage'
import { SchoolOfRockTemplate } from './pages/SchoolOfRockTemplate'
import { TedTemplate } from './pages/TedTemplate'
import { DeadpoolWolverineTemplate } from './pages/DeadpoolWolverineTemplate'
import { QuePasoAyerTemplate } from './pages/QuePasoAyerTemplate'
import { YDondeEstaElFantasmaTemplate } from './pages/YDondeEstaElFantasmaTemplate'
import { SeriesDetailPage } from './pages/SeriesDetailPage'
import type { PageKey } from './types/movie'

function App() {
  const [activePage, setActivePage] = useState<PageKey>('home')
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null)
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null)
  const [selectedActorId, setSelectedActorId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const navigate = (page: PageKey) => {
    if (page === 'movies') setSelectedCategory(null)
    setActivePage(page)
  }
  const selectCategory = (category: string) => {
    setSelectedCategory(category)
    setActivePage('movies')
  }
  const selectMovie = (id: string) => { setSelectedMovieId(id); setActivePage('detail') }
  const selectSeries = (id: string) => { setSelectedSeriesId(id); setActivePage('series') }
  const selectActor = (id: string) => { setSelectedActorId(id); setActivePage('actor') }
  const navigateFromSchoolTemplate = (destination: 'inicio' | 'peliculas' | 'series' | 'celebridades') => {
    if (destination === 'peliculas') {
      setSelectedCategory(null)
      setActivePage('movies')
      return
    }

    setActivePage('home')
    const targetId = destination === 'series' ? 'home-series' : destination === 'celebridades' ? 'home-actors' : null
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (targetId) document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    })
  }
  const showingSchoolTemplate = activePage === 'detail' && selectedMovieId === 'school-of-rock'
  const showingTedTemplate = activePage === 'detail' && selectedMovieId === 'ted'
  const showingDeadpoolWolverineTemplate = activePage === 'detail' && selectedMovieId === 'deadpool-wolverine'
  const showingQuePasoAyerTemplate = activePage === 'detail' && selectedMovieId === 'que-paso-ayer'
  const showingYDondeEstaElFantasmaTemplate = activePage === 'detail' && selectedMovieId === 'y-donde-esta-el-fantasma'
  const showingCustomTemplate = showingSchoolTemplate || showingTedTemplate || showingDeadpoolWolverineTemplate || showingQuePasoAyerTemplate || showingYDondeEstaElFantasmaTemplate

  return (
    <MoviesProvider>
      <div className={showingCustomTemplate ? 'app-shell app-shell--template' : activePage === 'home' ? 'app-shell app-shell--home' : 'app-shell'}>
        {showingSchoolTemplate ? <SchoolOfRockTemplate onNavigate={navigateFromSchoolTemplate} /> : showingTedTemplate ? <TedTemplate onNavigate={navigateFromSchoolTemplate} /> : showingDeadpoolWolverineTemplate ? <DeadpoolWolverineTemplate onNavigate={navigateFromSchoolTemplate} /> : showingQuePasoAyerTemplate ? <QuePasoAyerTemplate onNavigate={navigateFromSchoolTemplate} /> : showingYDondeEstaElFantasmaTemplate ? <YDondeEstaElFantasmaTemplate onNavigate={navigateFromSchoolTemplate} /> : <>
          <Header activePage={activePage} onNavigate={navigate} />
          {activePage === 'home' && <HomePage onNavigate={navigate} onSelectCategory={selectCategory} onSelectMovie={selectMovie} onSelectSeries={selectSeries} onSelectActor={selectActor} />}
          {activePage === 'movies' && <MoviesPage selectedCategory={selectedCategory} onSelectMovie={selectMovie} />}
          {activePage === 'search' && <SearchPage onSelectMovie={selectMovie} />}
          {activePage === 'detail' && <MovieDetailPage movieId={selectedMovieId} onBack={() => setActivePage('movies')} />}
          {activePage === 'series' && <SeriesDetailPage seriesId={selectedSeriesId} onNavigate={navigate} />}
          {activePage === 'actor' && <ActorDetailPage actorId={selectedActorId} onNavigate={navigate} />}
          <Footer />
        </>}
      </div>
    </MoviesProvider>
  )
}

export default App
