import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    // Mudar o valor do this e Alterar o número de parâmetros de uma função
    this.change = this.change.bind(this);
  }

  change(event) {
    const { nome, valor } = event.target;
    // setState é para atualizar, parseFloat converter string em um valor de número com ponto flutuante (casas após a virgula
    this.setState({[nome]: nome === 'rating' ? parseFloat(valor): valor });
  }

  // preventDefault cancela o evento
  changeButton(event) {
    event.preventDefault();
    const { onclick } = this.props;
    onclick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" value={this.state.title} onChange={this.change} />
        <label htmlFor="subtitulo">Subtítulo</label>
        <input type="text" value={this.state.subtitle} onChange={this.change} />
        <label htmlFor="imagePath">Imagem</label>
        <input type="text" value={this.state.imagePath} onChange={this.change} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea type="text" value={this.state.storyline} onChange={this.change} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" value={this.state.rating} onChange={this.change} />
        <label htmlFor="genre">Gênero</label>
        <select value={this.state.genre} onChange={this.change}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onclick={this.changeButton}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
