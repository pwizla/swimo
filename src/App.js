import React, { Component } from 'react';
import './css/app.css';
import './css/react-bootstrap-table-all.min.css';
import Header from './components/header.jsx';
import NewTransaction from './components/new-transaction';
import TransactionsList from './components/transactions-list';
import Total from './components/total';
import BudgetTable from './components/budget-table';

class App extends Component {
  constructor() {
    super();
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.getBudget = this.getBudget.bind(this);
    this.state = {
      transactions: JSON.parse(localStorage.getItem('swimo-transactions')) || [],
      total: JSON.parse(localStorage.getItem('swimo-total')) || 0,
      budget: JSON.parse(localStorage.getItem('swimo-budget')) || {
        'Courses': {
          'enveloppe': 50,
          'engaged': 0,
          'restant': 0,
        },
        'Factures': {
          'enveloppe': 150,
          'engaged': 0,
          'restant': 0,
        },
        'Impôts': {
          'enveloppe': 230,
          'engaged': 0,
          'restant': 0,
        },
        'Loyer': {
          'enveloppe': 375,
          'engaged': 0,
          'restant': 0,
        },
        'Plaisir Perso': {
          'enveloppe': 30,
          'engaged': 0,
          'restant': 0,
        },
        'Salaire': {
          'enveloppe': 1500,
          'engaged': 0,
          'restant': 0,
        },
        'Santé': {
          'enveloppe': 78,
          'engaged': 0,
          'restant': 0,
        },
        'Sorties': {
          'enveloppe': 30,
          'engaged': 0,
          'restant': 0,
        },
        'Transports': {
          'enveloppe': 80,
          'engaged': 0,
          'restant': 0,
        },
        'Autres': {
          'enveloppe': 0,
          'engaged': 0,
          'restant': 0,
        },
      },
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
    const budget = this.state.budget;
    let newFlatBudget = [];
    let categories = Object.keys(budget);
    categories.map( categ => {
      let flatcatg = {
        category: categ,
        enveloppe: budget[categ].enveloppe,
        engaged: budget[categ].engaged,
        restant: budget[categ].restant,
      }
      return newFlatBudget.push(flatcatg);
    });
    this.setState({flatBudget: newFlatBudget});
  }

  handleAddTransaction(obj) {
    let transactions = this.state.transactions;
    transactions.push(obj);
    this.setState({transactions: transactions});
    this.getTotal(obj.amount);
    this.getBudget(obj.amount, obj.category);
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
          <div className="spacer"></div>
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
