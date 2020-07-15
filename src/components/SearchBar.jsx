import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <form>
          <label htmlFor="serchText">
            Inclui o texto:
            <input id="serchText" type="text"
             value={this.props.searchText} onChange={this.props.onSearchTextChange} />
          </label>
          <label htmlFor="bookmarkedOnly">Mostrar somente favoritos
          </label>
          <input id="bookmarkedOnly" type="checkbox" checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}/>
          <label htmlFor="selectedGenre">Filtrar por gênero</label>
          <select id="selectedGenre" value={this.props.selectedGenre}
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