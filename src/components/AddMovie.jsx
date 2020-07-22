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
    this.newInfo = this.newInfo.bind(this);
    this.newRate = this.newRate.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  newInfo(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  newRate(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  newMovie() {
    const onClick = this.props.onClick;
    onClick(this.state);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="T">Título</label>
          <input type="text" name="title" id="T" value={title} onChange={this.newInfo} />
          <label htmlFor="ST">Subtítulo</label>
          <input type="text" name="subtitle" id="ST" value={subtitle} onChange={this.newInfo} />
          <label htmlFor="IMG">Imagem</label>
          <input type="text" name="imagePath" id="IMG" value={imagePath} onChange={this.newInfo} />
          <label htmlFor="ST">Sinopse</label>
          <textarea name="storyline" id="ST" value={storyline} onChange={this.newInfo} />
          <label htmlFor="R">Avaliação</label>
          <input type="number" name="rating" id="R" value={rating} onChange={this.newRate} />
          <label htmlFor="G">Gênero</label>
          <select name="genre" id="G" value={genre} onChange={this.newInfo}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button onClick={this.newMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
