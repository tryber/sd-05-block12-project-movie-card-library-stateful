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
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <label htmlFor="subtitle">Subtítulo</label>
        <input
          type="text"
          value={this.state.subtitle}
          onChange={(e) => this.setState({ subtitle: e.target.value })}
        />
        <label htmlFor="image">Imagem</label>
        <input
          type="text"
          value={this.state.imagePath}
          onChange={(e) => this.setState({ imagePath: e.target.value })}
        />
      </form>
    )
  }
}

export default AddMovie;
