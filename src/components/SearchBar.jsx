import React from 'react';

class SearchBar extends React.Component {
  render() {
    // descontrução de objeto
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
      
    return(
      <form>
        <label htmlFor="find">Inclui o texto: </label>
        <input type="text" name="find" value={searchText} onChange={onSearchTextChange} />
        <label htmlFor="find2">Mostrar somente favoritos</label>
        <input type="checkbox" name="find2" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label htmlFor="find3">Filtrar por gênero</label>
        <select name="find3" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select> 
      </form>
    )
  }
}

export default SearchBar;
