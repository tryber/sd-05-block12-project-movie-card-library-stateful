// implement MovieLibrary component here
import React from 'react';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    }
  }
  render() {
    return (
      <div>teste</div>
    );
  }
}