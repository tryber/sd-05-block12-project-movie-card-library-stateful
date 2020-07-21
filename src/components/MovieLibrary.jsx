// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
// Carla
class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.changeText = this.changeText.bind(this);
    this.changeBook = this.changeBook.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
  }

  changeText(event) {
    this.setState({ searchText: event.target.value });
  }

  changeBook() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  changeGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    // const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.changeText}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.changeBook}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.changeGenre}
        />
      </div>
    );
  }
}

export default MovieLibrary;
