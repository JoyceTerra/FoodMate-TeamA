import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import food from './food'
import image from './image'
import me from './me'
import UserReducer from './reducer-users';

export default combineReducers({
  food,
  image,
  form: formReducer,
  me,
  UserReducer
})