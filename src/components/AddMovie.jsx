import React, { Component } from 'react';

const genres = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

const MovieTitle = (props) => {
  const { value, onchange } = props;
  return (
    <label htmlFor="input-title">
Título
      <input
        name="title"
        type="text"
        key="input-title"
        value={value}
        onChange={onchange}
      />
    </label>
  );
};

const MovieSubtitle = (props) => {
  const { value, onchange } = props;
  return (
    <label htmlFor="input-subtitle">
Subtítulo
      <input
        name="subtitle"
        type="text"
        key="input-subtitle"
        value={value}
        onChange={onchange}
      />
    </label>
  );
};

const ImagePath = ({ onchange, value }) => (
  <label htmlFor="input-image">
Imagem
    <input
      key="input-image"
      name="imagePath"
      type="text"
      value={value}
      onChange={onchange}
    />
  </label>
);

const Storyline = ({ value, onchange }) => (
  <label htmlFor="storyline-input">
Sinopse
    <textarea
      key="storyline-input"
      name="storyline"
      type="text"
      value={value}
      onChange={onchange}
    />
  </label>
);

const Rating = ({ onchange, valueRating }) => (
  <label htmlFor="input-rating">
Avaliação
    <input
      key="input-rating"
      name="rating"
      type="number"
      value={valueRating}
      onChange={onchange}
    />
  </label>
);

const SelectGenre = ({ selectedGenre, onchange }) => (
  <label htmlFor="genre-new-movie">
Gênero
    <select
      key="genre-new-movie"
      onChange={onchange}
      name="genre"
      value={selectedGenre}
    >
      {genres.map(({ text, value }) => (
        <option
          value={value}
          key={value}
        >
          {text}
        </option>
      ))}
    </select>
  </label>
);

const AddMovieButon = ({ onClick }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        onClick();
      }}
    >
Adicionar filme
    </button>
  </div>
);

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
    this.updateState = this.updateState.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  updateState(event) {
    const stateChange = event.target.name;
    const { value } = event.target;
    this.setState({ [stateChange]: value });
  }

  updateRating(event) {
    const { value, name } = event.target;
    this.setState({ [name]: Number(value) });
  }

  resetState() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        <MovieTitle value={title} onchange={this.updateState} />
        <MovieSubtitle value={subtitle} onchange={this.updateState} />
        <ImagePath onchange={this.updateState} value={imagePath} />
        <Storyline onchange={this.updateState} value={storyline} />
        <Rating valueRating={rating} onchange={this.updateRating} />
        <SelectGenre selectedGenre={genre} onchange={this.updateState} />
        <AddMovieButon onClick={() => { onClick(this.state); this.resetState(); }} />
      </form>
    );
  }
}

export default AddMovie;
