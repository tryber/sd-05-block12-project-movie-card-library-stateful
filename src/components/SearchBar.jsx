// implement SearchBar component here
import React from 'react';
import TextoDeEntrada from './TextoDeEntrada';
import SelecaoFavorito from './SelecaoFavorito';
import Genero from './FilmeGenero';
import '../App.css';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onSearchTextChange = this.onSearchTextChange.bind(this);
  // }

  // onSearchTextChange() {
  // }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly = true,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    // DH => texto que vai aparecer nas labels, e tambem a identificacao entre label seu input
    return (
      <fieldset className="searchBar">
        <form>
          <TextoDeEntrada onChange={onSearchTextChange} DH="Inclui o texto" value={searchText} />
          <SelecaoFavorito
            onChange={onBookmarkedChange}
            DH="Mostrar somente favoritos"
            checked={bookmarkedOnly}
          />
          <Genero onChange={onSelectedGenreChange} DH="Filtrar por gênero:" value={selectedGenre} />
        </form>
      </fieldset>
    );
  }
}

// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback

export default SearchBar;
