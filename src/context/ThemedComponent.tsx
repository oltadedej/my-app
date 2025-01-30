import { useTheme } from "./ThemeContext";
import React, { useState } from "react";

const ThemedComponent: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };
  
  export default ThemedComponent;