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
    this.handleChange = this.handleChange.bind(this);
  }

  function handleChange = (e) {
    const { name, value } = e.target;
    this.setState({[name]: value});
  };

  addNewMovie = async () => {
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
    return(
      <div>
        <form action="">
          <label>
            Título
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Subtítulo
            <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.handleChange} />
          </label>
          <label>
            Imagem
            <input type="text" name="imagePath" value={this.state.imagePath} onChange={this.handleChange} />
          </label>
          <label>
            Sinopse
            <textarea name="storyline" value={this.state.storyline} onChange={this.handleChange} />
          </label>
          <label>
            Avaliação
            <input type="number" name="rating" value={this.state.rating} onChange={this.handleChange} />
          </label>
          <label>
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

    )
  }
}

export default AddMovie;
