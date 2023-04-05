import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from './auth/Auth';
import Navigation from './layout/Navigation';
import Callback from './pages/Callback';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App({ history }) {
  const auth = new Auth(history);

  return (
    <>
      <Navigation auth={auth} />
      <div className="body">
        <Route
          exact
          path="/"
          component={(props) => <Home auth={auth} {...props} />}
        />
        <Route
          exact
          path="/callback"
          component={(props) => <Callback auth={auth} {...props} />}
        />
        <Route
          path="/profile"
          component={(props) =>
            auth.isAuthenticated() ? (
              <Profile auth={auth} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </div>
    </>
  );
}

export default App;
