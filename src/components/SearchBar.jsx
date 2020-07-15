import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <fieldset>
        <form>
          <label> 
            Inclui o texto:
            <input type="text" value={searchText} onChange={onSearchTextChange} />
          </label>

          <label htmlFor="checkbox">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange} 
            />
          </label>

        <label>
          Filtrar por gênero
          <select name="genre-filter" id="genre-filter" value={selectedGenre} onChange={onSelectedGenreChange}>

            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>

        </form>
      </fieldset>
    );
  }
}

export default SearchBar;

// Renderize um select dentro do formulário em SearchBar
// O select deve ter uma label associada com o texto: "Filtrar por gênero";

// A propriedade value do select deve receber o valor da prop selectedGenre;

// A propriedade onChange do input deve receber o valor da prop onSelectedGenreChange;

// O select deve renderizar quatro tags option, com as opções de filtragem por gênero, na seguinte ordem:

// Todos, com o valor "";
// Ação, com o valor action;
// Comédia, com o valor comedy;
// Suspense, com o valor thriller.
// Crie um componente chamado AddMovie
