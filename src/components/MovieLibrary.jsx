// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  async onSearchTextChange(e) {
    const { value } = e.target;
    await this.setState({ searchText: value });
    const movieList = this.props.movies;
    const searchTerm = this.state.searchText;
    let filteredList = movieList.filter((movie) => {
      if (movie.title.includes(searchTerm)) {
        return movie;
      }
      if (movie.subtitle.includes(searchTerm)) {
        return movie;
      }
      if (movie.storyline.includes(searchTerm)) {
        return movie;
      }
      return false;
    });
    if (searchTerm === '') {
      filteredList = this.props.movies;
    }
    this.setState({ movies: filteredList });
  }

  async onBookmarkedChange(event) {
    const { checked } = event.target;
    await this.setState({ bookmarkedOnly: checked });
    const movieList = this.state.movies;
    const marked = this.state.bookmarkedOnly;
    if (marked === true) {
      const filteredList = movieList.filter((movie) => {
        if (movie.bookmarked === true) {
          return movie;
        }
        return false;
      });
      this.setState({ movies: filteredList });
    }
  }

  async onSelectedGenreChange(event) {
    const { value } = event.target;
    await this.setState({ selectedGenre: value });
    const movieList = this.props.movies;
    const selectedGenre = this.state.selectedGenre;
    const filteredList = movieList.filter((movie) => {
      if (movie.genre === selectedGenre || selectedGenre === '') {
        return movie;
      }
      return false;
    });
    this.setState({ movies: filteredList });
  }

  onClick(movieInform) {
    const newMovie = movieInform;
    this.setState({ movies: [...this.props.movies, newMovie] });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
