import { combineReducers } from 'redux';
import { CountReducer } from './reducers/counter';
import { LoginReducer } from './reducers/login';

export const rootReducer = combineReducers({
  counter: CountReducer,
  user: LoginReducer
});
