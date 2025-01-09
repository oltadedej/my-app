import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> |  
        <Link to="settings">Settings</Link>
      </nav>

      {/* Outlet will render the nested route */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
