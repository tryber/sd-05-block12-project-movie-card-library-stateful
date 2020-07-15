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
    this.changeState = this.changeState.bind(this);
    this.changeNumberState = this.changeNumberState.bind(this);
  }

  reset() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeState({ target: { value } }, name) {
    return this.setState({ [name]: value });
  }

  changeNumberState({ target: { value } }, name) {
    return this.setState({ [name]: Number(value) });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const genreOptions = [
      { value: 'action', text: 'Ação' },
      { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' },
    ];

    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" value={title} onChange={(event) => this.changeState(event, 'title')} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            value={subtitle}
            onChange={(event) => this.changeState(event, 'subtitle')}
          />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input
            type="text"
            value={imagePath}
            onChange={(event) => this.changeState(event, 'imagePath')}
          />
        </label>
        <label htmlFor="Sinopse">
          Sinopse
          <textarea
            type="text"
            value={storyline}
            onChange={(event) => this.changeState(event, 'storyline')}
          />
        </label>
        <label htmlFor="Rating">
          Avaliação
          <input
            type="number"
            value={rating}
            onChange={(event) => this.changeNumberState(event, 'rating')}
          />
        </label>
        <label htmlFor="Genre">
          Gênero
          <select value={genre} onChange={(event) => this.changeState(event, 'genre')}>
            {genreOptions.map((genreopt) => (
              <option key={Math.random() * 100} value={genreopt.value}>
                {genreopt.text}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={() => {
            onClick(this.state);
            this.reset();
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
