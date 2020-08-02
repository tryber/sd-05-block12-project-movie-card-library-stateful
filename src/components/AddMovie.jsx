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
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    if (name === 'rating') {
      return this.setState({ [name]: Number(value) });
    }
    return this.setState({ [name]: value });
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const button = this.handleButton;
    const change = this.handleChange;
    return (
      <form>
        <input type="text" name="title" value={title} onChange={change} />
        <label htmlFor="title">Título</label>
        <input type="text" name="subtitle" value={subtitle} onChange={change} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" name="imagePath" value={imagePath} onChange={change} />
        <label htmlFor="imagePath">Imagem</label>
        <textarea name="storyline" value={storyline} onChange={change} />
        <label htmlFor="storyline">Sinopse</label>
        <input type="number" id="rating" name="rating" value={rating} onChange={change} />
        <label htmlFor="rating">Avaliação</label>
        <select id="genre" name="genre" value={genre} onChange={change}>
          <option value="action">Ação</option><option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select><label htmlFor="rating">Gênero</label>
        <button onClick={button}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
