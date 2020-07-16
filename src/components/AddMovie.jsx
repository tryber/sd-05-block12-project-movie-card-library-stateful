// implement AddMovie component here
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

  NewMovie() {
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

  class Form extends Component {
    
    render() { 
      return (
        <form>
          <label htmlFor="title">
            Título
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={this.state.subtitle}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="img">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="resumo">
            Sinopse
            <textarea name="storyline" value={this.state.storyline} onChange={this.handleChange} />
          </label>
          <label htmlFor="note">
            Avaliação
            <input
              type="number"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChangeNum}
            />
          </label>
          <label htmlFor="gender">
            Gênero
            <select name="genre" value={this.state.genre} onChange={this.handleChange}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button onClick={this.NewMovie}>Adicionar filme</button>
        </form>
      );
    }
    export default Form;
  }
 

  render() {
    const { subtitle, title, imagePath, storyline, genre } = this.props;
    return (
      <Form />
    );
  }
}
export default AddMovie;