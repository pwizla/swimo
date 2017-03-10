import React from 'react';
const categories = ['Salaire', 'Impots', 'Loyer', 'Factures', 'Transport'];

class CategoryEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = {
      category: ''
    };
  }
  focus() {
    this.refs.inputRef.focus();
  }
  updateData() {
    this.props.onUpdate(this.props.category);
  }
  render() {
    return (
      <span>
        <select
          ref='inputRef'
          value={ this.props.category }
          onKeyDown={ this.props.onKeyDown }
          onChange={ (ev) => { this.setState({ category: ev.currentTarget.value }); } } >
          { categories.map(category => (<option key={ category } value={ category }>{ category }</option>)) }
        </select>
        <button
          className='btn btn-info btn-xs textarea-save-btn'
          onClick={ this.updateData }>
          save
        </button>
      </span>
    );
  }
}

export default CategoryEditor;
