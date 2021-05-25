import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import store from './redux/store';

import { Landing } from './components/landing';
import './style.css';
import ProtectedRoute from './containers/protectedRoute';
import ProfileWizard from './containers/profileWizard';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <ProtectedRoute path="/profileWizard">
            <ProfileWizard />
          </ProtectedRoute>
        </Switch>
      </Router>
    </Provider>
  );
}
