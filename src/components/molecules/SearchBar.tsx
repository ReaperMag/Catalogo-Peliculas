import { Button } from '../common/Button'

type SearchBarProps = {
  query: string
  onQueryChange: (query: string) => void
  onSearch: () => void
}

export function SearchBar({ onQueryChange, onSearch, query }: SearchBarProps) {
  return (
    <form className="search-bar" onSubmit={(event) => { event.preventDefault(); onSearch() }}>
      <label htmlFor="movie-search">Buscar películas y series</label>
      <div>
        <input autoComplete="off" id="movie-search" name="movie-search" onChange={(event) => onQueryChange(event.target.value)} placeholder="Título, género o año" type="search" value={query} />
        <Button type="submit">Buscar</Button>
      </div>
    </form>
  )
}
