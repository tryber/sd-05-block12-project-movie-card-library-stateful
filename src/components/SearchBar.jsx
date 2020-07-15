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
              Nome do Filme:{' '}
              <input type="text" />
            </label>

          </form>
        </div>

      )
    }
  }
}

export default SearchBar;
