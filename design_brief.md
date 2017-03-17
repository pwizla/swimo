# Design Brief

* Show a list of transactions
* on click, a transaction is toggled checked or unchecked
* show a form where the user may add a new transaction
* show a toggle to show all, only checked, or only unchecked transactions

# Presentational Components

* **`TransactionList`** is a list showing visible transactions
   * `transactions: Array` is an array of transaction items with `{ id, date, description, category, amount, checked }` shape
   * `onToggleCheckClick(id: number)` is a callback to invoke when a transaction check toggle is clicked
* **`Transaction`** is a single transaction item
   * `description: string` is the description of the transaction
   * `date: date` is its date
   * `category: string` is the budget category it belongs to
   * `amount: number.toFixed(2)` is its amount (positive or negative)
   * `onToggleCheckClick()` is a callback to invoke when a transaction check toggle is clicked
* **`Link`** is a link with a callback
   * `onClick()` is a callback to invoke when link is clicked
* **`Footer`** is where the user change currently visible transactions
* **`App`** is the root component that renders everything else

# Container Components

* **`VisibleTransactionList`** filters the transactions according to the current display filter and renders a `TransactionList`
* **`FilterLink`** gets the current display filter and renders a `Link`
   * `filter: string` is the display filter it represents

# Other Components

* **`AddTransaction`** is a form group with an 'Add' button
