import React, { Component } from 'react';
import './css/app.css';
import './css/react-bootstrap-table-all.min.css';
import Header from './components/header.jsx';
import NewTransaction from './components/new-transaction';
import TransactionsList from './components/transactions-list';
import Total from './components/total';

class App extends Component {
  constructor() {
    super();
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.getSubtotals = this.getSubtotals.bind(this);
    this.state = {
      transactions: JSON.parse(localStorage.getItem('swimo-transactions')) || [],
      total: JSON.parse(localStorage.getItem('swimo-total')) || 0,
      subtotals: JSON.parse(localStorage.getItem('swimo-subtotals')) || {
        'Courses': 0,
        'Factures': 0,
        'Impôts': 0,
        'Loyer': 0,
        'Plaisir Perso': 0,
        'Salaire': 0,
        'Santé': 0,
        'Sorties': 0,
        'Transports': 0,
        'Autres': 0
      }
    };
  }

  componentDidUpdate() {
    this.saveLocally();
  }

  getTotal (amount) {
    const newTotal = this.state.total + Number(amount);
    this.setState({total: newTotal});
  }

  getSubtotals (amount, category) {
    const newSubtotals = this.state.subtotals;
    newSubtotals[category] += Number(amount);
    this.setState({subtotals: newSubtotals});
  }

  handleAddTransaction(obj) {
    let transactions = this.state.transactions;
    transactions.push(obj);
    this.setState({transactions: transactions});
    this.getTotal(obj.amount);
    this.getSubtotals(obj.amount, obj.category);
  }

  saveLocally() {
    localStorage.setItem('swimo-transactions', JSON.stringify(this.state.transactions));
    localStorage.setItem('swimo-total', JSON.stringify(this.state.total));
    localStorage.setItem('swimo-subtotals', JSON.stringify(this.state.subtotals));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="component-row">
          <NewTransaction
            transactions={this.state.transactions}
            onAddTransaction={this.handleAddTransaction}
          />
          <div className="spacer"></div>
          <Total
            transactions={this.state.transactions}
            total={this.state.total}
          />
          <div className="spacer"></div>
        </div>
        <div className="component-row">
          <TransactionsList
            transactions={this.state.transactions}
          />
        </div>
      </div>
    );
  }
}

export default App;
