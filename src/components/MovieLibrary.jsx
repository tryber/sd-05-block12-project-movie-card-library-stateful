import React from 'react';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  render() {
    const { movies } = this.props;
    console.log(this.state);
    return (
      <p>{movies[0].title}</p>
    );
  }
}

export default MovieLibrary;
