import { NEW_GAME } from '../actions/new-game'
import { GUESS } from '../actions/guess'

const initialState = 6

export default (state = initialState, {type, payload} = {}) => {
  switch (type) {
    case GUESS :
    return (payload.isRight? state : state - 1)

    case NEW_GAME :
    return initialState

    default :
    return state
  }
}
