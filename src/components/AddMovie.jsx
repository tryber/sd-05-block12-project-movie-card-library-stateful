// implement AddMovie component here
// implement SearchBar component here
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
    // this.handleChange = this.handleChange.bind(this);
    // this.newAddMovie = this.newAddMovie.bind(this);
    // maybe i won't need bind using arrow function for both these functions
  }

  // atribuindo a cada peça do form o valor do input.
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // A propriedade onClick do botão invoca uma função definida por você, em AddMovie, que:
  // Executa a callback passada para o componente AddMovie via props, chamada onClick,
  // que recebe como parâmetro o estado atual de AddMovie;
  // Reseta o estado de AddMovie, voltando para o inicial, conforme mencionado anteriormente.
  newAddMovie = (actualState) => {
    const onClick = this.props.onClick;
    // onClick(actualState);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="label">
          Sinopse
          <textarea value={this.state.storyline} name="storyline" onChange={this.handleChange} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            value={this.state.rating}
            name="rating"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="genre">
          Gênero
          <select value={this.state.genre} name="genre" onChange={this.handleChange}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={this.newAddMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
