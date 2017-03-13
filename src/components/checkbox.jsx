import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <input
        name={this.props.thisKey}
        type='checkbox'
        checked={this.props.checked}
        onChange={this.props.onToggleChecked}
      />
    );
  }
}

export default Checkbox;
