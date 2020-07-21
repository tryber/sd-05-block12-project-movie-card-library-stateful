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
    this.change = this.change.bind(this);
  }

  change(event) {
    const e = event.target;
    this.setState({ [e.id]: e.id === 'rating' ? parseFloat(e.value) : e.value });
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
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input id="title" type="text" value={this.state.title} onChange={this.change} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input id="subtitle" type="text" value={this.state.subtitle} onChange={this.change} />
        <label htmlFor="imagePath">Imagem</label>
        <input
          id="imagePath" type="text" value={this.state.imagePath}
          onChange={this.change}
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea id="storyline" value={this.state.storyline} onChange={this.change} />
        <label htmlFor="rating">Avaliação</label>
        <input id="rating" type="number" value={this.state.rating} onChange={this.change} />
        <label htmlFor="genre">Gênero</label>
        <select id="genre" value={this.state.genre} onChange={this.change}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.buttonChange}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
