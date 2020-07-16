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
    this.SubtitleInput = this.SubtitleInput.bind(this);
    this.ChangeHandler = this.ChangeHandler.bind(this);
    this.ImageInput = this.ImageInput.bind(this);
    this.SinopseInput = this.SinopseInput.bind(this);
  }

  ChangeHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  TitleInput() {
    return (
      <label htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.ChangeHandler}
        />
      </label>
    );
  }

  SubtitleInput() {
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          onChange={this.ChangeHandler}
        />
      </label>
    );
  }

  ImageInput() {
    return (
      <label htmlFor="image">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          onChange={this.ChangeHandler}
        />
      </label>
    );
  }

  SinopseInput() {
    return (
      <label htmlFor="sinopse">
        Sinopse
        <input
          type="textarea"
          name="storyline"
          value={this.state.storyline}
          onChange={this.ChangeHandler}
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.TitleInput()}
        {this.SubtitleInput()}
        {this.ImageInput()}
        {this.SinopseInput()}
      </form>
    );
  }
}

export default AddMovie;
