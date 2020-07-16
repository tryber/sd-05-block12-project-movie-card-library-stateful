/* eslint-disable linebreak-style */
import React, { Component } from 'react';

const intialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const input = (type, title, name, value, onChange) => {
  const id = `${title}-${Math.round(Math.random() * 9999)}`;
  if (type !== 'textarea') {
    return (
      <label htmlFor={id}>
        {title}
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={(ev) => { onChange(ev); }}
        />
      </label>
    );
  }
  return (
    <label htmlFor={id}>
      {title}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(ev) => { onChange(ev); }}
      />
    </label>
  );
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = Object.assign(intialState);
    this.setMovie = this.setMovie.bind(this);
  }

  setMovie(ev) {
    const { name, value, type } = ev.target;
    const state = type === 'number' ? { [name]: Number(value) } : { [name]: value };
    this.setState(state);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        { input('text', 'Título', 'title', title, this.setMovie) }
        { input('text', 'Subtítulo', 'subtitle', subtitle, this.setMovie) }
        { input('text', 'Imagem', 'imagePath', imagePath, this.setMovie) }
        { input('textarea', 'Sinopse', 'storyline', storyline, this.setMovie) }
        { input('number', 'Avaliação', 'rating', rating, this.setMovie) }
        <label htmlFor="genre">
          Gênero
          <select name="genre" value={genre} onChange={(ev) => { this.setMovie(ev); }}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
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
