import React from 'react';

class textBar extends React.Component {
  render() {
    const { value, change } = this.props;
    return (
      <label htmlFor="#filme">Inclui o texto:
          <div>
            <input
              id="#filme"
              type="text"
              name="filme"
              value={value}
              onChange={change}
            />
          </div>
      </label>
    );
  }

}

export default textBar;
