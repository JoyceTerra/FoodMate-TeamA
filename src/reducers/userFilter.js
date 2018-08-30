import { UPDATE_LUNCH } from '../components/actions/updateFilter'
import { UPDATE_DINNER } from '../components/actions/updateFilter'
//import { lunchFilter, dinnerFilter } from './components/Filter'

export default (state = [], action = {}) => {
    console.log(action)
    switch(action.type) {
        case UPDATE_LUNCH:
            return action.payload.filter(user => user.MealType === "Lunch")   
        case UPDATE_DINNER:
            return action.payload
        default: 
            return state 
    }
  }