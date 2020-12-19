import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import LoginComponent from '../components/LoginComponent';
import SignUpComponent from '../components/SignUpComponent';

export default function Routing() {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpComponent />
      </Route>
      <Route path="/">
        <LoginComponent />
      </Route>
    </Switch>
  )
}