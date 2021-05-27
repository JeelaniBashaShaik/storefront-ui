import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import store from './redux/store';

import Landing from './containers/landing';
import './style.css';
import ProtectedRoute from './containers/protectedRoute';
import ProfileWizard from './containers/profileWizard';
import WelcomeScreen from './components/welcome';
import Home from './containers/home';

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
          <ProtectedRoute path="/welcome">
            <WelcomeScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/home">
            <Home />
          </ProtectedRoute>
        </Switch>
      </Router>
    </Provider>
  );
}
