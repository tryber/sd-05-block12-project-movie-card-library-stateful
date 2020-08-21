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
    function searchB() {
      return <SearchBar
        searchText={searchText}
        bookmarkedOnly={bookmarkedOnly}
        selectedGenre={selectedGenre} />
    }
    return (
      <div>
        {searchB()}

        <MovieList movies={movies} />
      </div>
    );
  }
}
