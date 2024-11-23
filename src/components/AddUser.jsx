import React, { useState } from 'react';

const AddUser = ({ onSave, onCancel }) => {
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  return (
    <div className="add-user-form">
      <div>
        Name:
        <input 
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <div>
        Email:
        <input
          type="text"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => onSave(newUserName, newUserEmail)}>Add</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AddUser;
