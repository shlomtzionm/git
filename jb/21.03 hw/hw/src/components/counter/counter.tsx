import { FunctionComponent, useState } from "react";
import "./counter.css";
import { maxCount } from "../../data/counter";



export const Counter: FunctionComponent = () => {
  const [count, setCounter] = useState(0);


  const handlePlus = () => {
    setCounter((prev) => {
      if (prev < maxCount) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleMinos = () => {
    setCounter((prev) => {
      return prev - 1
    });
  };

  return (
    <>
      <button onClick={handlePlus}>+</button>
      <div>{count}</div>
      <button onClick={handleMinos}>-</button>
    </>
  );
};
