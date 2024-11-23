import React from 'react';
import UserCard from './UserCard';
import '../App.css'; 

const UserList = ({ users, onUpdate, onDelete,onUserSelect }) => {
  return (
    <div className="user-list-container">
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
          onUserSelect={onUserSelect} 
        />
      ))}
    </div>
  );
};

export default UserList;
