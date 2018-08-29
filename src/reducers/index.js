import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import food from './food'
import image from './image'

export default combineReducers({
  food,
  image,
  form: formReducer
})