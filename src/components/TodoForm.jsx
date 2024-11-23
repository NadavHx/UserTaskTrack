import React, { useState } from 'react';

const TodoForm = ({ onSave, onCancel }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  return (
    <div className="add-todo-form">
      <div>
        <input
          type="text"
          placeholder="Enter todo title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => onSave(newTodoTitle)}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default TodoForm;
