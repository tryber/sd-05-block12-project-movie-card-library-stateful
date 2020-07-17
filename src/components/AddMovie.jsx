// implement AddMovie component here
import React from 'react';
// import MovieCard from './MovieCard';
import CadastraMovie from './CadastraMovie';
// const checkType = (tipo) => {
//   let texto;
//   if (tipo === 4) texto = 'number';
//   else if (tipo === 3) texto = 'textarea';
//   else texto = 'text';
//   return texto;
// };

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      //  bookmarked: '',
      genre: 'action',
    };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState(() => ({ [name]: (name !== 'rating') ? value : parseFloat(value) }));
  }

  // addMovie() {
  //   this.callBack();
  // }

  render() {
    // const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const cadastroDeFilme = Object.keys(this.state).slice(0, 3);
    // console.log(cadastroDeFilme);
    return (
      <form>
        {cadastroDeFilme.map((input, index) => (
          <CadastraMovie
            campo={input}
            contador={index}
            estado={this.state[input]}
            func={this.addMovie}
          />
        ))}
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" onChange={this.addMovie} value={this.state.storyline} />
        <label htmlFor="rating">Avaliação</label>
        <input name="rating" type="number" value={(this.state.rating)} onChange={this.addMovie} />
        {/* <label htmlFor="title">Título</label>
        <input name="title" type="text" value={titl
          e} onChange={this.addMovie} />
        <label htmlFor="subtitle">Subtítulo</label>
      <input name="title" type="text" value={subtitle} onChange={this.addMovie} /> */}
      </form>
    );
  }
}

export default AddMovie;
