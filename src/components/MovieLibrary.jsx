import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  onSearchChange() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly) return movies.filter(({ bookmarked }) => bookmarked);
    if (selectedGenre) return movies.filter(({ genre }) => genre === selectedGenre);
    if (searchText) {
      return movies.filter(
        ({ title, subtitle, storyline }) => title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText),
      );
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="container">
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={this.onSearchChange()} />
      </div>
    );
  }
}

export default MovieLibrary;
