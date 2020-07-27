import React, { Component } from 'react'

class AddMovie extends Component  {
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
  }

  handleChange = event => {
    const { name, value } = event.target
    
    name === 'rating'
    ? 
      this.setState({
        [name]: Number(value)
      }) 
    :
      this.setState({
        [name]: value
      })
  }

  handleButton = () => {

  }

  render() {
    return (
      <form>
        <input
          type='text'
          id='title'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        ></input>
        <label htmlFor='title'>Título</label>

        <input
          type='text'
          id='subtitle'
          name='subtitle'
          value={this.state.subtitle}
          onChange={this.handleChange}
        ></input>
        <label htmlFor='subtitle'>Subtítulo</label>

        <input
          type='text'
          id='imagePath'
          name='imagePath'
          value={this.state.imagePath}
          onChange={this.handleChange}
        ></input>
        <label htmlFor='imagePath'>Imagem</label>

        <textarea
          id='storyline'
          name='storyline'
          value={this.state.storyline}
          onChange={this.handleChange}
        >

        </textarea>
        <label htmlFor='storyline'>Sinopse</label>

        <input
          type='number'
          id='rating'
          name='rating'
          value={this.state.rating}
          onChange={this.handleChange}
        ></input>
        <label htmlFor='rating'>Avaliação</label>

        <select
          id='genre'
          name='genre'
          value={this.state.genre}
          onChange={this.handleChange}
        >
          <option value='action'>Ação</option>
          <option value='comedy'>Comédia</option>
          <option value='thriller'>Suspense</option>
        </select>
        <label htmlFor='rating'>Gênero</label>

        <button
          onClick={this.handleButton}
        >Adicionar filme</button>

      </form>
    )
  }
}

export default AddMovie