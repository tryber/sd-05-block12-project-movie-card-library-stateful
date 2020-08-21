// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


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
  }
  changeSearchText(e) {
    this.setState({ searchText: e.target.value });
  }

  changeSelectedGenre(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  changeBookmarkedOnly() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  registerMovie(film) {
    this.setState((state) => ({ movies: [...state.moveis, film] }));
  }

  exitFilter(list) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly === true) {
      return list.filter((film) => film.bookmarked === true);
    }
    if (selectedGenre !== '') {
      return list.filter((film) => film.genre === selectedGenre);
    }
    if (searchText !== '') {
      return list.filter((list) => list.title.indexOf(searchText) >= 0 ||
        list.subtitle.indexOf(searchText) >= 0 ||
        list.storyline.indexOf(searchText) >= 0);
    }
    return list;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.exitFilter} />
        <AddMovie onClick={this.registerMovie} />
      </div>
    );
  }
}
