import React from 'react';

class AddMovie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
    this.resetaEstados = this.resetaEstados.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: (name === 'rating') ? parseFloat(value) : value
    });
    console.log(this.state);
  }

  resetaEstados() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="AddMove">
        <label htmlFor="teste">Título</label>
        <input id="teste" name="title" type="text" value={title} onChange={this.onChangeHandle} />
        <label htmlFor="teste1">Subtítulo</label>
        <input id="teste1" type="text" name="subtitle" value={subtitle} onChange={this.onChangeHandle} />
        <label htmlFor="teste2">Imagem</label>
        <input id="teste2" type="text" name="imagePath" value={imagePath} onChange={this.onChangeHandle} />
        <label htmlFor="teste3">Sinopse</label>
        <textarea id="teste3" name="storyline" value={storyline} onChange={this.onChangeHandle} />
        <label htmlFor="teste4">Avaliação</label>
        <input type="number" id="teste4" name="rating" value={rating} onChange={this.onChangeHandle} />
        <label htmlFor="selectedGenre">Gênero</label>
        <select
          id="selectedGenre" name="genre" value={genre}
          onChange={this.onChangeHandle}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.resetaEstados}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
