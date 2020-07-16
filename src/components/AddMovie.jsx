// implement AddMovie component here
import React from 'react';
import Field from './Field';

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
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const onClick = this.props.onClick;
    await onClick(this.state);
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
          name="subtitle"
          title="Subtítulo"
          value={this.state.subtitle}
          function={this.handleChange}
        />
        <Field
          name="imagePath"
          title="Imagem"
          value={this.state.imagePath}
          function={this.handleChange}
        />
      </form>
    );
  }
}
export default AddMovie;
