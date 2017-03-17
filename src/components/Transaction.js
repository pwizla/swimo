import React, { PropTypes } from 'react'

const Transaction = ({ onToggleCheckClick, checked, date, description, category, amount }) => (
  <tr>
    <td>{date}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{amount}</td>
    <td><input type="checkbox" checked={checked} onClick=(onToggleCheckClick)/></td> 
  </tr>
)

Transaction.propTypes = {
  onToggleCheckClick: PropTypes.func.isRequired,
  date: PropTypes.date.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired
}

export default Transaction
