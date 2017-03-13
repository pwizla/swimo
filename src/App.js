import React, { Component } from 'react';
import './css/app.css';
import './css/react-bootstrap-table-all.min.css';
import _ from 'lodash';
import Header from './components/header.jsx';
import NewTransaction from './components/new-transaction';
import TransactionsList from './components/transactions-list';
import Total from './components/total';
import BudgetTable from './components/budget-table';
import SETTINGS from './lib/settings';

class App extends Component {
  constructor() {
    super();
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.handleToggleChecked = this.handleToggleChecked.bind(this);
    this.saveLocally = this.saveLocally.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.getBudget = this.getBudget.bind(this);
    this.state = {
      transactions: JSON.parse(localStorage.getItem('swimo-transactions')) || [],
      total: JSON.parse(localStorage.getItem('swimo-total')) || 0,
      budget: JSON.parse(localStorage.getItem('swimo-budget')) || SETTINGS.budget,
      flatBudget: JSON.parse(localStorage.getItem('swimo-flatbudget')) || [],
    };
  }

  componentDidMount() {
    this.getFlatBudget();
  }

  componentDidUpdate() {
    this.saveLocally();
  }

  getTotal (amount) {
    const newTotal = this.state.total + Number(amount);
    this.setState({total: newTotal});
  }

  getBudget (amount, category) {
    const newBudget = this.state.budget;
    newBudget[category].engaged += -Number(amount);
    newBudget[category].restant = newBudget[category].enveloppe - newBudget[category].engaged;
    this.setState({budget: newBudget});
  }

  getFlatBudget() {
    // required to use react-bootstrap-table
    const budget = this.state.budget;
    let newFlatBudget = [];
    let categories = Object.keys(budget);
    categories.map( categ => {
      let flatCategory = {
        category: categ,
        enveloppe: budget[categ].enveloppe.toFixed(2),
        engaged: budget[categ].engaged.toFixed(2),
        restant: budget[categ].restant.toFixed(2),
      }
      return newFlatBudget.push(flatCategory);
    });
    this.setState({flatBudget: newFlatBudget});
  }

  handleAddTransaction(obj) {
    let transactions = this.state.transactions;
    transactions.push(obj);
    this.setState({transactions: transactions});
    this.getTotal(obj.amount);
    this.getBudget(obj.amount, obj.category);
    this.getFlatBudget();
  }

  saveLocally() {
    localStorage.setItem('swimo-transactions', JSON.stringify(this.state.transactions));
    localStorage.setItem('swimo-total', JSON.stringify(this.state.total));
    localStorage.setItem('swimo-budget', JSON.stringify(this.state.budget));
    localStorage.setItem('swimo-flatbudget', JSON.stringify(this.state.flatBudget));
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
          <Total
            transactions={this.state.transactions}
            total={this.state.total}
          />
        </div>
        <div className="component-row">
          <TransactionsList
            transactions={this.state.transactions}
          />
          <BudgetTable
            flatBudget={this.state.flatBudget}
          />
        </div>
      </div>
    );
  }
}

export default App;
