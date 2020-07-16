import React from 'react';

class Form extends Component {
  rendertitle() {
    return (
      <div>
        <label htmlFor="title">
          Título
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
  render() {
    return (
      <form>
        {this.rendertitle()}
        <label htmlFor="title">
          Título
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="resumo">
          Sinopse
          <textarea name="storyline" value={this.state.storyline} onChange={this.handleChange} />
        </label>
        <label htmlFor="note">
          Avaliação
          <input
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.handleChangeNum}
          />
        </label>
        <label htmlFor="gender">
          Gênero
          <select name="genre" value={this.state.genre} onChange={this.handleChange}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={this.NewMovie}>Adicionar filme</button>
      </form>
    );
  }
}
export default Form;
