import React, { useState } from 'react';
import TodoForm from './TodoForm';
import PostForm from './PostForm';

const TodosAndPosts = ({ todos, posts, markTodoAsCompleted, addTodo, addPost }) => {
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [isAddingPost, setIsAddingPost] = useState(false);

  const handleAddClick = (type) => {
    if (type === 'todo') setIsAddingTodo(true);
    if (type === 'post') setIsAddingPost(true);
  };

  const handleCancelClick = (type) => {
    if (type === 'todo') setIsAddingTodo(false);
    if (type === 'post') setIsAddingPost(false);
  };

  const handleSaveClick = (type, title, body) => {
    if (type === 'todo') {
      addTodo(title);
      setIsAddingTodo(false);
    } else if (type === 'post') {
      addPost({ title, body });
      setIsAddingPost(false);
    }
  };

  return (
    <div className="todos-and-posts-container">
      <div className="todos-container">
        <h3>Todos</h3>
        {isAddingTodo ? (
          <TodoForm
            onSave={(title) => handleSaveClick('todo', title)}
            onCancel={() => handleCancelClick('todo')}
          />
        ) : (
          <>
            <button onClick={() => handleAddClick('todo')}>Add Todo</button>
            {todos.map((todo) => (
              <div key={todo.id} className={`todo-card ${todo.completed ? 'completed' : ''}`}>
                <strong>{todo.title}</strong>
                {!todo.completed && (
                  <button   onClick={() => markTodoAsCompleted(todo.id)}>Mark as Completed</button>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      <div className="posts-container">
        <h3>Posts</h3>
        {isAddingPost ? (
          <PostForm
            onSave={(title, body) => handleSaveClick('post', title, body)}
            onCancel={() => handleCancelClick('post')}
          />
        ) : (
          <>
            <button onClick={() => handleAddClick('post')}>Add Post</button>
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TodosAndPosts;
