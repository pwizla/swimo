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
    this.getrealTotal = this.getrealTotal.bind(this);
    this.getBudget = this.getBudget.bind(this);
    this.state = {
      transactions: JSON.parse(localStorage.getItem('swimo-transactions')) || [],
      realTotal: JSON.parse(localStorage.getItem('swimo-realTotal')) || 0,
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

  handleToggleChecked(event) {
    const target = event.target;
    const name = target.name;
    const index = _.findIndex(this.state.transactions, (transac) => {
      return String(transac.key) === String(name);
    })
    const newTransactions = this.state.transactions;
    newTransactions[index].checked = !this.state.transactions[index].checked
    console.log("newTransactions[index].checked: ", newTransactions[index].checked);
    this.setState({newTransactions});
    console.log("this.state.transactions[index] ", this.state.transactions[index]);
  }

  getrealTotal (amount) {
    const newrealTotal = this.state.realTotal + Number(amount);
    this.setState({realTotal: newrealTotal});
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
    this.getrealTotal(obj.amount);
    this.getBudget(obj.amount, obj.category);
    this.getFlatBudget();
  }

  saveLocally() {
    localStorage.setItem('swimo-transactions', JSON.stringify(this.state.transactions));
    localStorage.setItem('swimo-realTotal', JSON.stringify(this.state.realTotal));
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
            realTotal={this.state.realTotal}
          />
        </div>
        <div className="component-row">
          <TransactionsList
            transactions={this.state.transactions}
            onSave={this.saveLocally}
            onToggleChecked={this.handleToggleChecked}
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
