export const GUESS = 'GUESS'

export default (guess) => {
  return (dispatch, getState) => {
    const { word } = getState();
    dispatch({
      type: GUESS,
      payload: { guess, isRight: word.includes(guess) }
    });
  };
}

// function a() {
//   return 1;
// }
//
// const a => 1;
//
// function b() {
//   return { something: 1 };
// }
//
// const b => ({ something: 1 });
