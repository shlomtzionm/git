import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCounter } from "../../featurs/counterSlice";


export const AddCounter = () => {
  const dispatch = useDispatch();
  const [counterName, setCounterName] = useState("");

  const handleNewName = () => {
    const trimmedName = counterName.trim();
    if (!trimmedName) {
      alert('Counter name cannot be empty');
      return;
    }
    dispatch(addCounter(trimmedName));
    setCounterName(""); // Clear input field after adding
  };

  return (
    <>
      <input 
        type="text"
  
        onChange={(e) => setCounterName(e.target.value)}
      />
      <button onClick={handleNewName}>Add Counter</button>
    </>
  );
};
