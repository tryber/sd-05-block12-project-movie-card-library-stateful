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
    this.modificandoEstado = this.modificandoEstado.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
  }

  modificandoEstado(event) {
    const { name, value } = event.target;
    this.state({ [name]: name === 'rating' ? parseFloat(value) : value });
  }

  buttonChange() {
    const { onClick } = this.props;
    onClick(this.state);
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
        <input type="text" value={title} name="title" onChange={this.modificandoEstado} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" value={subtitle} name="subtitle" onChange={this.modificandoEstado} />
        <label htmlFor="imagePath">Imagem</label>
        <input type="text" value={imagePath} name="imagePath" onChange={this.modificandoEstado} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={storyline} onChange={this.modificandoEstado} />
        <label htmlFor="rating">Avaliação</label>
        <input name="rating" value={rating} onChange={this.modificandoEstado} />
        <label htmlFor="genre">Gênero</label>
        <select name="genre" value={genre} onChange={this.modificandoEstado}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={this.buttonChange}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
