import React, { useEffect } from 'react';

const Callback = ({ auth }) => {
  useEffect(() => {
    // Handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(window.location.hash)) {
      auth.handleAuthentication();
    } else {
      throw new Error('Invalid callback URL.');
    }
  }, []);

  return <h1>Loading...</h1>;
};

export default Callback;
