import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      imagePath: '',
    };
  }

  searchTitle(element) {
    const { name, value } = element.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <label 
            htmlFor="title">Título
            <input 
              onChange={this.searchTitle}
              value={this.state.title} 
              id="title" 
              type="text" 
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
