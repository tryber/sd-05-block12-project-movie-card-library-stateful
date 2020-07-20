import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.filteredMovie = this.filteredMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movie,
    };
  }

  filteredMovie() {
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
          onSearchTextChange={(event)
            => { this.setState({ searchText: event.target.value }) }}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event)
            => { this.setState({ bookmarkedOnly: event.target.checked }) }}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event)
            => { this.setState({ selectedGenre: event.target.value }) }}
        />
        <MovieList movie={this.filteredMovie} />
      </section>
    );
  }
}

export default MovieLibrary;
