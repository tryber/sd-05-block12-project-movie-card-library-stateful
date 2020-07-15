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
    // this.changeHandler = this.changeHandler.bind(this);
    // this.updateState = this.updateState.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
// changeHandler = event => {
//   event.preventDefault();
//   let { name, value } = event.target;
//    this.updateState(name, value)
//  }

//  updateState(name, value) {
//    this.setState((state) => ({
//      [name]: value,
//    }));
//  }

  clear() {
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
    const { onClick } = this.props;
    return (
      <div><form>
        <label htmlFor="title">Título
        <input name="title" type="text" value={this.state.title} onChange={changeHandler} /></label>
        <label htmlFor="subtitle">Subtítulo
        <input name="subtitle" type="text" value={this.state.subtitle} onChange={changeHandler} /></label>
        <label htmlFor="imagePath">Imagem
        <input name="imagePath" type="text" value={this.state.imagePath} onChange={changeHandler} /></label>
        <label htmlFor="storyline">Sinopse
          <textarea name="storyline" value={this.state.storyline} onChange={changeHandler} /></label>
        <label htmlFor="rating">Avaliação
        <input name="rating" type="number" value={this.state.rating} onChange={changeHandler} /></label>
        <label htmlFor="genre">Gênero
            <select value={this.state.genre} onChange={changeHandler}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select></label>
        <button onClick={() => { onClick(this.state); this.clear(); }} >Adicionar filme</button>
      </form>
      </div>
    );
  }
}

export default AddMovie;
