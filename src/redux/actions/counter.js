import { INCREMENT, DECREMENT } from './../types/counter';

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => {
  return {
    type: DECREMENT
  };
};

