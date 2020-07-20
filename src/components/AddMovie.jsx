import React from 'react';
import ImpTxt from './ImpTxt';
import NumImp from './ImpTxt';
import SelBx from './SelBx';
import TxtA from './ImpTxtA';

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
    this.AddNovo = this.AddNovo.bind(this);
    this.chaS = this.chaS.bind(this);
  }
  AddNovo() {
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
  chaS(i) {
    const { name, value } = i.target;
    console.log(i.target);
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }
  
  render() {
    return (
      <form action="" type="submit">
        <div>

          <ImpTxt nome="title" txt="Título" val={this.state.title} mud={this.chaS} />
          <ImpTxt nome="subtitle" txt="Subtítulo" val={this.state.subtitle} mud={this.chaS} />
          <ImpTxt nome="imagePath" txt="Imagem" val={this.state.imagePath} mud={this.chaS} />
          <TxtA nome="storyline" txt="Sinopse" val={this.state.storyline} mud={this.chaS} />
          <NumImp nome="rating" txt="Avaliação" val={this.state.rating} mud={this.chaS} />
          <SelBx name="genre" val={this.state.genre} func={this.chaS} texto="Gênero" />
          <button onClick={this.AddNovo} type="button">Adicionar filme</button>
        </div>
      </form>
    );
  }
}

export default AddMovie;
