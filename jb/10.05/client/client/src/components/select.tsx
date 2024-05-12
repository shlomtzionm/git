import React, { useState } from "react";
import { Delete } from "./Delete";
import { Edit } from "./Edit";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Select = () => {

    interface GradesObj{
        name:string,grade:number
    }
    

    
    const [selected, setSelected] = useState("");
    const grades = useSelector((state: RootState) => state.grades) as GradesObj[];

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };

    return (
        <>
            <select onChange={handleSelect}>
                {grades.map((item) => (
                    <option key={item.name} value={item.name}>{item.name}</option>
                ))}
            </select>
            <Edit>{selected}</Edit>
            <Delete />
        </>
    );
};
