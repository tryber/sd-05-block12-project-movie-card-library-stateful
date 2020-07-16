import React from 'react';
import InputComponent from './InputComponent';
import TextAreaComponent from './TextareaComponent';

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
    this.addNewMovie = this.addNewMovie.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: name === 'rating' ? Number(value) : value,
    });
  };

  addNewMovie(event) {
    const callback = this.props.onClick;
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    event.preventDefault();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <InputComponent labelName="Título" name="title"
          value={title} type="text" callFunction={this.onChange} />
        <InputComponent labelName="Subtítulo" name="subtitle"
          value={subtitle} type="text" callFunction={this.onChange} />
        <InputComponent labelName="Imagem" name="imagePath"
          value={imagePath} type="text" callFunction={this.onChange} />
        <TextAreaComponent labelName="Sinopse" name="storyline"
          value={storyline} callFunction={this.onChange} />
        <InputComponent labelName="Avaliação" name="rating"
          value={rating} type="number" callFunction={this.onChange} />
        <label>Gênero<select name="genre" value={genre} onChange={this.onChange}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select></label>
        <button onClick={this.addNewMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
