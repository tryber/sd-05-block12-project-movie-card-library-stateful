import React from 'react';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
  }

  render() {
    const { movies } = this.props;
    return(
      <div>
      </div>
    );
  }
}

export default MovieLibrary;
