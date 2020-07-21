// implement AddMovie component here
import React from 'react';

class Input extends React.Component {
  render() {
    
    return (
      <div>
        <label htmlFor={this.props.htmlFor}>{this.props.textLabel}</label>
        <input type={this.props.typeInput} value={this.props.valueInput}
        onChange={this.props.onChange} id={this.props.idInput}
        />
      </div>
    );
  }
}

export default Input;
