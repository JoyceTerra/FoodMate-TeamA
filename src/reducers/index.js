import { combineReducers } from 'redux'
//import { reducer as formReducer } from '../../../../.cache/typescript/2.9/node_modules/@types/redux-form'
import food from './food'
import image from './image'
import me from './me'
import users from './UserList';

export default combineReducers({
  food,
  image,
//  form: formReducer,
  me,
  users
})