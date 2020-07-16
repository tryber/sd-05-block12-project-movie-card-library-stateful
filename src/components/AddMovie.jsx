// implement AddMovie component here
import React from 'react';
import CreateInput from './CreateInput';
import CreateInputNumber from './CreateInputNumber';
import CreateComboBox from './CreateComboBox';
import CreateTextArea from './CreateTextArea';


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
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeNum(e) {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  addNewMovie() {
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
      <form action="">
        <CreateInput
          name="title" title="Título" value={this.state.title} function={this.handleChange}
        />
        <CreateInput
          name="subtitle" title="Subtítulo" value={this.state.subtitle} function={this.handleChange}
        />
        <CreateInput
          name="imagePath" title="Imagem" value={this.state.imagePath} function={this.handleChange}
        />
        <CreateTextArea
          name="storyline" title="Sinopse" value={this.state.storyline} function={this.handleChange}
        />
        <CreateInputNumber
          name="rating" title="Avaliação" value={this.state.rating} function={this.handleChangeNum}
        />
        <CreateComboBox
          name="genre" title="Gênero" value={this.state.genre} function={this.handleChange}
        />
        <button onClick={this.addNewMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
