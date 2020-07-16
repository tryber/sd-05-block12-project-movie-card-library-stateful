import React from 'react';
import InputElement from './InputElement';
import InputText from './InputText.jsx';
import InputNumber from './InputNumber.jsx';
import BoxOptions from './BoxOptions.jsx';

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

  render() {
    return (
      <form>
        <InputElement
          label="title" titulo="Título" value={this.state.title} change={this.handleChange}
        />
        <InputElement
          label="subtitle" titulo="Subtítulo" value={this.state.subtitle} change={this.handleChange}
        />
        <InputElement
          label="img" titulo="Imagem" value={this.state.imagePath} change={this.handleChange}
        />
        <InputText
          label="storyline" titulo="Sinopse" value={this.state.storyline} change={this.handleChange}
        />
        <InputNumber
          label="rating" titulo="Avaliação" value={this.state.rating} change={this.handleChangeNum}
        />
        <BoxOptions
          label="gender" titulo="Gênero" value={this.state.genre} change={this.handleChange}
        />
        <button type="button" onClick={this.NewMovie}>Adicionar filme</button>
      </form>
    );
  }
}
export default AddMovie;