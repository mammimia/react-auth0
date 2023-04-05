import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ auth }) => {
  const { isAuthenticated, login } = auth;
  return (
    <div>
      <h1>Home</h1>
      {isAuthenticated() ? (
        <Link to="/profile">View profile</Link>
      ) : (
        <button onClick={() => login()}>Log In</button>
      )}
    </div>
  );
};

export default Home;
