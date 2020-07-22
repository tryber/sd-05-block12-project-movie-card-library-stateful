// implement AddMovie component here
import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline: '',
      genre: 'action',
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  changeTitle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  buttonClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline: '',
      genre: 'action',
    });
    return true;
  }
  render() {
    // const { onclick } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = this.state;
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <Input htmlFor="title" typeInput="text" textLabel="Título" valueInput={title} onChange={this.changeTitle} idInput="title" />
        <Input htmlFor="subtitle" typeInput="text" textLabel="Subtítulo" valueInput={subtitle} onChange={this.changeTitle} idInput="subtitle" />
        <Input htmlFor="imagePath" typeInput="text" textLabel="Imagem" valueInput={imagePath} onChange={this.changeTitle} idInput="imagePath" />
        <label htmlFor="storyline">Sinopse</label>
        <textarea value={storyline} onChange={this.changeTitle} id="storyline" />
        <Input htmlFor="rating" typeInput="number" textLabel="Avaliação" valueInput={rating} onChange={this.changeTitle} idInput="rating" />
        <label htmlFor="genre">Gênero</label>
        <select id="genre" onChange={this.changeTitle}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.buttonClick}>Adicionar filme</button>

      </form>
    );
  }
}

export default AddMovie;
