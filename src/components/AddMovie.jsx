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
    this.CH = this.CH.bind(this);
    this.CN = this.CH.bind(this);
    // this.updateState = this.updateState.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  CH(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  CN(event) {
    event.preventDefault();
    const { name, value } = event.target;
    const num = number(value);
    this.setState(() => ({ [name]: num }));
  }
//  updateState(name, value) {
//    this.setState(() => ({ [name]: value }));
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
    const S = this.state;
    return (
      <form>
        <label htmlFor="title">Título
        <input name="title" type="text" value={S.title} onChange={this.CH} /></label>
        <label htmlFor="subtitle">Subtítulo
        <input name="subtitle" type="text" value={S.subtitle} onChange={this.CH} /></label>
        <label htmlFor="imagePath">Imagem
        <input name="imagePath" type="text" value={S.imagePath} onChange={this.CH} /></label>
        <label htmlFor="storyline">Sinopse
          <textarea name="storyline" value={S.storyline} onChange={this.CH} /></label>
        <label htmlFor="rating">Avaliação
        <input name="rating" type="number" value={S.rating} onChange={this.CN} /></label>
        <label htmlFor="genre">Gênero
            <select value={this.state.genre} onChange={this.CH}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select></label>
        <button onClick={() => { onClick(S); this.clear(); }} >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
