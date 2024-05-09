import { Card } from '@mui/material'
import { removeItem } from '../../featurs/listSlice';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const Cards = () => {
    
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.list);

    const handleRemoving = (task:string) => {
        dispatch(removeItem(task));
    };

    const [editableTask, setEditableTask] = useState<string | null>(null);

    const handleEdit = (task: string) => {
        setEditableTask(task);
    };

    useEffect(()=>{
        console.log(list)
    },[list])

    return (
        <>
            {Object.keys(list).map(task => (
                <Card 
                    style={{ 'width': "200px", 'textAlign': 'center' }}
                    key={task}
                    onDoubleClick={() => handleEdit(task)}
                    onClick={() =>alert("aa") }
                
                >
                    <button onClick={()=>handleRemoving(task)}>x</button>
                    <h4>{task}</h4>
                    <textarea className={`textarea ${editableTask === task ? 'editing' : ''}`}
                 disabled={editableTask !== task}
                 defaultValue={list[task]}
                 ></textarea>
                </Card>
            ))}
        </>
    );
}
