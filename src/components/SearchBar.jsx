import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <form>
          <label for="serchText">
            Inclui o texto:
            <input name="serchText" type="text"
             value={this.props.searchText} onChange={this.props.onSearchTextChange} />
          </label>
          <label for="bookmarkedOnly">Mostrar somente favoritos
          </label>
          <input name="bookmarkedOnly" type="checkbox" checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}/>
          <label for="selectedGenre">Filtrar por gênero</label>
          <select name="selectedGenre" value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}>
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