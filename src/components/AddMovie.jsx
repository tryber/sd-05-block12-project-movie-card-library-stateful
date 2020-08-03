// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeInput = this.changeInput.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  changeInput({ target: { value } }, name) {
    this.setState({ [name]: value });
  }
  changeRating({ target: { value } }, name) {
    this.setState({ [name]: Number(value) });
  }

  resetMovie() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addMovieInfo(name, text, inputType = 'text', callback = this.changeInput) {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={inputType}
          name={name}
          id={name}
          value={this.state[name]}
          onChange={(event) => callback(event, name)}
        />
      </label>
    );
  }
  genreSelector() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={(filme) => this.changeInput(filme, 'genre')}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { storyline } = this.state;
    return (
      <form>
        {this.addMovieInfo('title', 'Título')}
        {this.addMovieInfo('subtitle', 'Subtítulo')}
        {this.addMovieInfo('imagePath', 'Imagem')}
        <label htmlFor="storyline">
          Sinopse
          <textarea
            value={storyline}
            onChange={(event) => this.changeInput(event, 'storyline')}
          />
        </label>
        {this.addMovieInfo('rating', 'Avaliação', 'number', this.changeRating)}
        {this.genreSelector()}
        <button
          type="button"
          value="Adicionar filme"
          onClick={() => {
            onClick(this.state);
            this.resetMovie(); // button tinha que ser o mesmo e não 2 buttons de add/reset
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
