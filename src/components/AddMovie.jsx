import React from 'react';
import InputText from './InputText';
import InputTextArea from './TextArea';

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
    this.updateState = this.updateState.bind(this);
    this.cHandler = this.cHandler.bind(this);
    this.addMovieReset = this.addMovieReset.bind(this);
  }

  updateState(name, value) {
    this.setState(() => {
      if (name === 'rating') { return ({ [name]: parseFloat(value) }); }
      return ({ [name]: value });
    },
  );
  }

  async cHandler(event) {
    const { name, value } = event.target;
    await this.updateState(name, value);
  }

  addMovieReset(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const sl = 'storyline';
    return (
      <form>
        <InputText name="title" value={title} onChange={this.cHandler} inName="Título" />
        <InputText name="subtitle" value={subtitle} onChange={this.cHandler} inName="Subtítulo" />
        <InputText name="imagePath" value={imagePath} onChange={this.cHandler} inName="Imagem" />
        <InputTextArea name={sl} value={storyline} onChange={this.cHandler} inName="Sinopse" />
        <label htmlFor="FRating">
          Avaliação
          <input type="number" value={rating} onChange={this.cHandler} id="FRting" name="rating" />
        </label>
        <label htmlFor="FormGenre">Gênero</label>
        <select value={genre} id="FormGenre" name="genre" onChange={this.cHandler}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.addMovieReset}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
