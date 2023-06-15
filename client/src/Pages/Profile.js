import React, { useState, useEffect } from 'react';
import axios from 'axios';

function  ProfilePage(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${props.userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [props.userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}

export default ProfilePage;