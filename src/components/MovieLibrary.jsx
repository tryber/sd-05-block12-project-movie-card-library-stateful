import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import data from '../data';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
      movies: [...data],
    };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}
