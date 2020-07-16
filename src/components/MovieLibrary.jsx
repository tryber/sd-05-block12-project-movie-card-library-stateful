// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  handleChange(event) {
    this.setState = {
      searchText: event.target.value,
      bookmarkedOnly: true,
      selectedGenre: event.target.value,
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={() => this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={() => this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={() => this.handleChange}
        />
      </div>
    );
  }
}

export default MovieLibrary;
