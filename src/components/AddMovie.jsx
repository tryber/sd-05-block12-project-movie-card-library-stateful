// implement AddMovie component here
import React from 'react';
import Field from './Field';
import FieldA from './FieldA';
import Num from './Num';
import Sel from './Sel';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeNum = this.handleChangeNum.bind(this);
  }

  handleChangeNum(e) {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
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
        <Field name="title" title="Título" value={this.state.title} function={this.handleChange} />
        <Field
          name="subtitle" title="Subtítulo" value={this.state.subtitle} function={this.handleChange}
        />
        <Field
          name="imagePath" title="Imagem" value={this.state.imagePath} function={this.handleChange}
        />
        <FieldA
          name="storyLine" title="Sinopse" value={this.state.storyLine} function={this.handleChange}
        />
        <Num
          name="rating" title="Avaliação" value={this.state.rating} function={this.handleChangeNum}
        />
        <Sel
          name="genre" title="Gênero" value={this.state.genre} function={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Adicionar filme</button>
      </form>
    );
  }
}
export default AddMovie;
