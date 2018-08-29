import { UPDATE_MI } from '../components/actions/updateMi'

export default (state = {}, action = {}) => {
    console.log(action.type === UPDATE_MI)
    switch(action.type) {
        case UPDATE_MI:
            return console.log('Helloooooo', action.payload), action.payload    
        default: 
            return state 
    }
  }

