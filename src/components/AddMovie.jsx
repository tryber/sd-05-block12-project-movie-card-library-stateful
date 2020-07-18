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
  }
  setFilterValue = event => {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    })
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" onChange={this.setFilterValue.title} />
          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" id="subtitle" onChange={this.setFilterValue.subtitle} />
          <label htmlFor="image">Imagem</label>
          <input type="text" id="image" onChange={this.setFilterValue.imagePath} />
          <label htmlFor="synopsis">Sinopse</label>
          <textarea id="synopsis" onChange={this.setFilterValue.storyline}></textarea>
          <label htmlFor="number">Avaliação</label>
          <input type="number" id="number" onChange={this.setFilterValue.rating} />
          <label htmlFor="gender">Gênero</label>
          <select id="gender" onChange={this.setFilterValue.genre}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
