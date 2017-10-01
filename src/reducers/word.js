import { NEW_GAME } from '../actions/new-game'
import myWords from '../collectionOfWords'

export default (state = "hello", {type, payload} = {}) => {
  switch (type) {

    case NEW_GAME :
    return payload

    default :
    return state
  }
}
