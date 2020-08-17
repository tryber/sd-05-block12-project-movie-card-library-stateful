import React, { Component } from 'react';

class AddMovie extends Component {
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
    this.change = this.change.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
  }

  change(event) {
    const e = event.target;
    this.setState({
      [e.name]: e.name === 'rating' ? parseFloat(e.value) : e.value,
    });
  }

  buttonChange() {
    const { onClick } = this.props;
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

  render() {
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.change}
        />
        <label htmlFor="subtitle">Subtítulo</label>
        <input
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={this.change}
        />
        <label htmlFor="imagePath">Imagem</label>
        <input
          name="imagePath"
          type="text"
          value={this.state.imagePath}
          onChange={this.change}
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea
          name="storyline"
          value={this.state.storyline}
          onChange={this.change}
        />
        <label htmlFor="rating">Avaliação</label>
        <input
          name="rating"
          type="number"
          value={this.state.rating}
          onChange={this.change}
        />
        <label htmlFor="genre">Gênero</label>
        <select name="genre" value={this.state.genre} onChange={this.change}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.buttonChange} type="button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
