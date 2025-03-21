import React from "react";

const ButtonClick = () => {
    const handleClick = (name: string) => {
      alert(`Hello, ${name}!`);
    };
  
    return <button onClick={() => handleClick('parameter')}>Click Me</button>;
  };

  export default ButtonClick;