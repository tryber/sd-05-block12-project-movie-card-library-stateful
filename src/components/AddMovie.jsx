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
    this.changeAll = this.changeAll.bind(this);
    this.changeButton = this.changeButton.bind(this);
  }

  changeAll(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? parseFloat(value) : value });
  }

  changeButton(event) {
    event.preventDefault();
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
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input value={title} type="text" id="title" onChange={this.changeAll} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input value={subtitle} type="text" id="subtitle" onChange={this.changeAll} />
        <label htmlFor="imagePath">Imagem</label>
        <input type="text" id="imagePath" value={imagePath} onChange={this.changeAll} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea type="text" id="storyline" value={storyline} onChange={this.changeAll} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" id="rating" value={rating} onChange={this.changeAll} />
        <label htmlFor="genre">Gênero</label>
        <select id="genre" value={genre} onChange={this.changeAll}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.changeButton}>Adicionar filme</button>
      </form>

    );
  }
}

export default AddMovie;
