import React, { useState } from 'react';

const PostForm = ({ onSave, onCancel }) => {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  return (
    <div className="add-post-form">
      <div>
        <input
          type="text"
          placeholder="Enter post title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Enter post body"
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => onSave(newPostTitle, newPostBody)}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default PostForm;
