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
    this.onChangeAll = this.all.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.RemoveTudo = this.RemoveTudo.bind(this);
  }
  all(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  onChangeNumber(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  RemoveTudo() {
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
    const { onClick } = this.props;
    return (
      <form>
        <input type="text" name="title" value={this.state.title} onChange={this.all} />
        <label>Título</label>
        <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.all} />
        <label>Subtítulo</label>
        <input type="text" name="imagePath" value={this.state.imagePath} onChange={this.all} />
        <label>Imagem</label>
        <textarea name="storyline" value={this.state.storyline} onChange={this.all} />
        <label>Sinopse</label>
        <input type="number" name="rating" value={this.state.rating} onChange={this.onChangeNumber} />
        <label>Avaliação</label>
        <select type="text" name="genre" value={this.state.genre} onChange={this.onChangeAll}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={() => { onClick(this.state); this.RemoveTudo(); } }>
          Adicionar filme
        </button>
        <label>Gênero</label>
      </form>
    );
  }
}
