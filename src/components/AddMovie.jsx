import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };

    this.click = this.click.bind(this);
    this.add = this.add.bind(this);
  }

  click({ target }) {
    const {name} = target;
    this.setState({
      [name]: target.value
    })
  }

  add(e) {
    e.preventDefault();
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
    return (
      <form>
          <label>Título</label>
          <input type="text" value={this.state.title} name="title" onChange={this.click}></input><br />

          <label>Subtítulo</label>
          <input type="text" value={this.state.subtitle} name="subtitle" onChange={this.click}></input><br />

          <label>Imagem</label>
          <input type="text" value={this.state.imagePath} name="imagePath" onChange={this.click}></input><br />

          <label>Sinopse</label>
          <textarea value={this.state.storyline} name="storyline" onChange={this.click}></textarea><br />

          <label>Avaliação</label>
          <input type="number" value={this.state.rating} name="rating" onChange={this.click}></input><br />

          <label>Gênero</label>
          <select value={this.state.genre} name="genre" onChange={this.click}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>

          <button onClick={this.add}>Adicionar Filme</button>
      </form>
    );
  }
}

export default AddMovie;
