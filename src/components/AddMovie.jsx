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
//    const { onClick } = this.props;
    return (
      <form action="">
        <h1>testando</h1>

      </form>
    );
  }
}

export default AddMovie;
