import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
