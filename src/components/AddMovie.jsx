import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  // atualizaEstado(event) {
  //   console.log(event.target.value);
  //   //setState({ title: event.target.value });
  // }
  render() {
    console.log(this.state.title);
    return (
      <div>
        <form>
          <label htmlFor="">Título</label>
          <input type="text" value={this.state.title} />
        </form>
      </div>
    );
  }
}
