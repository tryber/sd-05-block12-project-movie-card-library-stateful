/* eslint-disable jsx-a11y/label-has-associated-control */
// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
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
  resetState() {
    this.setState(
      this.state = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }
   name() {
    <form action="">
          <label htmlFor="form4">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />

          <label htmlFor="form5">Subtítulo</label>
          <input
            type="text" value={subtitle}
            onChange={(e) => this.setState({ subtitle: e.target.value })}
          />

          <label htmlFor="form6">Imagem</label>
          <input
            type="text" value={imagePath}
            onChange={(e) => this.setState({ imagePath: e.target.value })}
          />

          <label htmlFor="forn7">Sinopse</label>
          <textarea
            value={storyline}
            onChange={({ target: { value } }) => this.setState({ storyline: value })}
          />
          <label htmlFor="form8">Avaliação</label>
          <input
            type="number"
            id="form8"
            value={rating}
            onChange={
              ({ target: { value } }) => this.setState({ rating: parseFloat(value) })}
          />

          <label htmlFor="form9">Gênero</label>
          <select
            value={genre}
            onChange={({ target: { value } }) => this.setState({ genre: value })}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button onClick={() => { onClick(this.state); this.resetState(); }} >
            Adicionar filme
          </button>
        </form>
  }
  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        {nome()}
      </div>
    );
  }
}
