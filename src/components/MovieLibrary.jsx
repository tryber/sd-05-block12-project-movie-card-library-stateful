// implement MovieLibrary component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchText from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Components {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.stateChange = this.changeState.bind(this);
    this.changeBookmark = this.changeBookmark.bind(this);
  }

  changeState(event) {
    this.setState({
      searchText: event.target.value,
    });
  }
  changeBookmark(event) {
    this.setState({
      bookmarkedOnly: !this.target.value});
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar searchText={this.state.searchText}
        onSearchTextChange={this.changeState}/>
        <MovieList movies={this.props.movies}/>
        <AddMovie/>
      </div>
    );
  }
}

export default MovieLibrary;
