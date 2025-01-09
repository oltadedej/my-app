import React from "react";

const InputField = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Input Value:', event.target.value);
    };
  
    return <input type="text" onChange={handleChange} />;
  };

  export default InputField;