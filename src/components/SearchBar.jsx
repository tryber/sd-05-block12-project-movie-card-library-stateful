// implem git add ent Sea rchBar comp onent here

import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  submitFormHandler = event => {
    event.preventDefault();
    console.log(this.refs.name.value);
  }
  onSearchTextChange = () =>{

  };
  
  render(){
    return(
      <form onSubmit={this.submitFormHandler}>
        <label> Inclui o texto:
         <div>
            <input 
              type='text'
              name=''
              value={this.state.searchText}
              onChange={this.onSearchTextChange}
            />
         </div>
        </label>
        </form>
      

    );
  }
}
export default Searchbar;