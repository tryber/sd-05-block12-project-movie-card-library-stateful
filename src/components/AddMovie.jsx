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
    }
    this.upState = this.upState.bind(this);
    this.addButton = this.addButton.bind(this);
  }
  upState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? parseFloat(value) : value }) };
  
  addButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input name="title" type="text" value={title} onChange={this.upState} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input name="subtitle" type="text" value={subtitle} onChange={this.upState} />
        <label htmlFor="imagePath">Imagem</label>
        <input name="imagePath" type="text" value={imagePath} onChange={this.upState} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" type="text" value={storyline} onChange={this.upState} />
        <label htmlFor="rating">Avaliação</label>
        <input name="rating" type="number" value={rating} onChange={this.upState} />
        <label htmlFor="genre">Gênero</label>
        <select name="genre" value={genre} onChange={this.upState} >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.addButton}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
