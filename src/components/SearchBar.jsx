import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form className="formulario">
        <div className="search">
          <label>
          Inclui o texto:<br></br>
          <input
            className="searchText caixaImput" type="text"
            value={searchText} onChange={onSearchTextChange}
          />
          </label>
        </div>
        <div className="search">
          <label>
          <input className="caixaCheck" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          Mostrar somente favoritos
          </label>
        </div>
        <div>
          <label>
            Filtrar por gênero<br></br>
          <select className="caixaImput" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          </label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
