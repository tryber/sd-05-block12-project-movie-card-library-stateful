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
    const {subtitle, title, imagePath, storyline, rating, genre} = this.state;
    return (
      <form> <label htmlFor="title"> Título
          <input type="text" name="title" value={title} onChange={this.changeInputValue} />
      </label>
        <label htmlFor="subtitle"> Subtítulo
          <input type="text" name="subtitle" value={subtitle} onChange={this.changeInputValue} />
        </label>
        <label htmlFor="image"> Imagem
          <input type="text" name="image" value={imagePath} onChange={this.changeInputValue} />
        </label>
        <label htmlFor="storyline"> Sinopse
          <textarea type="text" name="storyline" value={storyline} onChange={this.changeInputValue} />
        </label>
        <label htmlFor="rating"> Rating
          <input type="number" name="rating" value={rating} onChange={this.changeInputRatingValue} />
        </label>
        <label htmlFor="genre"> Gênero
          <select name="genre" value={genre} onChange={this.changeInputValue}>
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
