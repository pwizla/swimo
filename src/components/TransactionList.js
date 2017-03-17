import React, { PropTypes } from 'react'
import Transaction from './Transaction'

const TransactionList = ({ transactions, onToggleCheckClick }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Checked</th>
      </tr>
    </thead>
    <tbody>
      {transaction.map(transaction =>
        <Transaction
          key={transaction.id}
          {...transaction}
          onClick={() => onToggleCheckClick(transaction.id)}
        />
      )}
    </tbody>
  <table>
)

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.date.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isrequired).isRequired,
  onToggleCheckClick: PropTypes.func.isRequired
}

export default TransactionList
