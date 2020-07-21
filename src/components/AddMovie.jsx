// implement AddMovie component here
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
    this.change = this.change.bind(this);
  }

  buttonChange() {
      this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form>
        <label>Título</label>
        <label>Subtítulo</label>
        <input>
        <label>Imagem</label>
        <input/>
        <label>Sinopse</label>
        <textarea/>
        <label>Avaliação</label>
        <input/>
        <label>Gênero</label>
        <select>
          <option>Ação</option>
          <option>Comédia</option>
          <option>Suspense</option>
        </select>
        <button>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;