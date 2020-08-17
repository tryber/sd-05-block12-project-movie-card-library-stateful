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
    this.mudar = this.mudar.bind(this);
    this.mudarBotao = this.mudarBotao.bind(this);
  }
  EventoBotao(event) {
    const { obj, valor } = event.target;
    this.setState({ [obj]: obj === 'rating' ? parseFloat(valor) : valor });
  }

  MudancaDeBotao() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input name="title" type="text" value={title} onChange={this.EventoBotao} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input name="subtitle" type="text" value={subtitle} onChange={this.EventoBotao} />
        <label htmlFor="imagePath">Imagem</label>
        <input name="imagePath" type="text" value={imagePath} onChange={this.EventoBotao} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={storyline} onChange={this.EventoBotao} />
        <label htmlFor="rating">Avaliação</label>
        <input name="rating" type="number" value={rating} onChange={this.EventoBotao} />
        <label htmlFor="genre">Gênero</label>
        <select name="genre" value={genre} onChange={this.EventoBotao} >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.MudancaDeBotao} type="button">
          Adicionar filme
        </button>
      </form>
    );
  }
}
