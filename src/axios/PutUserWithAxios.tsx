import React, { useState } from 'react';
import axios from 'axios';
import { UserAxios } from './UserListWithAxios';


const UpdateUser: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserAxios | null>(null);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!userId) {
      setError('Please enter a valid user ID');
      return;
    }

    setLoading(true);
    setError(null);

    const updatedUser: UserAxios = {
      id: parseInt(userId, 10), // Convert userId to a number takes only ids from 1-10
      name,
      username,
      email,
    };

    try {
      const response = await axios.put<UserAxios>(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        updatedUser
      );
      setUser(response.data); // Save the updated user
      setLoading(false);
    } catch (err) {
      setError('Failed to update user');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Update a User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
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
          {loading ? 'Updating...' : 'Update User'}
        </button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {user && (
        <div>
          <h2>Updated User:</h2>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;