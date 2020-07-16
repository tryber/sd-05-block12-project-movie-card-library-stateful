import React, { Component } from 'react';
import { InputText, InputTextArea, InputNumber, InputSelect } from './Inputs';

const intialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const genders = [
  { value: 'action', innerText: 'Ação' },
  { value: 'comedy', innerText: 'Comédia' },
  { value: 'thriller', innerText: 'Suspense' },
];

class AddMovie extends Component {
  constructor() {
    super();
    this.state = Object.assign(intialState);
  }

  doEvent = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  doEventNumber = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: Number(value) });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <InputText title="Título" name="title" value={title} onChange={this.doEvent} />
        <InputText title="Subtítulo" name="subtitle" value={subtitle} onChange={this.doEvent} />
        <InputText title="Imagem" name="imagePath" value={imagePath} onChange={this.doEvent} />
        <InputTextArea title="Sinopse" name="storyline" value={storyline} onChange={this.doEvent} />
        <InputNumber title="Avaliação" name="rating" value={rating} onChange={this.doEventNumber} />
        <InputSelect title="Gênero" value={genre} onChange={this.doEvent} options={genders} />
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
    );
  }
}

export default AddMovie;
