import { INCREMENT, DECREMENT } from './../types/counter';

const initialState = {
  count: 0
};

export const CountReducer = (state = initialState, action) => {
  console.log('inside reducer');
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 }; 
    }
    case DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};
