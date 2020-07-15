// implement SearchBar component here
import React from 'react';
import CreateInput from './CreateInput';
import CreateComboBox2 from './CreateComboBox2';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <CreateInput
          name="title" title="Inclui o texto: "
          value={this.props.searchText} function={this.props.onSearchTextChange}
        />
        <label htmlFor="fav">
          Mostrar somente favoritos{' '}
          <input
            type="checkbox" id="fav" name="favoritos"
            checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
          />
        </label>
        <CreateComboBox2
          name="genre" title="Filtrar por gênero: " value={this.props.selectedGenre}
          function={this.props.onSelectedGenreChange}
        />
      </form>
    );
  }
}

export default SearchBar;
