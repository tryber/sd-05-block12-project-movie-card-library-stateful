// implement AddMovie component here
import React from 'react';
import Input from './Input'

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline:'',
      genre: 'action',
    };
    this.changeTitle=this.changeTitle.bind(this);
    this.buttonClick=this.buttonClick.bind(this);
  }
  
  changeTitle(event) {
    this.setState({[event.target.id]:event.target.value})
  }
  buttonClick(event) {
    this.props.onclick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline:'',
      genre: 'action',
    });
  }
  
  render() {
    const { onclick } = this.props;
    return (
      <form>
      <Input htmlFor="title" typeInput="text" textLabel="Título" valueInput={this.state.title} onChange={this.changeTitle} idInput="title" />
      <Input htmlFor="subtitle" typeInput="text" textLabel="Subtítulo" valueInput={this.state.subtitle} onChange={this.changeTitle} idInput="subtitle" />
      <Input htmlFor="imagePath" typeInput="text" textLabel="Imagem" valueInput={this.state.imagePath} onChange={this.changeTitle} idInput="imagePath" />
      <label htmlFor="storyline">"Sinopse"</label>
      <textarea value={this.state.storyline} onChange={this.changeTitle} id="storyline"></textarea>
      <Input htmlFor="rating" typeInput="number" textLabel="Avaliação" valueInput={this.state.rating} onChange={this.changeTitle} idInput="rating" />
      <label htmlFor="genre">Gênero</label>
      <select id="genre" onChange={this.changeTitle}>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
      <button onclick={this.buttonClick}>Adicionar filme</button>

      </form>
    );
  }
}

export default AddMovie;

/*   - subtítulo
  - título
  - caminho da imagem
  - sinopse
  - avaliação
  - gênero */