/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import InputText from './InputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';
import Select from './Select';
import MovieButton from './MovieButton';

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
    this.changeHandler = this.changeHandler.bind(this);
    this.numChangeHandler = this.numChangeHandler.bind(this);
  }

  initState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  numChangeHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: parseFloat(value) });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        <InputText id="title" texto="Título" e={this.changeHandler} value={title} />
        <InputText id="subtitle" texto="Subtítulo" e={this.changeHandler} value={subtitle} />
        <InputText id="imagePath" texto="Imagem" e={this.changeHandler} value={imagePath} />
        <TextArea id="storyline" texto="Sinopse" e={this.changeHandler} value={storyline} />
        <InputNumber id="rating" texto="Avaliação" e={this.numChangeHandler} value={rating} />
        <Select id="genre" texto="Gênero" e={this.changeHandler} value={genre} />
        <MovieButton onClick={() => { onClick(this.state); this.initState(); }} />
      </form>
    );
  }
}

export default AddMovie;
