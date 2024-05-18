import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePluse = () => {
    if (count<= 9) {
      setCount(count + 1);
    }
  };

  const handleMinos = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={handlePluse}>+</button>
      <div>{count}</div>
      <button onClick={handleMinos}>-</button>
    </>
  );
};
