import React from "react";
import { useAuth } from "./AuthenticationContext";

export const LoginPage: React.FC = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        login({ id: "123", name: "John Doe" });
    };

    return <button onClick={handleLogin}>Login</button>;
};

export const LoginDashboard: React.FC = () => {
    const { user, logout } = useAuth();

    if (!user) return <p>Please log in</p>;

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};


