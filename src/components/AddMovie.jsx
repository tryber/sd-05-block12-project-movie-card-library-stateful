// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form>
        <label htmlFor="sub ">
          <input type="text" />
        </label>
        <label htmlFor="title">
          <input type="text" />
        </label>
        <label htmlFor="img">
          <input type="text" />
        </label>
        <label htmlFor="sinopse">
          <input type="text" />
        </label>
        <label htmlFor="avaliacao">
          <input type="text" />
        </label>
        <label htmlFor="genero">
          <input type="text" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
