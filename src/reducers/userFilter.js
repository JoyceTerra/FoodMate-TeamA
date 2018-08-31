import { UPDATE_LUNCH, UPDATE_DINNER, UPDATE_25, UPDATE_40, UPDATE_65, UPDATE_OLDER, UPDATE_35, UPDATE_50, UPDATE_75, UPDATE_HIGH } from '../actions/updateFilter'
import { userData } from './userData'



export default (state = userData, action = {}) => {
    switch(action.type) {
        case UPDATE_LUNCH:
            return action.payload
        case UPDATE_DINNER:
            return action.payload
        case UPDATE_25:
            return action.payload
        case UPDATE_40:
            return action.payload
        case UPDATE_65:
            return action.payload
        case UPDATE_OLDER:
            return action.payload
        case UPDATE_35:
            return action.payload
        case UPDATE_50:
            return action.payload
        case UPDATE_75:
            return action.payload
        case UPDATE_HIGH:
            return action.payload
        default: 
            return state 
    }
  }
