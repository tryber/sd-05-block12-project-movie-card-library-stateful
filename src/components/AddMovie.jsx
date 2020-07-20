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
    this.changeInputValue = this.changeInputValue.bind(this);
    this.changeInputRatingValue = this.changeInputRatingValue.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const onClick = this.props.onClick;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeInputRatingValue(e) {
    const { name, num } = e.target;
    this.setState({ [name]: Number(num) });
  }

  changeInputValue(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form> <label htmlFor="title"> Título
          <input type="text" value={this.state.title} onChange={this.changeInputValue} />
      </label>
        <label htmlFor="subtitle"> Subtítulo
          <input type="text" value={this.state.subtitle} onChange={this.changeInputValue} />
        </label>
        <label htmlFor="image"> Imagem
          <input type="text" value={this.state.imagePath} onChange={this.changeInputValue} />
        </label>
        <label htmlFor="storyline"> Sinopse
          <textarea type="text" value={this.state.storyline} onChange={this.changeInputValue} />
        </label>
        <label htmlFor="rating"> Rating
          <input type="number" value={this.state.rating} onChange={this.changeInputRatingValue} />
        </label>
        <label htmlFor="genre"> Gênero
          <select value={this.state.genre} onChange={this.changeInputValue}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={this.onClick}>Adicionar filme</button> </form>
    );
  }
}

export default AddMovie;
