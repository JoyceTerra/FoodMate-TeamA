import { combineReducers } from 'redux'
import image from './image'
import me from './me'
import userData from './userData';
import userFilter from './userFilter';

export default combineReducers({
  image,
  me,
  userData,
  userFilter
})