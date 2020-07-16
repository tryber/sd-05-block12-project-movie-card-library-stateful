// implement SearchBar component here
import React, { Component } from 'react';
import InputText from './InputText.jsx';
import InputTextarea from './InputTextarea.jsx';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const {
      onSearchTextChange,
      searchText,
      onSelectedGenreChange,
      selectedGenre,
      onBookmarkedChange,
      bookmarkedOnly,
    } = this.props;
    return (
      <form>
        <InputText 
          label="subtitle" visibletext="Subtítulo" value={searchText} change={onSearchTextChange}
        />
        <label htmlFor="favorites">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="style">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
