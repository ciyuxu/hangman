export const GUESS = 'GUESS'

export default (guess) => ({
  type: GUESS,
  payload: guess
})

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
