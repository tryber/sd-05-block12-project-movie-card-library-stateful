import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      imagePath: '',
    };
    this.searchTitle = this.searchTitle.bind(this);
    this.searchRating = this.searchRating.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  searchTitle(element) {
    const { name, value } = element.target;
    this.setState({ [name]: value });
  }

  searchRating(element) {
    const { name, value } = element.target;
    this.setState({ [name]: Number(value) });
  }

  addMovie() {
    const onClick = this.props.onClick;
    onClick(this.state);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      imagePath: '',
    };
  }

  title() {
    return (
      <label className="titulo" htmlFor="title">Título
        <input
          onChange={this.searchTitle}
          value={this.state.title}
          id="title"
          type="text"
          funChange={this.searchTitle}
        />
      </label>
    );
  }

  subtitle() {
    return (
      <label className="subtitulo" htmlFor="subtitle">Subtítulo
        <input
          onChange={this.searchTitle}
          value={this.state.subtitle}
          id="subtitle"
          type="text"
          funChange={this.searchTitle}
        />
      </label>
    );
  }

  image() {
    return (
      <label className="Imagem" htmlFor="image">Imagem
         <input
           onChange={this.searchTitle}
           value={this.state.imagePath}
           id="image"
           type="text"
           funChange={this.searchTitle}
         />
      </label>
    );
  }

  storyLine() {
    return (
      <label className="Sinopse" htmlFor="storyLine">Sinopse
        <textarea
          onChange={this.searchTitle}
          value={this.state.storyline}
          id="storyLine"
          type="text"
          funChange={this.searchTitle}
        />
      </label>
    );
  }

  rating() {
    return (
      <label className="avaliação" htmlFor="rating">Avaliação
        <input
          onChange={this.searchRating}
          value={this.state.rating}
          id="rating"
          type="number"
          funChange={this.searchRating}
        />
      </label>
    );
  }

  genre() {
    return (
      <label className="Genero" htmlFor="genre">Gênero
        <select
          onChange={this.searchTitle}
          value={this.state.genre}
          type="text"
          funChange={this.searchTitle}
          id="genre"
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
  render() {
    return (
      <div>
        <form>
          {this.title()}
          {this.subtitle()}
          {this.image()}
          {this.storyLine()}
          {this.rating()}
          {this.genre()}
          <button onClick={this.addMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
