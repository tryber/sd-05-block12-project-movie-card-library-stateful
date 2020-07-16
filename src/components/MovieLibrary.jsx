// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';


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
    const { movies } = this.props;
    return (
      <div>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;
