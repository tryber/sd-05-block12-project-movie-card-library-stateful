import React from 'react';

class SearchBar extends React.Component {

  search() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    return (
      <div>
        <label htmlFor="searchText">Inclui o texto:
          <input
            onChange={onSearchTextChange}
            className="searchText"
            type="text"
            value={searchText}
            name="searchText"
          />
        </label>
      </div>
    );
  }

  favorites() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="Favorites">Mostrar somente favoritos
        </label>
        <input
          type="checkbox"
          id="Favorites" checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </div>
    );
  }

  selectGenere() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genreBox"> Filtrar por gênero:
    <select
      name="genreBox"
      value={selectedGenre}
      onChange={onSelectedGenreChange} >
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
      <form>
        <div>
          {this.search()}
        </div>
        <div>
          {this.favorites()}
        </div>
        <div>
          {this.selectGenere()}
        </div>
      </form>
    );
  }
}

export default SearchBar;
