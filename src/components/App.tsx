import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup/signup';
import { PrivateRoute } from './singles/PrivateRoute';

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
        </Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </BrowserRouter>
  );
}

export default App;
