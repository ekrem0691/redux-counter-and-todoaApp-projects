import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const reset = () => {
  return {type: RESET};
};





// import { DECREMENT, INCREMENT, RESET } from '../types/counterTypes';

// export const increment = () => {
//   return { type: INCREMENT };
// };


//? returnu ve {} parantezi silersek () parantez içine tek satırlık kod yazabiliriz...
// export const decrement = () => ({ type: DECREMENT });
// export const reset = () => ({ type: RESET });
