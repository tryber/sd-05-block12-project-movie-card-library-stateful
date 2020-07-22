// implement MovieLibrary component here
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

    this.filteredMovies = this.filteredMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      return movies.filter((movie) =>
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText),
      );
    }
    return movies;
  }

  addMovie(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly })}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
