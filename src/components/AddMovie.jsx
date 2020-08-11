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
    };
    // Mudar o valor do this e Alterar o número de parâmetros de uma função
    this.change = this.change.bind(this);
    this.changeButton = this.changeButton.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  change(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  changeButton() {
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeRating(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
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
        <input type="number" value={this.state.rating} onChange={this.changeRating} />
        <label htmlFor="genre">Gênero</label>
        <select value={this.state.genre} onChange={this.change}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={this.changeButton}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
