// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action' };
  }
  render() {
    return (
      <form>
        <label htmlFor="label1">Título</label>
        <input type="text" value={this.state.title} onChange={this.title} id="label1" />
        <label htmlFor="label2">Subtítulo</label>
        <input type="text" value={this.state.subtitle} onChange={this.subtitle} id="label2" />
        <label htmlFor="label3">Imagem</label>
        <input type="file" value={this.state.imagePath} onChange={this.imagePath} id="label3" />
        <label htmlFor="label4">Sinopse</label>
        <input type="textarea" value={this.state.storyline} onChange={this.storyline} id="label4" />
        <label htmlFor="label5">Avaliação</label>
        <input type="number" value={this.state.rating} onChange={this.rating} id="label5" />
        <label htmlFor="label6">Gênero</label>
        <select value={this.state.genre} onChange={this.genre} id="label6">
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

