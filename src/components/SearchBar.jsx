import React from 'react';
import InputComponent from './InputComponent';

class SearchBar extends React.Component {
  render() {
    const { 
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange 
    } = this.props;
    return (
        <form>
          <InputComponent labelName="Inclui o texto:" type='text' value={searchText} 
          callFunction={onSearchTextChange} />
          <label htmlFor="book">Mostrar somente favoritos</label>
          <input type="checkbox" name="book" value={bookmarkedOnly}
            onChange={onBookmarkedChange} checked={bookmarkedOnly}
          />
          <label htmlFor="select">Filtrar por gênero</label>
          <select value={selectedGenre} onChange={onSelectedGenreChange} name="select">
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
    );
  }
}

export default SearchBar;
