import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (searchText) {
      const ignoreCase = searchText.toLowerCase();
      return movies.filter(
        (movie) => movie.title.toLowerCase().includes(ignoreCase)
        || movie.subtitle.toLowerCase().includes(ignoreCase)
        || movie.storyline.toLowerCase().includes(ignoreCase),
      );
    }
    if (bookmarkedOnly) return movies.filter((movie) => movie.bookmarked === true);
    if (selectedGenre) return movies.filter((movie) => movie.genre === selectedGenre);
    return movies;
  }

  newMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.newMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
