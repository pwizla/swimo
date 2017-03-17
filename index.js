import { createStore } from 'redux'
import swimoApp from './reducers'
import { addTransaction, toggleChecked, setDisplayFilter, DisplayFilters } from './actions'

let store = createStore(swimoApp)

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTransaction('2017/03/03', 'Pole Emploi', 'Salaire', '1379'))
store.dispatch(addTransaction('2017/03/06', 'Loyer', 'Loyer', '-375'))
store.dispatch(addTransaction('2017/03/15', 'Taxe Habitation', 'Impôts', '-85'))
store.dispatch(toggleChecked(0))
store.dispatch(toggleChecked(1))
store.dispatch(setDisplayFilter(DisplayFilters.SHOW_CHECKED))

unsubscribe()
