import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navigation from './layout/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className="body">
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </>
  );
}

export default App;
