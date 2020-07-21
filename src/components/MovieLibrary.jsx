// implement MovieLibrary component here
import React from 'react';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }
  render() {
    // const { movies } = this.props;
    return (<div />);
  }
}

export default MovieLibrary;
