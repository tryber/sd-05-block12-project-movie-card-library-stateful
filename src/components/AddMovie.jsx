/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import InputText from './InputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';

class addMovie extends React.Component {
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
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    })
  }

  numChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: parseFloat(value)
    })
  }

  render() {
    return (
      <form>
        <InputText id="title" texto="Título" e={this.changeHandler} value={this.state.title} />
        <InputText id="subtitle" texto="Subtítulo" e={this.changeHandler} value={this.state.subtitle} />
        <InputText id="imagePath" texto="Imagem" e={this.changeHandler} value={this.state.imagePath} />
        <TextArea id="storyline" texto="Sinopse" e={this.changeHandler} value={this.state.storyline} />
        <InputNumber id="rating" texto="Avaliação" e={this.numChangeHandler} value={this.state.rating} />
      </form>
    );
  }
}

export default addMovie;
