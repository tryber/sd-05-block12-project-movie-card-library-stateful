// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    } 
    this.changeHandler = this.changeHandler.bind(this);
    // this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeHandler = event => {
    event.preventDefault();
    let { name, value } = event.target;
    this.updateState(name, value)
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
    }));
  }

  handleSubmit = state => {

  };

  render() {
    return (
      <div>
      <form>
        <label>
        Título
        <input name="title" type="text" value={this.state.title} onChange={this.changeHandler} />
        </label>
        <label>
        Subtítulo
        <input name="subtitle" type="text" value={this.state.subtitle} onChange={this.changeHandler} />
        </label>
        <label>
        Imagem
        <input name="imagePath" type="text" value={this.state.imagePath} onChange={this.changeHandler} />
        </label>
        <label>
        Sinopse
          <textarea name="storyline" value={this.state.storyline} onChange={this.changeHandler} />
        </label>
        <label>
        Avaliação
        <input name="rating" type="number" value={this.state.rating} onChange={this.changeHandler} />
        </label>
        <label>
        Gênero
            <select value={this.state.genre} onChange={this.changeHandler}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button onClick={} type='submit'>Adicionar filme</button>
      </form>
      </div>
    );
  }
}

export default AddMovie;
