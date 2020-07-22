// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.filterMovie = this.filterMovie.bind(this);
    const movie = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movie,
    };
  }

  filterMovie() {
    const { selectedGenre, movies, searchText, bookmarkedOnly } = this.state;

    if (bookmarkedOnly) return movies.filter((movie) => movie.bookmarked);
    if (selectedGenre.length) return movies.filter((movie) => movie.genre === selectedGenre);

    return movies.filter((movie) => (
      (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText))
    ));
  }

  render() {
    return (
      <section>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(e) => { this.setState({ searchText: e.target.value }); }}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => { this.setState({ bookmarkedOnly: e.target.checked }); }}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => { this.setState({ selectedGenre: e.target.value }); }}
        />
        <MovieList movie={this.filterMovie} />
      </section>
    );
  }
}

export default MovieLibrary;
