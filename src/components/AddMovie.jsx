// implement AddMovie component here

import React from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}

class AddMovie extends React.Component {

  constructor() {
    super()
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    name === "rating" ? this.setState({[name]: Number(value)}) : this.setState({[name]: value})
  }

  resetState(event) {
    const callProps = this.props.onClick;
    callProps(this.state);
    this.setState(initialState);
    event.preventDefault();
  }

  render () {
    const {onClick} = this.props;

    return (
      <form>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" value={this.state.title} onChange={this.handleChange} name="title"/>

        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" id="subtitle" value={this.state.subtitle} onChange={this.handleChange} name="subtitle"/>

        <label htmlFor="imagePath">Imagem</label>
        <input type="text" id="imagePath" value={this.state.imagePath} onChange={this.handleChange} name="imagePath"/>

        <label htmlFor="storyLine">Sinopse</label>
        <textarea id="storyLine" value={this.state.storyline} onChange={this.handleChange} name="storyline"/>

        <label htmlFor="rating">Avaliação</label>
        <input type="number" id="rating" value={this.state.rating} onChange={this.handleChange} name="rating"/>

        <label htmlFor="genre">Gênero</label>
        <select value={this.state.genre} onChange={this.handleChange} name="genre">
          <option value="action">Ação</option>    
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

      <button onClick={this.resetState}>Adicionar filme</button>

      </form>
    )
  }
}

export default AddMovie;
