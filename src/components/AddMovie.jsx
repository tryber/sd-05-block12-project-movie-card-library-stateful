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
  }

  updates(event, estado) {
    this.setState({ [estado]: event.target.value });
  }

  ratingUpdate(event, estado) {
    this.setState({ [estado]: Number(event.target.value) });
  }

  reset() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input type="text" value={title} onChange={(event) => this.updates(event, 'title')} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" value={subtitle} onChange={(event) => this.updates(event, 'subtitle')} />
        <label htmlFor="imagePath">Imagem</label>
        <input type="text" value={imagePath} onChange={(event) => this.updates(event, 'imagePath')} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea type="text" value={storyline} onChange={(event) => this.updates(event, 'storyline')} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" value={rating} onChange={(event) => this.ratingUpdate(event, 'rating')} />
        <label htmlFor="genre">Gênero</label>
        <select value={genre} onChange={(event) => this.updates(event, 'genre')}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={() => this.reset()}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
