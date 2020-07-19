// implement AddMovie component here
import React from 'react';
import InputElement from './InputElement';
import TextAreaInput from './TextAreaInput';
import InputNumber from './InputNumber';
import SelectBox from './SelectBox';

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
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.newCard = this.newCard.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeNumber(e) {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  newCard() {
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
          type="text" label="title" topic="Título"
          value={this.state.title} change={this.handleChange}
        />
        <InputElement
          type="text" label="subtitle" topic="Subtítulo"
          value={this.state.subtitle} change={this.handleChange}
        />
        <InputElement
          type="text" label="img" topic="Imagem"
          value={this.state.imagePath} change={this.handleChange}
        />
        <TextAreaInput
          label="storyline" topic="Sinopse" value={this.state.storyline} change={this.handleChange}
        />
        <InputNumber
          label="rating" topic="Avaliação"
          value={this.state.rating} change={this.handleChangeNumber}
        />
        <SelectBox
          label="genre" topic="Gênero" value={this.state.genre} change={this.handleChange}
        />
        <button type="button" onClick={this.newCard}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
