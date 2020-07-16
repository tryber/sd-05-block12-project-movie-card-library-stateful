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
    this.RatingInput = this.RatingInput.bind(this);
    this.SelectInput = this.SelectInput.bind(this);
    this.ChangeRating = this.ChangeRating.bind(this);
    this.ButtonInput = this.ButtonInput.bind(this);
    this.buttonAdd = this.buttonAdd.bind(this);
  }

  ChangeHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  ChangeRating(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  buttonAdd() {
    const onClick = this.props.onClick;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
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

  RatingInput() {
    return (
      <label htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          value={this.state.rating}
          onChange={this.ChangeRating}
        />
      </label>
    );
  }

  SelectInput() {
    return (
      <label htmlFor="select">
        Gênero
        <select name="genre" value={this.state.genre} onChange={this.ChangeHandler}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  ButtonInput() {
    return (
      <button onClick={this.buttonAdd}>Adicionar filme</button>
    );
  }

  render() {
    return (
      <form>
        {this.TitleInput()}
        {this.SubtitleInput()}
        {this.ImageInput()}
        {this.SinopseInput()}
        {this.RatingInput()}
        {this.SelectInput()}
        {this.ButtonInput()}
      </form>
    );
  }
}

export default AddMovie;
