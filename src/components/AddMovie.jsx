// implement AddMovie component here
import React, { Component } from 'react';
import InputText from './InputText.jsx';
import InputTextarea from './InputTextarea.jsx';

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
    this.handleChange = this.handleChange.bind(this);
    this.newAddMovie = this.newAddMovie.bind(this);
  }

  // atribuindo a cada peça do form o valor do input.
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // A propriedade onClick do botão invoca uma função definida por você, em AddMovie, que:
  // Executa a callback passada para o componente AddMovie via props, chamada onClick,
  // que recebe como parâmetro o estado atual de AddMovie;
  // Reseta o estado de AddMovie, voltando para o inicial, conforme mencionado anteriormente.
  newAddMovie(actualState) {
    actualState.preventDefault();
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
        <InputText 
          label="title" visibletext="Título" value={this.state.title} change={this.handleChange}
        />
        <InputText 
          label="subtitle" visibletext="Subtítulo" value={this.state.subtitle} change={this.handleChange}
        />
        <InputText 
          label="image" visibletext="Imagem" value={this.state.imagePath} change={this.handleChange}
        />
        <InputTextarea 
          label="storyline" value={this.state.storyline} visibletext="Sinopse" change={this.handleChange}
        />
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
        <button type="submit" onClick={this.newAddMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
