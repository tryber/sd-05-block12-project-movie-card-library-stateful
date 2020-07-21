// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  change = (event) => {
    const eventoTarget = event.target;
    this.setState({[eventoTarget.id]:eventoTarget.id === "rating" ? parseFloat(eventoTarget.value) : eventoTarget.value})
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input id="title" type="text" value={this.state.title} onChange={this.change} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input id="subtitle" type="text" value={this.state.subtitle} onChange={this.change} />
        <label htmlFor="imagePath">Imagem</label>
        <input id="imagePath" type="text" value={this.state.imagePath} onChange={this.change} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea id="storyline" type="text" value={this.state.storyline} onChange={this.change} />
        <label htmlFor="rating">Avaliação</label>
        <input id="rating" type="number" value={this.state.rating} onChange={this.change} />
        <label htmlFor="genre">Gênero</label>
        <select id="genre" value={this.state.genre} onChange={this.change}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
