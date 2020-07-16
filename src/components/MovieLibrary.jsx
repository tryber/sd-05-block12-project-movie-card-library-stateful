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

  // handleChange(event) {
  //   const genre = event.target.value;
  //   this.setState = {
  //     selectedGenre: genre,
  //   };
  // }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: true })}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
      </div>
    );
  }
}

export default MovieLibrary;
