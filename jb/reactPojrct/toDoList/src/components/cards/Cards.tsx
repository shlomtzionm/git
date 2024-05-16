import { Card } from '@mui/material';
import {  removeItem } from '../../featurs/listSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeName, changeValue, setCounter } from '../../featurs/settingSlice';



export const Cards = () => {
  
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.list);
   
    const handleRemoving = (task: string) => {
        dispatch(removeItem(task));
    };

    const handleEdit = (task: string) => {
        const value = (list[task])
       dispatch(changeName({name:task}));
       dispatch(changeValue({value}));
       dispatch(setCounter(1))
    };

    useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <>
            {Object.keys(list)
                .filter(task => task !== "counter")
                .map((task) => (
                    <Card 
                        style={{ width: "200px", textAlign: 'center' }} 
                        key={task}
                        onClick={() => handleEdit(task)}
                    >
                        <button onClick={() => handleRemoving(task)}>x</button>
                        <h2>{task}</h2>
                        <h4> {list[task]}</h4>
                    </Card>
                ))}
        </>
    );
};
