import React, { Component } from 'react';

class SearchBar extends Component {
  render() { 
    return ( 
      <div>
        {/* props:
            searchText, uma string
            onSearchTextChange, uma callback
            bookmarkedOnly, um boolean
            onBookmarkedChange, uma callback
            selectedGenre, uma string
            onSelectedGenreChange, uma callback 
        */}

        <form>

          <input 
            type="text"
            id="text"
            value={this.props.SearchText}
            onChange={this.props.onSearchTextChange}
          ></input>
          <label htmlFor="text">Inclui o texto:</label>

          <input 
            type="radio"
            id="checkbox"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChanged}
          ></input>
          <label htmlFor="checkbox">Mostrar somente favoritos:</label>

          <select 
            id="select"
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <label htmlFor="select">Filtrar por gênero</label>

        </form>
      </div>
     );
  }
}
 
export default SearchBar;