import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for the user data
export interface UserAxios {
  id?: number;
  name: string;
  username: string;
  email: string;
}

const UserListWithAxios: React.FC = () => {
  const [users, setUsers] = useState<UserAxios[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 
  // Function to fetch users from the API
 const fetchUsers = async () => {
    try {
      const response = await axios.get<UserAxios[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); //therritja e funksionit
  }, []); //empty array do therritet vec nje here ne momentin qe komponenti do beje load

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListWithAxios;