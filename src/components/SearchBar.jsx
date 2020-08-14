import React from 'react';

export default props => {
  const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
  } = props

  return (
    <div>
      <form>
        <label htmlFor="inpu">Inclui o texto:</label>
        <input id="inpu" type="text" value={searchText} onChange={onSearchTextChange} />
        <label htmlFor="somenteFavoritos">Mostrar somente favoritos</label>
        <input id="somenteFavoritos" type="checkbox" checked={ bookmarkedOnly} onChange={onBookmarkedChange}/>
        <label htmlFor="selectGenero">Filtrar por gênero</label>
        <select id="selectGenero" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense </option>          
        </select>
        </form>      
    </div>
  )
}
