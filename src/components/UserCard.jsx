import React, { useState } from 'react';
import '../App.css';  // הוספת קובץ ה-CSS

const UserCard = ({ user, onUpdate, onDelete,onUserSelect }) => {
  const [showOtherData, setShowOtherData] = useState(false);
  const [editedUser, setEditedUser] = useState(user);  
  const [isSelected, setisSelected] = useState(false);  
  const borderColorClass = user.hasUncompletedTasks ? 'red-border' : 'green-border';
  const backgroundColorStyle = isSelected ? { backgroundColor: 'orange' } : {};

  const toggleOtherData = () => {
    setShowOtherData(prevState => !prevState); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "street" || name === "city" || name === "zipcode") {
      setEditedUser(prevUser => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [name]: value, 
        }
      }));
    } else {
      setEditedUser(prevUser => ({
        ...prevUser,
        [name]: value, 
      }));
    }
  };

  const handleUpdate = () => {
    onUpdate(editedUser);  
  };

  const handleDelete = () => {
    onDelete(user.id);  
  };
  const handleSelect = () => {
    setisSelected(!isSelected);
    if(!isSelected){
    onUserSelect(user.id);  
    }
    else{
      onUserSelect(-99);  
    }
  };

  
  return (
    <div className={`user-card ${borderColorClass}`}
    style={backgroundColorStyle}
    >
      <div onClick={() => handleSelect(user.id)}>
        <strong>ID:</strong> {user.id}
      </div>
      <div>
        <strong>Name:</strong>
        <input 
          type="text" 
          name="name" 
          value={editedUser.name} 
          className="user-input" 
          onChange={handleChange} 
        />
      </div>
      <div>
        <strong>Email:</strong>
        <input 
          type="email" 
          name="email" 
          value={editedUser.email} 
          className="user-input" 
          onChange={handleChange} 
        />
      </div>
      <div className="button-container">
        <button className="button other" onClick={toggleOtherData}>Other Data</button>
        <button className="button update" onClick={handleUpdate}>Update</button>
        <button className="button delete" onClick={handleDelete}>Delete</button>
      </div>

      {showOtherData && (
        <div className="other-data">
          <div>
            <strong>Street:</strong>
            <input 
              type="text" 
              name="street" 
              value={editedUser.address.street} 
              className="user-input" 
              onChange={handleChange} 
            />
          </div>
          <div>
            <strong>City:</strong>
            <input 
              type="text" 
              name="city" 
              value={editedUser.address.city} 
              className="user-input" 
              onChange={handleChange} 
            />
          </div>
          <div>
            <strong>Zipcode:</strong>
            <input 
              type="text" 
              name="zipcode" 
              value={editedUser.address.zipcode} 
              className="user-input" 
              onChange={handleChange} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
