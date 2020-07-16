// implement AddMovie component here
import React, { Component } from 'react';

const OptionsGenre = ({ value, onChange }) => (
  <div>
    <label htmlFor="genre">
      Gênero
      <select
        name="genre"
        id="genre"
        value={value}
        onChange={onChange}
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  </div>
);

const TextInput = ({ child, type, name, id, value, onChange }) => (
  <div>
    <label htmlFor={id}>
      {child}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </label>
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
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    const { name } = event.target;
    let { value } = event.target;
    if (name === 'rating') {
      value = parseFloat(value);
    }

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState(() => ({ [name]: value }));
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

  handleButtonClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  render() {
    return (
      <div>
        <form>

          <TextInput
            child="Título"
            type="text"
            id="titulo"
            value={this.state.title}
            onChange={this.handlerChange}
          />
          <TextInput
            child="Subtítulo"
            type="text"
            id="titusubtitulolo"
            value={this.state.subtitle}
            onChange={this.handlerChange}
          />
          <TextInput
            child="Imagem"
            type="text"
            id="imagePath"
            value={this.state.imagePath}
            onChange={this.handlerChange}
          />

          <label htmlFor="storyline">Sinopse</label>
          <textarea
            name="storyline"
            value={this.state.storyline}
            onChange={this.handlerChange}
            id="storyline"
            cols="30"
            rows="10"
          />
          <label htmlFor="rating">Avaliação</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={this.state.rating}
            onChange={this.handlerChange}
          />

          <OptionsGenre value={this.state.genre} onChange={this.handlerChange} />
          <button onClick={this.handleButtonClick}>Adicionar filme</button>

        </form>
      </div>
    );
  }
}

export default AddMovie;
