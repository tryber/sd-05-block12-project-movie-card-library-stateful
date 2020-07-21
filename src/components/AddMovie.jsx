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
    }
    this.eventStr = this.eventStr.bind(this);
    this.eventNmb = this.eventNmb.bind(this);
    this.ClearMovie = this.ClearMovie.bind(this);
  }
  eventStr({ target: { value } }, name) {
    return this.setState({ [name]: value });
  }
  eventNmb({ target: { value } }, name) {
      return this.setState({ [name]: Number(value) });
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
    const { title, subtitle, imagePath, storyline, rating, genre} = this.state
    return (
      <form>
        <label htmlFor='title'>Título
          <input type='text' onChange={(event) => this.eventStr(event, 'title')} value={title}/>
        </label><br></br>
        <label htmlFor='subtitle'>Subtítulo
          <input type='text' onChange={(event) => this.eventStr(event, 'subtitle')} value={subtitle}/>
        </label><br></br>
        <label htmlFor='imagePath'>Imagem
          <input type='text' onChange={(event) => this.eventStr(event, 'imagePath')} value={imagePath}/>
        </label><br></br>
        <label htmlFor='storyline'>Sinopse
          <textarea type='text' onChange={(event) => this.eventStr(event, 'storyline')} value={storyline}/>
        </label><br></br>
        <label htmlFor='rating'>Avaliação
          <input type='number' onChange={(event) => this.eventNmb(event, 'rating')} value={rating}/>
        </label><br></br>
        <label htmlFor='genre'>Gênero
          <select name='genre'onChange={(event) => this.eventStr(event, 'genre')} value={genre}>
            <option value='action' key='action'>{movieGenres[0].innerText}</option>
            <option value='comedy' key='comedy'>{movieGenres[1].innerText}</option>
            <option value='thriller' key='thriller'>{movieGenres[2].innerText}</option>
          </select>
        </label>
        <button type="button" onClick={this.ClearMovie}>
          Adicionar filme
        </button>
      </form>
    );
  }
}
export default AddMovie;
