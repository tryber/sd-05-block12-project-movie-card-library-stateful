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
    this.newMovieInfo = this.newMovieInfo.bind(this);
    this.newMovieRating = this.newMovieRating.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  newMovieInfo(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  newMovieRating(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: Number(value),
    });
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
          <label htmlFor="title">Título</label>
          <input type="text" name="title" id="title" value={title} onChange={this.newMovieInfo} />
          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" name="subtitle" id="subtitle" value={subtitle} onChange={this.newMovieInfo} />
          <label htmlFor="image">Imagem</label>
          <input type="text" name="imagePath" id="image" value={imagePath} onChange={this.newMovieInfo} />
          <label htmlFor="story">Sinopse</label>
          <textarea id="story" name="storyline" value={storyline} onChange={this.newMovieInfo} />
          <label htmlFor="rating">Avaliação</label>
          <input type="number" name="rating" id="rating" value={rating} onChange={this.newMovieRating} />
          <label htmlFor="genre">Gênero</label>
          <select id="genre" name="genre" value={genre} onChange={this.newMovieInfo}>
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
