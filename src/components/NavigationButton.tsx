import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton: React.FC = () => {
  const navigate = useNavigate();

  const goToUser = (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <button onClick={() => goToUser("789")}>Go to User 789</button>
  );
};

export default NavigateButton;
