import React from 'react';

export default class AddMovie extends React.Component {
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
    this.hc = this.hc.bind(this);
    this.add = this.add.bind(this);
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

  hc(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form>
        <label htmlFor="tit">Título</label>
        <input type="text" id="tit" name="title" value={title} onChange={this.hc} />
        <label htmlFor="subtit">Subtítulo</label>
        <input type="text" id="subtit" name="subtitle" value={subtitle} onChange={this.hc} />
        <label htmlFor="image">Imagem</label>
        <input type="text" id="image" name="imagePath" value={imagePath} onChange={this.hc} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea id="sinopse" name="storyLine" value={storyline} onChange={this.hc} />
        <label htmlFor="rt">Avaliação</label>
        <input type="number" id="rt" name="rating" value={rating} onChange={this.hc} />
        <label htmlFor="genreid">Gênero</label>
        <select id="genreid" onChange={this.hc} name="genre" value={genre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.add}>Adicionar filme</button>
      </form>
    );
  }
}
