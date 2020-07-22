// implement AddMovie component here
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
  }

  setMovie(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  setMovieRating(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  resetState() {
    this.setState({
      title: '',
      subtitle: '',
      magePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" onChange={this.setMovie} value={title} />
        <label htmlFor="subtitle" >Subtítulo</label>
        <input name="subtitle" type="text" onChange={this.setMovie} value={subtitle} />
        <label htmlFor="image">Imagem</label>
        <input type="text" name="imagePath" onChange={this.setMovie} value={imagePath} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea name="storyline" onChange={this.setMovie} value={storyline} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" name="rating" onChange={this.setMovieRating} value={rating} />
        <label htmlFor="genre">Gênero</label>
        <select name="genre" onChange={this.setMovie} value={genre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button
          onClick={() => { this.props.onClick(this.state); this.resetState(); }}
          type="button"
        >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
