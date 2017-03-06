import React, { Component } from 'react';
import './css/app.css';
import Header from './components/header.jsx';
import NewTransaction from './components/new-transaction';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <NewTransaction />
      </div>
    );
  }
}

export default App;
