import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import food from './food'

export default combineReducers({
  food,
  form: formReducer
})