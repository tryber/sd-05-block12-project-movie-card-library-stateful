import React from 'react';

class AddMovie extends React.Component {
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
    this.handleChangeNum = this.handleChangeNum.bind(this);
    this.NewMovie = this.NewMovie.bind(this);
  }
  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeNum(e) {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  NewMovie () {
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
    const { subtitle, title, imagePath, storyline, genre } = this.props;
    return (
      <div>
        <form>
          <label>
            Título
            <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Subtítulo
            <input
              type='text'
              name='subtitle'
              value={this.state.subtitle}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Imagem
            <input
              type='text'
              name='imagePath'
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Sinopse
            <textarea name='storyline' value={this.state.storyline} onChange={this.handleChange} />
          </label>
          <label>
            Avaliação
            <input
              type='number'
              name='rating'
              value={this.state.rating}
              onChange={this.handleChangeNum}
            />
          </label>
          <label>
            Gênero
            <select name='genre' value={this.state.genre} onChange={this.handleChange}>
              <option value='action'>Ação</option>
              <option value='comedy'>Comédia</option>
              <option value='thriller'>Suspense</option>
            </select>
          </label>
          <button onClick={this.NewMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}
export default AddMovie;
