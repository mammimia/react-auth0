import React, { useEffect } from 'react';

const Private = ({ auth }) => {
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    fetch('/private', {
      headers: {
        Authorization: `Bearer ${auth.getAccessToken()}`
      }
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Network response was not ok.');
      })
      .then((response) => setMessage(response.message))
      .catch((error) => setMessage(error.message));
  });

  return <div>{message}</div>;
};

export default Private;
