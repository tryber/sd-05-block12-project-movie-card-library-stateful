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
    this.insertTitle = this.insertTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.insertSubtitle = this.insertSubtitle.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  insertTitle() {
    return (
      <label htmlFor="title">
        Título
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  insertSubtitle() {
    return (
      <label htmlFor="title">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.insertTitle()}
          {this.insertSubtitle()}
        </form>
      </div>
    );
  }
}

export default AddMovie;
