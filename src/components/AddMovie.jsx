// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }
  changeTitle(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }
  buttonClick(evt) {
    const { onclick } = this.props;
    onclick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.state;
    return (
      <form>
        <input
          htmlFor="title"
          type="text"
          textLabel="titulo"
          value={title}
          onChange={this.changeTitle}
          inpuT="title"
        />
        <input
          htmlFor="subtitle"
          type="text"
          textLabel="Subtitulo"
          value={subtitle}
          onChange={this.changeTitle}
          inpuT="subtitle"
        />
        <input
          htmlFor="imagePath"
          type="text"
          textLabel="imagem"
          value={imagePath}
          onChange={this.changeTitle}
          inpuT="imagePath"
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea
          value={storyline}
          onChange={this.changeTitle}
          id="story"
        ></textarea>
        <input
          htmlFor="rating"
          type="number"
          textLabel="classificação"
          value={rating}
          onChange={this.changeTitle}
          inpuT="rating"
        />
        <label htmlFor="genre">Gênero</label>
        <select id="genre" onChange={this.changeTitle}>
          <option value="action">Ação</option>
          <option value="Comédia">Comédia</option>
          <option value="">Suspense</option>
        </select>
        <button onclick={this.buttonClick}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
