import React from 'react';

// import SearchBar from './SearchBar';

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
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="link1">Título</label>
        <input type="text" name="link1" value={this.state.title} onChange={this.state.title} />
        <label htmlFor="link3">Subtítulo</label>
        <input type="text" name="link3" value={this.state.subtitle} onChange={this.state.subtitle} />
        <label htmlFor="link2">Imagem</label>
        <input type="text" name="link2" value={this.state.imagePath} />
      </form>
    );
  }
}

export default AddMovie;
