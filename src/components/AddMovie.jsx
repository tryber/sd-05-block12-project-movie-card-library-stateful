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

const TextInput = ({ child, type, name, id, value, fnc }) => (
  <div>
    <label htmlFor={id}>
      {child}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={fnc}
      />
    </label>
  </div>
);


const TextArea = ({ value, fnc }) => (
  <div>
    <label htmlFor="storyline">
  Sinopse

      <textarea
        name="storyline"
        id="storyline"
        value={value}
        onChange={fnc}
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const hC = this.handlerChange;
    return (
      <form>
        <TextInput child="Título" type="text" id="titulo" value={title} fnc={hC} />
        <TextInput child="Subtítulo" type="text" id="subtitulo" value={subtitle} fnc={hC} />
        <TextInput child="Imagem" type="text" id="imagePath" value={imagePath} fnc={hC} />
        <TextArea value={storyline} fnc={hC} />
        <TextInput child="Avaliação" type="number" id="imagePath" value={rating} fnc={hC} />
        <OptionsGenre value={genre} onChange={hC} />
        <button type="button" onClick={this.handleButtonClick}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
