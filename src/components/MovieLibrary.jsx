import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import data from '../data';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={data} />
        <AddMovie />
      </div>
    );
  }
}
