import { combineReducers } from 'redux'
import food from './food'
import image from './image'
import me from './me'
import userData from './userData';
import userFilter from './userFilter';

export default combineReducers({
  food,
  image,
  me,
  userData,
  userFilter
})