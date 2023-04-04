import React from 'react';

const Home = ({ auth }) => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => auth.login()}>Log In</button>
    </div>
  );
};

export default Home;
