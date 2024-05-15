import { Card } from '@mui/material';
import { removeItem, setCounter } from '../../featurs/listSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

interface CardsProps {
    setName: (value: string) => void;
    setValue: (value: string) => void;
}

export const Cards = ({ setName, setValue }: CardsProps) => {
  
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.list);

    const handleRemoving = (task: string) => {
        dispatch(removeItem(task));
    };

    const handleEdit = (task: string) => {
        setName(task);
        setValue(list[task]); 
dispatch(setCounter(1))    };

    useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <>
            {Object.keys(list).map((task) => (
                <Card 
                    style={{ width: "200px", textAlign: 'center' }} 
                    key={task}
                    onClick={() => handleEdit(task)}
                >
                    <button onClick={() => handleRemoving(task)}>x</button>
                    <h4>{task}</h4>
                    <textarea defaultValue={list[task]}></textarea>
                </Card>
            ))}
        </>
    );
};
