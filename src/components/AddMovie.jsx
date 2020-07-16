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
    this.TitleInput = this.TitleInput.bind(this);
    this.ChangeHandler = this.ChangeHandler.bind(this);
  }

  ChangeHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  TitleInput() {
    return (
      <label htmlFor="title">
        Título
        <input type="text" name="title" value={this.state.title} onChange={this.ChangeHandler} />
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.TitleInput()}
      </form>
    );
  }
}

export default AddMovie;
