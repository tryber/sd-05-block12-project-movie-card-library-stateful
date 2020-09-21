import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import data from '../data';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...data],
    };
    this.click = this.click.bind(this);
    this.add = this.add.bind(this);
  }

  click({ target }) {
    this.setState({
      [target]: target.value,
    })
  }

  add(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          onSearchTextChange={this.click}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.click}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.click}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.add} />
      </div>
    );
  }
}
