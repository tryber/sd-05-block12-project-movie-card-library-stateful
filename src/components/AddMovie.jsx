// implement AddMovie component here
import React from 'react';

class CreateInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name}>
        {this.props.title}
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.function}
        />
      </label>
    )
  }
}
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
          <CreateInput name="title" title="Título" value={this.state.title} function={this.handleChange}/>
          <label htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={this.state.subtitle}
              onChange={this.handleChange}
            />
          </label>
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
