// implement AddMovie component here
import React from 'react';
import CreateInput from './CreateInput';


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
    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async addNewMovie() {
    const onClick = this.props.onClick;
    await onClick(this.state);
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
      <div>
        <form action="">
          <CreateInput
            name="title" title="Título"
            value={this.state.title} function={this.handleChange}
          />
          <CreateInput
            name="subtitle" title="Subtítulo"
            value={this.state.subtitle} function={this.handleChange}
          />
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="story">
            Sinopse
            <textarea
              name="storyline"
              value={this.state.storyline}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="score">
            Avaliação
            <input
              type="number"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="genre">
            Gênero
            <select name="genre" value={this.state.genre} onChange={this.handleChange}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button onClick={this.addNewMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
