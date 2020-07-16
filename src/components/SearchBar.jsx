import React from 'react';
import InputComponent from './InputComponent';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          <InputComponent labelName='Inclui o texto:' type='text' value={searchText} callFunction={onSearchTextChange} />
          <label>Mostrar somente favoritos</label>
          <input
            type="checkbox"
            value={bookmarkedOnly}
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
          />
          <label>Filtrar por gênero</label>
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
