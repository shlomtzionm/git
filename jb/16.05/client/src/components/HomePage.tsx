import { useEffect, useState } from "react";
import { Cards } from "./Cards";

export const HomePage = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [value, setValue] = useState("");

  const getList = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("http://localhost:3000/todo", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setList(json); })
      .catch((error) => console.error(error));
  };

  useEffect(getList, []);

  const handleSave = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      id: Math.floor(Math.random() * (1000 - 3 + 1)) + 3,
      task: task,
      value: value
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3000/todo", requestOptions)
      .then((response) => response.json())
      .then((json) => {console.log(json); getList() })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Cards onChange={getList}>{list}</Cards>
      <input placeholder="enter task" onChange={(e) => setTask(e.target.value)} />
      <input placeholder="enter value" onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSave}>save</button>
    </>
  );
};
