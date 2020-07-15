// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    } 
  }
//  searchText, uma string
//  onSearchTextChange, uma callback
//  bookmarkedOnly, um boolean
//  onBookmarkedChange, uma callback
//  selectedGenre, uma string
//  onSelectedGenreChange, uma callback

  render() {
  //  const { movie } = this.props;
  //  const { title, subtitle, storyline, rating, imagePath } = movie;
    return(
      <div>
        <form>
          <label>
            Inclui o texto:
            <input name="inputTxt" type="text" value={props.searchText} onChange={props.onSearchTextChange}/>
          </label>
          <label>
          Mostrar somente favoritos
            <input name="favorito" type="checkBox" checked={props.bookmarkedOnly} onChange={props.onBookmarkedChange} />
          </label>
          <label>
            Filtrar por gênero
            <select value={props.selectedGenre} onChange={props.onSelectedGenreChange}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar
