import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// HUGO
class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(event) {
    this.setState({
      searchText: event.target.value
      
    })
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.changeState} bookmarkedOnly={this.state.changeState} />
        <MovieList movies={this.props.movies} />
      
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
