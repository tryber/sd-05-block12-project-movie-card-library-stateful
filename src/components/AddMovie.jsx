// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.insertTitle = this.insertTitle.bind(this);
    this.insertSubtitle = this.insertSubtitle.bind(this);
    this.insertImage = this.insertImage.bind(this);
    this.insertSinopse = this.insertSinopse.bind(this);
    this.insertRating = this.insertRating.bind(this);
    this.insertGenre = this.insertGenre.bind(this);
    this.insertButton = this.insertButton.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? parseFloat(value) : value });
  }

  insertTitle() {
    return (
      <label htmlFor="title">
        Título
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  insertSubtitle() {
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  insertImage() {
    return (
      <label htmlFor="imagePath">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={this.state.imagePath}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  insertSinopse() {
    return (
      <label htmlFor="storyline">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          value={this.state.storyline}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  insertRating() {
    return (
      <label htmlFor="rating">
        Avaliação
        <input
          name="rating"
          type="number"
          value={this.state.rating}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  insertGenre() {
    return (
      <label htmlFor="genre">
        Gênero
        <select
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  // Arrumar
  insertButton() {
    return (
      <button
        type="button"
        onClick={() => this.props.onClick(this.state)}
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.insertTitle()}
          {this.insertSubtitle()}
          {this.insertImage()}
          {this.insertSinopse()}
          {this.insertRating()}
          {this.insertGenre()}
          {this.insertButton()}
        </form>
      </div>
    );
  }
}

export default AddMovie;
