import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Function to handle user deletion
  const handleDelete = async () => {
    if (!userId) {
      setError('Please enter a valid user ID');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setSuccess(true); // Indicate successful deletion
      setLoading(false);
    } catch (err) {
      setError('Failed to delete user');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Delete a User</h1>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID (1-10)"
          required
        />
      </div>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete User'}
      </button>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>User deleted successfully!</div>}
    </div>
  );
};

export default DeleteUser;