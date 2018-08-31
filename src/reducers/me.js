import { UPDATE_MI } from '../actions/updateMi'

export default (state = {}, action = {}) => {
    switch(action.type) {
        case UPDATE_MI:
            return action.payload    
        default: 
            return state 
    }
  }

