import React from 'react';

import CriateInput from './CriateInput';

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
    this.newData = this.newData.bind(this);
    this.newRating = this.newRating.bind(this);
  }

  newData(element) {
    const { name, value } = element.target;
    this.setState({ [name]: value });
  }

  newRating(element) {
    const { name, value } = element.target;
    this.setState({ [name]: Number(value) });
  }

  sinopse() {
    return (
      <label htmlFor="Sinopse">
        Sinopse<br />
        <textarea
          className="caixaInput"
          type="text"
          name="storyline"
          value={this.state.storyline}
          onChange={this.newData}
        />
      </label>
    );
  }

  avaliacao() {
    return (
      <label htmlFor="Avaliação">
        Avaliação<br />
        <input
          className="caixaInput"
          type="number"
          name="rating"
          step="0.1"
          min="0"
          max="5"
          value={this.state.rating}
          onChange={this.newRating}
        />
      </label>
    );
  }

  filGenero() {
    return (
      <div>
        <label htmlFor="Gênero">
          Gênero<br />
          <select
            className="caixaInput"
            name="genre"
            value={this.state.genre}
            onChange={this.newData}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  botao() {
    return (
      <button
        className="botao"
        type="button"
        onClick={() => this.setState(this.state)}
      >
      Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form className="formulario">
        <CriateInput
          title="Título" name="title" type="text"
          value={this.state.title} funChange={this.newData}
        />
        <CriateInput
          title="Subtítulo" name="subtitle" type="text"
          value={this.state.subtitle} funChange={this.newData}
        />
        <CriateInput
          title="Imagem" name="imagePath" type="text"
          value={this.state.imagePath} funChange={this.newData}
        />
        <div>
          {this.sinopse()}
          {this.avaliacao()}
          {this.filGenero()}
          {this.botao()}
        </div>
      </form>
    );
  }
}

export default AddMovie;
