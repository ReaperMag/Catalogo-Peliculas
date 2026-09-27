import type { PageKey } from '../../types/movie'

const navItems: Array<{ label: string; page: PageKey }> = [
  { label: 'Inicio', page: 'home' },
  { label: 'Películas', page: 'movies' },
  { label: 'Buscar', page: 'search' },
]

type HeaderProps = {
  activePage: PageKey
  onNavigate: (page: PageKey) => void
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  return (
    <header className="app-header">
      <button className="brand" type="button" onClick={() => onNavigate('home')}>
        <span className="brand__mark">Cine</span>
        <span className="brand__text">Base</span>
      </button>

      <nav aria-label="Principal">
        {navItems.map((item) => (
          <button
            className={activePage === item.page ? 'nav-link nav-link--active' : 'nav-link'}
            key={item.page}
            onClick={() => onNavigate(item.page)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
