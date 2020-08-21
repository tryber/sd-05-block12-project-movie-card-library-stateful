import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

export default class MovieLibrary extends React.Component {
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
  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
    <div>
      <SearchBar searchText={searchText} bookmarkedOnly={bookmarkedOnly} selectedGenre={selectedGenre} />
        <MovieList movies={movies} />
      </div>
    );
  }
}
