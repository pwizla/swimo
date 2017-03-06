import React, { Component } from 'react';
import './css/app.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
