import React from 'react';
import SETTINGS from '../lib/settings';

class  NewTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      description: '',
      category: '',
      amount: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if (this.state.date !== '' 
        && this.state.description !== ''
        && this.state.amount
        && this.state.category)
    {
      this.props.onAddTransaction({
        key: Date.now(),
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: Number(this.state.amount).toFixed(2),
      });
    }
    this.handleClearForm();
    event.preventDefault();
  }

  handleClearForm() {
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: '',
    })
  }
  
  render() {
    return (
      <div className="component-container subtle-highlight">
        <div className="new-transac-box">
          <div className="title-box">
            Ajouter une transaction
          </div>
          <div className="form-box">
            <form onSubmit={this.handleSubmit}>
              <label className="new-transac-form-item">
                <span className="label-title">Date :&nbsp;</span>
                <input
                  name="date"
                  type="date"
                  className="input-box"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                />
              </label>
              <label className="new-transac-form-item">
                <span className="label-title">Description :&nbsp;</span>
                <input
                  name="description"
                  type="text"
                  className="input-box"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </label>
              <label className="new-transac-form-item">
                <span className="label-title">Catégorie :&nbsp;</span>
                <select
                  name="category"
                  className="input-box"
                  value={this.state.category}
                  onChange={this.handleInputChange}>
                  {SETTINGS.categories.map( item => {
                    return <option key={item} value={item}>{item}</option>
                  })}
                </select>
              </label>
              <label className="new-transac-form-item">
                <span className="label-title">Montant :&nbsp;</span>
                <input
                  name="amount"
                  type="number"
                  className="input-box"
                  value={this.state.amount}
                  onChange={this.handleInputChange}
                />
              </label>
              <div className="submit-line">
                <input type="submit" value="Ajouter" className="submit-btn"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTransaction;
