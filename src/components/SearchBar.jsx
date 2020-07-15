// implem git add ent Sea rchBar comp onent here

import React from 'react';

class Searchbar extends React.Component {
  render() {
    return (
      <form type="submit">
        <label htmlFor="filme">Inclui o texto:
          <div>
            <input id="#filme" type="text" name="filme" />
          </div>
        </label>
      </form>
    );
  }
}
export default Searchbar;
