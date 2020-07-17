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
          onchange={(element) => this.changeInput(element, 'genre')}
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
            onChange={(e) => this.changeInput(e, 'storyline')}
          />
        </label>
        {this.addMovieInfo('rating', 'Avaliação', 'number', this.changeRating)}
        {this.genreSelector()}
        <button
          type="button"
          value="Adicionar filme"
          onClick={() => {
            onClick(this.state);
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
