/*
 * action types
 */

export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const TOGGLE_CHECKED = 'TOGGLE_CHECKED'
export const SET_DISPLAY_FILTER = 'SET_DISPLAY_FILTER'

/*
 * other constants
 */

export const DisplayFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_CHECKED: 'SHOW_CHECKED',
  SHOW_UNCHECKED: 'SHOW_UNCHECKED'
}

export const WARNING_THRESHOLD = 200;

/*
 * action creators
 */

export function addTransaction(date, description, category, amount) {
  return { type: ADD_TRANSACTION, date, description, category, amount }
}

export function toggleChecked(index) {
  return { type: TOGGLE_CHECKED, index }
}

export function setDisplayFilter(filter) {
  return { type: SET_DISPLAY_FILTER, filter }
}
