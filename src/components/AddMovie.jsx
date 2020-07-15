// implement AddMovie component here
// implement SearchBar component here
import React, { Component } from 'react';

class AddMovie extends Component {
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
  }
  render() {
    // const onClick = {this.props.onClick};
    return (
      <form>
        <label htmlFor='title'>
          Título
          <input type='text' value={this.state.title} onChange={this.handleChange} />
        </label>
        <label htmlFor='subtitle'>
          Subtítulo
          <input type='text' value={this.state.subtitle} onChange={this.handleChange} />
        </label>
        <label htmlFor='image'>
          Imagem
          <input type='text' value={this.state.imagePath} onChange={this.handleChange}></input>
        </label>
        <label htmlFor='label'>
          Label
          <textarea value={this.state.storyline} onChange={this.handleChange}></textarea>
        </label>
        <label htmlFor='rating'>
          Avaliação
          <input type='number' value={this.state.rating} onChange={this.handleChange}></input>
        </label>
        <label htmlFor='genre'>
          Gênero
          <select value={this.state.genre} onChange={this.handleChange}>
            <option value='action'>Ação</option>
            <option value='comedy'>Comédia</option>
            <option value='thriller'>Suspense</option>
          </select>
        </label>
        <button value={newAddMovie}>Adicionar filme</button>
      </form>
    );
  }
}
export default AddMovie;
