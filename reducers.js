import { combineReducers } from 'redux'
import { ADD_TRANSACTION, TOGGLE_CHECKED, SET_DISPLAY_FILTER, DisplayFilters } from './actions'

const { SHOW_ALL } = DisplayFilters;

function displayFilter(state = SHOW_ALL, action) {
  console.log("action: ", action);
  switch (action.type) {
    case SET_DISPLAY_FILTER:
      return action.filter
    default:
      return state
  }
}

function transactions(state = [], action) {
  switch (action.type) {
    case ADD_TRANSACTION: 
      return [
        ...state,
        {
          date: action.date,
          description: action.description,
          category: action.category,
          amount: action.amount,
          checked: false
        }
      ]
    case TOGGLE_CHECKED:
      return state.map((transaction, index) => {
        if (index === action.index) {
          return Object.assign({}, transaction, {
            checked: !transaction.checked
          })
        }
        return transaction
      })
    default: 
      return state
  }
}

const swimoApp = combineReducers({
  displayFilter,
  transactions
})

export default swimoApp
