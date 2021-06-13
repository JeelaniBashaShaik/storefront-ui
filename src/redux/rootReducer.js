import { combineReducers } from 'redux';
import { CountReducer } from './reducers/counter';
import { LoginReducer } from './reducers/login';
import { StoreDetailsReducer } from './reducers/storeDetails';

export const rootReducer = combineReducers({
  counter: CountReducer,
  user: LoginReducer,
  storeDetails: StoreDetailsReducer
});
