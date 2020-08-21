// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
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
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="form4">Título</label>
          <input type="text" value={title} onChange={this.handleChange} />
          <label htmlFor="form5">Subtítulo</label>
          <input type="text" value={subtitle} onChange={this.handleChange} />
          <label htmlFor="form6">Imagem</label>
          <input type="text" value={imagePath} onChange={this.handleChange} />
          <label htmlFor="form7">Sinopse</label>
          <textarea value={storyline} onChange={this.handleChange} />
          <label htmlFor="form8">Avaliação</label>
          <input type="number" id="form8" value={rating} onChange={this.handleChange} />
          <label htmlFor="form9">Gênero</label>
          <select value={genre} onChange={this.handleChange}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button onClick={this.handleButton}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}
