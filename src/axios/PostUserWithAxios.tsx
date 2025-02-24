import React, { useState } from 'react';
import axios from 'axios';
import { UserAxios } from './UserListWithAxios';

// Define the type for the user data

const CreateUser: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserAxios | null>(null);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);
    setError(null);

    const newUser: UserAxios = {
      name, //get values from local state
      username,
      email,
    };

    try {
      const response = await axios.post<UserAxios>('https://jsonplaceholder.typicode.com/users', newUser);
      setUser(response.data); // Save the created user
      setLoading(false);
    } catch (err) {
      setError('Failed to create user');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create a New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create User'}
        </button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {user && (
        <div>
          <h2>Created User:</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default CreateUser;