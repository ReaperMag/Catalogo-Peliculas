import { PlaceholderSection } from '../components/common/PlaceholderSection'
import { SearchBar } from '../components/molecules/SearchBar'

export function SearchPage() {
  return (
    <main className="page-stack">
      <section className="content-section">
        <div className="section-heading">
          <span className="eyebrow">Busqueda</span>
          <h1>Buscar peliculas</h1>
          <p>Formulario inicial listo para conectar con estado local y filtros.</p>
        </div>

        <SearchBar />
      </section>

      <PlaceholderSection
        description="Cuando exista la logica de busqueda, este bloque puede mostrar resultados, estados vacios y sugerencias."
        slots={['SearchResults', 'EmptyState', 'RecentSearches']}
        title="Resultados pendientes"
      />
    </main>
  )
}
