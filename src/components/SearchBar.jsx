// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  TextInput = () => {
    return (
      <label htmlFor="text">
        Inclui o Texto:
        <input
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  CheckBoxInput = () => {
    return (
      <label htmlFor="checkbox">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }

  ListInput = () => {
    return (
      <label htmlFor="genre-list">
        Filtrar por gênero
        <select
          name="genre-list"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.TextInput()}
          {this.CheckBoxInput()}
          {this.ListInput()}
        </form>
      </div>
    );
  }
}

export default SearchBar;
