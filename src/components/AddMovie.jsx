import React from 'react';

import 
class addMovie extends React.Component {  
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
}

class AddMovie extends React.Components {
  render() {
    const { onClick } = this.props;
    return(
      <form>
        <label htmlFor="link1">Título</label>
        <input type="text" name="link1" value={this.state[input.title]} />
      </form>
    )
  }
}

export default AddMovie;
