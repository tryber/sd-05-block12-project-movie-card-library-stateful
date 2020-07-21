import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      filter:'all'
    }
  }
  // setValueFilter = event => {
  //   this.setState({
  //     filter:event.target.value == '' ?  'all' : event.target.value
  //     }) 
  //  }

  render() {
    return (
      <div className="movie-list">
        <input onChange={this.setValueFilter} type='text' />
      </div>
    );
  }
}

export default SearchBar;