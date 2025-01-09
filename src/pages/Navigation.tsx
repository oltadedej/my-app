import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/user/123">Go to User 123</Link>
      <Link to="/user/456">Go to User 456</Link>
    </nav>
  );
};

export default Navigation;
