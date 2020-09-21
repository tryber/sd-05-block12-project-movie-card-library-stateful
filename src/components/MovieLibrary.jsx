import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import data from '../data';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...data],
    };

    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  filter() {
    const { movies } = this.state;
    return movies;
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const select = this.filter();
    return (
      <div>
        <SearchBar
          searchText={searchText}
          mark={this.mark}
          bookmarkedOnly={bookmarkedOnly}
          search={this.search}
          selectedGenre={selectedGenre}
          genre={this.genre}
        />
        <MovieList movies={select} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}
