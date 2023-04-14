import React from 'react';

const UserProfile = ({ name, age }) => {
  const isOver18 = age >= 18;

  return (
    <div>
      <h2>{name}</h2>
      {isOver18 ? (
        <p>Age: {age}</p>
      ) : (
        <p>Sorry, you are too young to view your age.</p>
      )}
    </div>
  );
};

export default UserProfile;
