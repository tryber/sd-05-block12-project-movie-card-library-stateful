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
      genre: 'action'
    }

    this.changeInputValue = this.changeInputValue.bind(this);

  }

  changeInputValue(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  changeInputRatingValue(e) {
    let { name, num } = e.target;
    this.setState({ [name]: Number(num) });
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
    this.setState(this.state)
  }

  render() {
    return (
      <section>
        <form>
          <label>
            Título
            <input type="text" name="title" value={this.state.title} onChange={this.changeInputValue} />
          </label>
          <label>
            Subtítulo
            <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.changeInputValue} />
          </label>
          <label>
            Imagem
            <input type="text" name="image" value={this.state.imagePath} onChange={this.changeInputValue} />
          </label>
          <label>
            Sinopse
            <textarea type="text" name="storyline" value={this.state.storyline} onChange={this.changeInputValue} />
          </label>
          <label>
            Rating
            <input type="number" name="rating" value={this.state.rating} onChange={this.changeInputRatingValue} />
          </label>
          <label>
            Gênero
            <select name="genre" value={this.state.genre} onChange={this.changeInputValue}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button onClick={this.onClick}>Adicionar filme</button>
        </form>
      </section>
    )
  }
}

export default AddMovie

