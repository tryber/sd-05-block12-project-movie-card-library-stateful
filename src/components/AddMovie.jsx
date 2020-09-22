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
      genre: 'action',
    };

    this.c = this.c.bind(this);
    this.add = this.add.bind(this);
  }

  c({ target }) {
    const { name, value } = target;
    this.setState({ [name]: target.type === 'number' ? parseFloat(value) : value });
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
        <label htmlFor="t">Título</label>
        <input type="text" id="t" value={this.state.title} name="title" onChange={this.c} />

        <label htmlFor="s">Subtítulo</label>
        <input type="text" id="s" value={this.state.subtitle} name="subtitle" onChange={this.c} />

        <label htmlFor="i">Imagem</label>
        <input type="text" id="i" value={this.state.imagePath} name="imagePath" onChange={this.c} />

        <label htmlFor="sn">Sinopse</label>
        <textarea value={this.state.storyline} id="sn" name="storyline" onChange={this.c} />

        <label htmlFor="a">Avaliação</label>
        <input type="number" id="a" value={this.state.rating} name="rating" onChange={this.c} />

        <label htmlFor="gen">Gênero</label>
        <select value={this.state.genre} id="gen" name="genre" onChange={this.c}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

        <button onClick={this.add}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
