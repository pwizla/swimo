import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTransaction'
import VisibleTransactionList from '../containers/VisibleTransactionList'

const App = () => (
  <div>
    <Header />
    <AddTransaction />
    <VisibleTransactionList />
    <Footer />
  </div>
)

export default App
