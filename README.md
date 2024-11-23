# UserTaskTrack - User, Todos, and Posts Management System

## Overview
UserTaskTrack is a comprehensive web application for managing users, their todos, and posts. This system provides an easy-to-use interface for viewing, updating, and adding users, todos, and posts, with dynamic updates and a focus on user interaction.

---

## Features
### **User Management**
- **View Users**: Displays a list of all users with the ability to search by name or email.
- **Add Users**: Add a new user with a name and email using a dynamic form.
- **Update User Details**: Modify user details including address (street, city, and zipcode).
- **Delete Users**: Remove a user and all associated data.
- **Select Users**: Highlight selected users with a distinct background color.

### **Todos Management**
- **View Todos**: Display all todos associated with the selected user.
- **Add Todos**: Add new todos dynamically using a form.
- **Mark as Completed**: Mark todos as completed, with completed todos styled differently.

### **Posts Management**
- **View Posts**: Display all posts associated with the selected user.
- **Add Posts**: Add new posts with a title and body using a dynamic form.

### **Dynamic Search and Styling**
- **Search Users**: Real-time filtering of users by name or email.
- **Dynamic Styling**: 
  - Users with uncompleted tasks are highlighted with a red border.
  - Completed todos have a distinct style.

---

## Tech Stack
- **Frontend**: React,JavaScript, HTML, CSS
- **Backend API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (mock data)

---

## Project Structure
### Components:
1. **`CompData`**:
   - The main component responsible for fetching and managing data for users, todos, and posts.
   - Handles search, user selection, and dynamic updates.
2. **`UserList`**:
   - Displays a list of users with individual user cards.
   - Integrates search and delete functionality.
3. **`UserCard`**:
   - Represents a single user.
   - Allows updating user details, toggling other data (address), and selection.
4. **`AddUser`**:
   - A dynamic form for adding new users.
5. **`TodosAndPosts`**:
   - Displays todos and posts for the selected user.
   - Integrates forms for adding new todos and posts.
6. **`TodoForm` and `PostForm`**:
   - Sub-components for adding todos and posts dynamically.

### Utilities:
- **`getAll`**: A utility function for fetching data from APIs.

---

