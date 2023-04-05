import React, { useEffect, useState } from 'react';

const Profile = ({ auth }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const { getProfile } = auth;
    getProfile((profile, error) => {
      setProfile(profile);
      setError(error);
    });
  });

  if (!profile) return null;

  return (
    <>
      <h1>Profile</h1>
      <p>{profile.nickname}</p>
      <img
        style={{ maxWidth: 50, maxHeight: 50 }}
        src={profile.picture}
        alt=""
      />
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </>
  );
};

export default Profile;
