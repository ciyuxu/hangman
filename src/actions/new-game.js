import myWords from '../collectionOfWords'
export const NEW_GAME = 'NEW_GAME'




export default () => {
var word = myWords[Math.floor(Math.random() * myWords.length)]
return {
  type: NEW_GAME,
  payload: word
};
}
