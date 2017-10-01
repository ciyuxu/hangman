import { NEW_GAME } from '../actions/new-game'
import { GUESS } from '../actions/guess'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case GUESS :
    return state.concat(payload)

    case NEW_GAME :
    return []

    default :
    return state
  }
}
