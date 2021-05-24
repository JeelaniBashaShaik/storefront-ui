import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import { Home } from './components/home';
import './style.css';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}
