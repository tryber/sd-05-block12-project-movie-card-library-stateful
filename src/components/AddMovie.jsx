import React, { Component } from 'react';
// import inputGeral from './inputGeral';
// import numeroGeral from './numeroGeral';
// import boxGeral from './boxGeral';
// import textareatGeral from './textareaGeral';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.mudar = this.mudar.bind(this);
    this.mudarNumero = this.mudarNumero.bind(this);
    this.botao = this.botao.bind(this);
  }
  botao = () => {
    const click = this.props.click;
    click();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };
  mudar = (event) => {
    const { obj, valor } = event.target;
    this.setState({ [obj]: valor });
  };
  mudarNumero = (event) => {
    const { obj, valor } = event.target;
    this.setState({ [obj]: valor });
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            obj="title"
            type="text"
            value={this.state.title}
            onChange={this.mudar}
          />
          <label htmlFor="subtitle">Título</label>
          <input
            id="subtitle"
            name="title"
            type="text"
            value={this.state.subtitle}
            onChange={this.mudar}
          />
          <label htmlFor="imagePath">Imagem</label>
          <input
            id="imagePath"
            name="title"
            type="text"
            value={this.state.imagePath}
            onChange={this.mudar}
          />
          <label htmlFor="storyline">Sinopse</label>
          <textarea
            name="storyline"
            value={this.state.storyline}
            onChange={this.mudar}
          ></textarea>
          <label htmlFor="avaliaco">Avaliação</label>
          <input
            id="avaliaco"
            name="avaliacao"
            type="text"
            value={this.state.rating}
            onChange={this.mudar}
          />
          <label htmlFor="genero">
            Gênero
            <select id="genero" value={this.state.genre} onChange={this.mudar}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button onClick={this.botao()}> Adicionar filme</button>
        </form>
      </div>
    );
  }
}
export default AddMovie;
