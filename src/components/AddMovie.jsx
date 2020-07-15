/* eslint-disable linebreak-style */
import React, { Component } from 'react';

const intialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action'
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = Object.assign(intialState);
  }

  setMovie = (ev) => {
    const { id: key, value } = ev.target;
    this.setState((state) => (
      {
        ...state,
        [key]: value
      }
    ));
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input
            type="text"
            id="title"
            value={title}
            onChange={(ev) => {this.setMovie(ev)}}
          />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(ev) => {this.setMovie(ev)}}
          />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input
            type="text"
            id="imagePath"
            value={imagePath}
            onChange={(ev) => {this.setMovie(ev)}}
          />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea id="storyline" value={storyline} onChange={(ev) => {this.setMovie(ev)}} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(ev) => {this.setMovie(ev)}}
          />
        </label>
        <label htmlFor="genre">
          Gênero
          <select id="genre" value={genre} onChange={(ev) => {this.setMovie(ev)}} >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button
          onClick={() => {
            onClick(this.state);
            this.setState(Object.assign(intialState));
          }}
        >
        Adicionar filme
        </button>
      </form>
    )
  }
}

export default AddMovie;
