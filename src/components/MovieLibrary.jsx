// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './components/SearchBar ';
import MovieList from './components/MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.registerMovie = this.registerMovie.bind(this);
    this.onsearchTextChange = this.onsearchTextChange.bind(this);
    this.onBookChange = this.onBookChange.bind(this);
    this.onselectChangeGenre = this.onselectChangeGenre.bind(this);
    this.exitFilter = this.exitFilter.bind(this);
  }
  onsearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onselectChangeGenre(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  onBookChange(e) {
    this.setState({ bookmarkedOnly: e.target.value });
  }

  registerMovie(film) {
    this.setState((state) => ({ movies: [...state.moveis, film] }));
  }

  exitFilter(list) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly === true) {
      return list.filter((film) => film.bookmarkedOnly === bookmarkedOnly);
    }
    if (selectedGenre !== '') {
      return list.filter((film) => film.genre === selectedGenre);
    }
    if (searchText !== '') {
      return list.filter(
        (filme) =>
          filme.title.includes(searchText) ||
          filme.subtitle.includes(searchText) ||
          filme.storyline.includes(searchText),
      );
    }
    return list;
  }
  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.exitFilter()(movies)} />
        <AddMovie onClick={this.registerMovie()} />
      </div>
    );
  }
}
