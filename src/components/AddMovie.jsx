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
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
          <input id="title"/>
        </form>
      </div>
    );
  }
}