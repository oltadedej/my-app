import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../types/User";

const FilteredUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [minAge, setMinAge] = useState<number>(18);
  const [loading, setLoading] = useState<boolean>(false);

  const baseUrl = process.env.REACT_APP_BACK_END_API_URL;

  const fetchUsers = async (age: number) => {
    try {
      setLoading(true);
      const response = await axios.get<User[]>(`${baseUrl}/users/byAge`, {
        params: { age }
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(minAge);
  }, [minAge]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Filtered Users by Age</h2>

      <label className="block mb-4">
        Minimum Age:
        <input
          type="number"
          value={minAge}
          onChange={(e) => setMinAge(Number(e.target.value))}
          className="ml-2 p-1 border rounded"
        />
      </label>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 border rounded">
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilteredUsers;
