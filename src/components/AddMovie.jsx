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
    this.updateState = this.updateState.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.addMovieReset = this.addMovieReset.bind(this);
  }

  updateState(name, value) {
    this.setState(() => {
      if (name === 'rating') { return ({ [name]: parseFloat(value) }); }
      return ({ [name]: value });
    },
  );
  }

  changeHandler(event) {
    const { name } = event.target;
    let { value } = event.target;
    this.updateState(name, value);
  }

  addMovieReset(event) {
    event.preventDefault();
    const callback = this.props.onClick;
    callback(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render () {
    return (<form>
      <label htmlFor="FormTitle">Título <input type="text" name="title" id="FormTitle"
      onChange={this.changeHandler} value={this.state.title} /></label>
      <label htmlFor="FormSubtitle">Subtítulo<input type="text" name="subtitle" id="FormSubitle"
      onChange={this.changeHandler} value={this.state.subtitle} /></label>
      <label htmlFor="FormTitle">Imagem<input type="text" name="imagePath" id="FormImage" 
      onChange={this.changeHandler} value={this.state.imagePath} /></label>
      <label htmlFor="FormStoryline">Sinopse<textarea name="storyline" id="FormStoryLine"
      onChange={this.changeHandler} value={this.state.storyline} /></label>
      <label htmlFor="FormRating">Avaliação<input type="number" name="rating" id="FormRating" 
      onChange={this.changeHandler} value={this.state.rating} /></label>
      <label htmlFor="FormGenre">Gênero</label>
      <select value={this.state.genre} id="FormGenre" name="genre" onChange={this.changeHandler}>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
      <button onClick={this.addMovieReset}>Adicionar filme</button>
    </form>);
  }
}

export default AddMovie;
