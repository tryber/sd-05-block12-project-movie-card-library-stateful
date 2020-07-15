// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.TextInput = this.TextInput.bind(this);
    this.CheckBox = this.CheckBox.bind(this);
    this.Genre = this.Genre.bind(this);
  }

  TextInput() {
    return (
      <label htmlFor="text">
      Inclui o texto:
      <input
        type="text"
        value={this.props.searchText}
        onChange={this.props.onSearchTextChange}
      />
      </label>
    );
  }

  CheckBox() {
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

  Genre() {
    return (
      <label htmlFor="genre">
        Filtrar por gênero
        <select
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
          {this.CheckBox()}
          {this.Genre()}
        </form>
      </div>
    );
  }
}

export default SearchBar;
