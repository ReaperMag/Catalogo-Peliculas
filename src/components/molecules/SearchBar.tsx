import { Button } from '../common/Button'

export function SearchBar() {
  return (
    <form className="search-bar">
      <label htmlFor="movie-search">Buscar pelicula</label>
      <div>
        <input id="movie-search" name="movie-search" placeholder="Titulo, genero o ano" type="search" />
        <Button>Buscar</Button>
      </div>
    </form>
  )
}
