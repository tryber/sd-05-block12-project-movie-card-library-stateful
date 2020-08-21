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
    this.stateFilter = this.stateFilter.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }
  stateFilter(e) {
    const { name, value } = e.target;
    this.setState({ [name]: name === 'rating' ? parseFloat(value) : value });
  }
  resetInput(e) {
    e.preventDefault();
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
  render() {
    const stateFilter = this.stateFilter;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="form4">Título</label>
          <input type="text" value={title} onChange={stateFilter} />
          <label htmlFor="form5">Subtítulo</label>
          <input type="text" value={subtitle} onChange={stateFilter} />
          <label htmlFor="form6">Imagem</label>
          <input type="text" value={imagePath} onChange={stateFilter} />
          <label htmlFor="form7">Sinopse</label>
          <textarea value={storyline} onChange={stateFilter} />
          <label htmlFor="form8">Avaliação</label>
          <input type="number" id="form8" value={rating} onChange={stateFilter} />
          <label htmlFor="form9">Gênero</label>
          <select value={genre} onChange={stateFilter}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button onclick={this.resetInput}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}
