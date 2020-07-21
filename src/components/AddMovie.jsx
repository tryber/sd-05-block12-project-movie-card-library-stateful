import React from 'react';

const movieGenres = [
  { value: 'action', innerText: 'Ação' },
  { value: 'comedy', innerText: 'Comédia' },
  { value: 'thriller', innerText: 'Suspense' },
];

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.eventStr = this.eventStr.bind(this);
    this.eventNmb = this.eventNmb.bind(this);
    this.ClearMovie = this.ClearMovie.bind(this);
  }
  eventStr(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  eventNmb(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }
  ClearMovie() {
    const onClick = this.props.onClick;
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
        <label htmlFor="title">Título
          <input type="text" onChange={this.eventStr} value={title} /></label><br />
        <label htmlFor="subtitle">Subtítulo
          <input type="text" onChange={this.eventStr} value={subtitle} /></label><br />
        <label htmlFor="imagePath">Imagem
          <input type="text" onChange={this.eventStr} value={imagePath} /></label><br />
        <label htmlFor="storyline">Sinopse
          <textarea type="text" onChange={this.eventStr} value={storyline} /></label><br />
        <label htmlFor="rating">Avaliação
          <input type="number" onChange={this.eventNmb} value={rating} /></label><br />
        <label htmlFor="genre">Gênero
          <select name="genre"onChange={this.eventStr} value={genre}>
            <option value="action" key="action">{movieGenres[0].innerText}</option>
            <option value="comedy" key="comedy">{movieGenres[1].innerText}</option>
            <option value="thriller" key="thriller">{movieGenres[2].innerText}</option>
          </select>
        </label><br />
        <button type="button" onClick={this.ClearMovie}>Adicionar filme</button>
      </form>
    );
  }
}
export default AddMovie;
