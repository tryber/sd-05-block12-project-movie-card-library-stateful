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
    this.setFilterValue = this.setFilterValue.bind(this);
  }

  setFilterValue(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
          <input type="text" name="title" id="title" value={this.state.title} onChange={this.setFilterValue} />
          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" name="subtitle" id="subtitle" value={this.state.subtitle} onChange={this.setFilterValue} />
          <label htmlFor="image">Imagem</label>
          <input type="text" name="imagePath" id="image" value={this.state.imagePath} onChange={this.setFilterValue} />
          <label htmlFor="synopsis">Sinopse</label>
          <textarea id="synopsis" name="storyline" value={this.state.storyline} onChange={this.setFilterValue} />
          <label htmlFor="number">Avaliação</label>
          <input type="number" name="rating" id="number" value={this.state.rating} onChange={this.setFilterValue} />
          <label htmlFor="gender">Gênero</label>
          <select id="gender" onChange={this.setFilterValue}>
            <option name="action" value={this.state.action}>Ação</option>
            <option name="comedy" value={this.state.comedy}>Comédia</option>
            <option name="thriller" value={this.state.thriller}>Suspense</option>
          </select>
          <button>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
