import React, { useState } from 'react';

const Counter = () => {
 // Declare a state variable called "count" and a function to update it
  const [count, setCount] = useState<number>(0); // Explicitly typing the state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;