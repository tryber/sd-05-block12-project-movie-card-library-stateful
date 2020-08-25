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
    this.setState((state) => {
      return { movies: [...state.movies, movie] };
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={ this.state.movies } />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}
