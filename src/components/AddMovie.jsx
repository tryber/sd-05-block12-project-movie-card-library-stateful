import React from 'react';

class AddMovie extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  updateState = (name, value) => {
    this.setState(() => ({
      [name]: value,
    }))
  }
  
  changeHandlerInt = (event) => {
    let { name, value } = event.target;
    this.setState(() => ({[name]: parseFloat(value)}))
  }

  changeHandler = (event) => {
    let { name, value } = event.target;
    this.updateState(name, value);
  }
  
  addMovieReset = (event) => {
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
    }))
  }
  
  render () {
    return (<form>
      <label htmlFor="FormTitle">Título</label>
      <input type="text"
      name="title"
      id="FormTitle"
      onChange={this.changeHandler}
      value={this.state.title}
      />
      <label htmlFor="FormSubtitle">Subtítulo</label>
      <input type="text"
      name="subtitle"
      id="FormSubitle"
      onChange={this.changeHandler}
      value={this.state.subtitle}
      />
      <label htmlFor="FormTitle">Imagem</label>
      <input type="text"
      name="imagePath"
      id="FormImage"
      onChange={this.changeHandler}
      value={this.state.imagePath}
      />
      <label htmlFor="FormStoryline">Sinopse</label>
      <textarea
      name="storyline"
      id="FormStoryLine"
      onChange={this.changeHandler}
      value={this.state.storyline}
      />
      <label htmlFor="FormRating">Avaliação</label>
      <input type="number"
      name="rating"
      id="FormRating"
      onChange={this.changeHandlerInt}
      value={this.state.rating}
      />
      <label htmlFor="FormGenre">Gênero</label>
      <select value={this.state.genre} id="FormGenre" name="genre" onChange={this.changeHandler}>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
      <button onClick={this.addMovieReset}>Adicionar filme</button>
    </form>)
  }
}

export default AddMovie;
