import React from 'react';
import CI from './CreateInput';
import CIP from './CreateImagePath';
import CSLI from './CreateStorylineInput';
import CRI from './CreateRatingInput';
import CGI from './CreateGenreInput';

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
    this.hC = this.hC.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }
  hC(e) {
    const { name, value } = e.target;
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
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
      <form>
        <CI name="title" title="Título" value={this.state.title} function={this.hC} />
        <CI name="subtitle" title="Subtítulo" value={this.state.subtitle} function={this.hC} />
        <CIP name="imagePath" title="Imagem" value={this.state.imagePath} function={this.hC} />
        <CSLI name="storyline" title="Sinopse" value={this.state.storyline} function={this.hC} />
        <CRI name="rating" title="Avaliação" value={this.state.rating} function={this.hC} />
        <CGI name="genre" title="Gênero" value={this.state.genre} function={this.hC} />
        <button onClick={this.addNewMovie} type="button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
