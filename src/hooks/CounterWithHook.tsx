import { useState, useEffect } from "react";
import React from 'react';

const CounterWithHook = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // Varesia. Dmth sa here te ndryshoje counter-i aq here do therritet useEffect

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterWithHook;
