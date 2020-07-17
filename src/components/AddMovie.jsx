// implement AddMovie component here

import React from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(name === 'rating' ? { [name]: Number(value) } : { [name]: value });
  }

  resetState(event) {
    const callProps = this.props.onClick;
    callProps(this.state);
    this.setState(initialState);
    event.preventDefault();
  }

  renderTitle() {
    return (
      <label htmlFor="title">Título
        <input
          type="text"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
      </label>
    );
  }

  renderSubtitle() {
    return (
      <label htmlFor="subtitle">Subtítulo
        <input
          type="text"
          id="subtitle"
          value={this.state.subtitle}
          onChange={this.handleChange}
          name="subtitle"
        />
      </label>
    );
  }

  renderImagePath() {
    return (
      <label htmlFor="imagePath">Imagem
        <input
          type="text"
          id="imagePath"
          value={this.state.imagePath}
          onChange={this.handleChange}
          name="imagePath"
        />
      </label>
    );
  }

  renderStoryline() {
    return (
      <label htmlFor="storyLine">Sinopse
        <textarea
          id="storyLine"
          value={this.state.storyline}
          onChange={this.handleChange}
          name="storyline"
        />
      </label>
    );
  }

  renderRating() {
    return (
      <label htmlFor="rating">Avaliação
        <input
          type="number"
          id="rating"
          value={this.state.rating}
          onChange={this.handleChange}
          name="rating"
        />
      </label>
    );
  }

  renderGenre() {
    return (
      <label htmlFor="genre">Gênero
        <select
          value={this.state.genre}
          onChange={this.handleChange}
          name="genre"
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderImagePath()}
        {this.renderStoryline()}
        {this.renderRating()}
        {this.renderGenre()}
        <button onClick={this.resetState}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
