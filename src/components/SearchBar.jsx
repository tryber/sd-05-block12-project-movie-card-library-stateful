// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    render() {
      const searchText = this.props.searchText;
      const onSearchTextChange = this.props.onSearchTextChange;
      const bookmarkedOnly = this.props.bookmarkedOnly;
      const onBookmarkedChange = this.props.onBookmarkedChange;
      const selectedGenre = this.props.selectedGenre;
      const onSelectedGenreChange = this.props.onSelectedGenreChange;
      return(
        <div className="formContainer">
          <form>
            <label>
              Nome do Filme:{" "}
              <input type="text" name="title" value={searchText} onChange={onSearchTextChange} />
            </label>
            <label htmlFor="fav">
              Mostrar Apenas Favoritos{' '}
              <input type="checkbox" id="fav" name="favoritos" value={bookmarkedOnly} onChange={onBookmarkedChange} />
            </label>
            <label>
              Genêro:{" "}
              <select name="genero" value={selectedGenre} onChange={onSelectedGenreChange}>
                <option value="action">action</option>
                <option value="fantasy">fantasy</option>
                <option value="comedy">comedy</option>
                <option value="terror">terror</option>
              </select>
            </label>
          </form>
        </div>

      )
    }
  }
}

export default SearchBar;
