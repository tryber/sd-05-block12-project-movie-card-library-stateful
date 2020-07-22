// implement AddMovie component here
import React from 'react';
import InputField from './InputField';
import TextArea from './TextAreaField';
import CheckBox from './CheckBox';

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

    this.change = this.change.bind(this);
    this.addThisMovie = this.addThisMovie.bind(this);
  }

  change(event) {
    const { name } = event.target;
    let { value } = event.target;
    if (name === 'rating') value = parseFloat(value);
    this.setState({ [name]: value });
  }

  addThisMovie(e) {
    e.preventDefault();
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
        <InputField
          name="title" title="Título" type="text" value={this.state.title} func={this.change}
        />
        <InputField
          name="subtitle" title="Subtítulo" type="text" value={this.state.subtitle}
          func={this.change}
        />
        <InputField
          name="imagePath" title="Imagem"type="text"value={this.state.imagePath}func={this.change}
        />
        <TextArea
          name="storyline" title="Sinopse" value={this.state.storyline} handleChange={this.change}
        />
        <InputField
          name="rating" title="Avaliação" type="number" value={this.state.rating} func={this.change}
        />
        <CheckBox
          name="genre" title="Gênero" value={this.state.genre} handleChange={this.change}
          ids={['action', 'comedy', 'thriller']} types={['Ação', 'Comédia', 'Suspense']}
        />
        <button onClick={this.addThisMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
