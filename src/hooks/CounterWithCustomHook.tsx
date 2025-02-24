import React from "react";
import UseCounterCustomHook from "./UseCounterCustomHook";

const CounterWithCustomHook = () => {
    //importimi i eksportimeve nga UseCounterCustomHook
  const { count, increment, decrement, reset } = UseCounterCustomHook(0);

  return (
    <div>
      <h2>Counter with custom hook: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterWithCustomHook;
