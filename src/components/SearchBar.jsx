// implem git add ent Sea rchBar comp onent here

import React from 'react';

class Searchbar extends React.Component {
  
  render(){
    return(
      <form>
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