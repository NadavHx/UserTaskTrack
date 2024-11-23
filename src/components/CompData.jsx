import { useState, useEffect } from 'react';
import UserList from './UserList';
import TodosAndPosts from './TodosAndPosts';
import AddUser from './AddUser';
import { getAll } from '../utils';


import '../App.css';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const CompData = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userdata, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAddUser, setSelectedAddUser] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: usersData } = await getAll(USERS_URL);
        const { data: todosData } = await getAll(TODOS_URL);
        const { data: postsData } = await getAll(POSTS_URL);

        setUsers(usersData);
        setTodos(todosData);
        setPosts(postsData);

        const userfulldata = usersData.map((user) => {
          const userTodos = todosData.filter((todo) => todo.userId === user.id);
          const hasUncompletedTasks = userTodos.some((todo) => !todo.completed);
          return { ...user, hasUncompletedTasks };
        });

        setData(userfulldata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const updatedUsers = userdata.map((user) => {
      const userTodos = todos.filter((todo) => todo.userId === user.id);
      const hasUncompletedTasks = userTodos.some((todo) => !todo.completed);
      return { ...user, hasUncompletedTasks };
    });
    setData(updatedUsers);
  }, [todos]);

  const handleDelete = (userId) => {
    setData((prevData) => prevData.filter((user) => user.id !== userId));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = searchTerm
    ? userdata.filter((user) => {
        const nameMatches = user.name.toLowerCase().includes(searchTerm.toLowerCase());
        const emailMatches = user.email.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatches || emailMatches;
      })
    : userdata;

  const handleUpdate = (updatedUser) => {
    setData((prevData) =>
      prevData.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const selectedUserTodos = selectedUser ? todos.filter((todo) => todo.userId === selectedUser) : [];
  const selectedUserPosts = selectedUser ? posts.filter((post) => post.userId === selectedUser) : [];

  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
    if (userId === -99) setSelectedUser(null);
  };

  const markTodoAsCompleted = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      )
    );
  };

  const addTodo = (title) => {
    
    const newTodo = {
      id: todos.length + 1,
      userId: selectedUser,
      title,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const addPost = (obj) => {
    const newPost = {
      userId: selectedUser,
      id: posts.length + 1,
      title: obj.title,
      body: obj.body,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const addUser = (newUserName, newUserEmail) => {
    const newUser = {
      id: users.length + 1,
      name: newUserName,
      email: newUserEmail,
    };
    setData((prevUsers) => [newUser, ...prevUsers]);
    setUsers((prevUsers) => [newUser, ...prevUsers]);
    setSelectedAddUser(false);
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="button" onClick={() => setSelectedAddUser(!selectedAddUser)}>
          Add
        </button>
      </div>

      <div className="main-container">
        <div className="user-list-container">
          <UserList
            users={filteredUsers}
            onUserSelect={handleUserSelect}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            selectedUser={selectedUser}
          />
        </div>
        <div>
          {selectedAddUser && (
            <AddUser
              onSave={addUser}
              onCancel={() => {
                setSelectedAddUser(false);
              }}
            />
          )}
        </div>

        {selectedUser && (
          <TodosAndPosts
            todos={selectedUserTodos}
            posts={selectedUserPosts}
            markTodoAsCompleted={markTodoAsCompleted}
            addTodo={addTodo}
            addPost={addPost}
          />
        )}
      </div>
    </div>
  );
};

export default CompData;
