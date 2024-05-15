import  { useEffect } from 'react';
import BasicTable from "./Table";
import { AddName } from "./AddName";
import { Select } from "./select";
import { useDispatch } from "react-redux";
import { setGrades } from "../features/gradesSlice";



export const HomePage = () => {
  const dispatch = useDispatch();


  const fetchDate = async () => {
    const res = await fetch("http://localhost:3000/grades");
    const data = await res.json();
    dispatch(setGrades(data));

  };

  useEffect(() => {
    fetchDate();
  }),[];

  return (
    <>
      <BasicTable/>
      <AddName />
      <br />
      <Select/>
    </>
  );
};
