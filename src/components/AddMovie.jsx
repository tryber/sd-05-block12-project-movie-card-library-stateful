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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;

    return (
      <form>
        <label htmlFor="tit">Título</label>
        <input type="text" id="tit" name="title" value={title} onChange={this.handleClick} />
        <label htmlFor="subtit">Subtítulo</label>
        <input type="text" id="subtit" name="subtitle" value={subtitle}
          onChange={this.handleClick} />
        <label htmlFor="image">Imagem</label>
        <input type="text" id="image" name="imagepath" value={imagePath}
          onChange={this.handleClick} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea id="sinopse" name="sinop" value={storyline} onChange={this.handleClick} />
        <label htmlFor="avaliacao">Avaliação</label>
        <input type="number" id="avaliacao" name="aval" value={rating}
          onChange={this.handleClick} />
        <label htmlFor="genre">Gênero</label>
        <select id="genre" onChange={console.log('change')}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.buttonClick}>Adicionar filme</button>
      </form>
    );
  }
}
