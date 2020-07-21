import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
      movies: '',
    };
  }

  render() {
    const { movies } = this.props;
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
