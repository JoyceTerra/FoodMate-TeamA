import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import food from './food'

const rootReducer = combineReducers({
  food,
  form: formReducer
})
const store = createStore(rootReducer)

export default combineReducers
