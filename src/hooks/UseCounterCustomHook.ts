import { useState } from "react";

// Define the return type of the hook
type UseCounterType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// Custom Hook
const UseCounterCustomHook = (initialValue: number = 0): UseCounterType => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset }; 
  //deklarimi per exportim i funksionaliteteve te useCounterCustomHook
};

export default UseCounterCustomHook;
