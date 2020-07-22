import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline: '',
      genre: 'action',
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }
  changeTitle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating'? parseFloat(value) : value });
  }
  buttonClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline: '',
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.state;
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Título</label>
        <input type="text" value={title} onChange={this.changeTitle} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" value={subtitle} onChange={this.changeTitle} />
        <label htmlFor="imagePath">Imagem</label>
        <input type="text" value={imagePath} onChange={this.changeTitle} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea value={storyline} onChange={this.changeTitle} id="storyline" />
        <label htmlFor="rating">Avaliação</label>
        <input id="rating" type="number" value={rating} onChange={this.changeTitle} />
        <label htmlFor="genre">Gênero</label>
        <select id="genre" value={this.state.genre} onChange={this.changeTitle}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.buttonClick}>Adicionar filme</button>

      </form>
    );
  }
}

export default AddMovie;
