import React, { Component } from 'react';
import './css/app.css';
import Header from './components/header.jsx';
import NewTransaction from './components/new-transaction';
import TransactionsList from './components/transactions-list';
import Total from './components/total';

class App extends Component {
  constructor() {
    super();
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.getTotalAmount = this.getTotalAmount.bind(this);
    this.state = {
      transactions: [],
    };
  }

  getTotalAmount () {
    const transactions = this.state.transactions;
    const amounts = [];
    transactions.map( item => {
      return amounts.push(Number(item.amount));
    });

    let newTotal = amounts.reduce( (a, b) => {
      return a + b;
    }, 0);

    this.setState({total: newTotal});
    this.saveLocally(newTotal, transactions);
  }

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
        <TransactionsList
          transactions={this.state.transactions}
        />
      </div>
    );
  }
}

export default App;
