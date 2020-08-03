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
    this.All = this.All.bind(this);
    this.Num = this.Num.bind(this);
    this.RemoveTudo = this.RemoveTudo.bind(this);
  }
  All(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  Num(event) {
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
        <input type="text" name="title" value={this.state.title} onChange={this.All} />
        <label htmlFor="a">Título</label>
        <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.All} />
        <label htmlFor="b">Subtítulo</label>
        <input type="text" name="imagePath" value={this.state.imagePath} onChange={this.All} />
        <label htmlFor="c">Imagem</label>
        <textarea name="storyline" value={this.state.storyline} onChange={this.All} />
        <label htmlFor="d">Sinopse</label>
        <input type="number" name="rating" value={this.state.rating} onChange={this.Num} />
        <label htmlFor="e">Avaliação</label>
        <select type="text" name="genre" value={this.state.genre} onChange={this.All}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={() => { onClick(this.state); this.RemoveTudo(); }}>
          Adicionar filme
        </button>
        <label htmlFor="f">Gênero</label>
      </form>
    );
  }
}
