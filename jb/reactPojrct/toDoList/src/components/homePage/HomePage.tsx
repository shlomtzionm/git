import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import '../homePage/homePage.css'
import { Input , Button } from 'antd';
import { addItem, removeItem } from '../../featurs/listSlice';
import { RootState } from '../../store/store';
import { Card } from '@mui/material'

export const HomePage = () => {
    const { TextArea } = Input;
    const [name, setName] = useState("");
    const [value, setValue] = useState("");

    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.list);

    const handleAdding = () => {
        dispatch(addItem({ name: name, value: value }));
    };

    const handleRemoving = (task:string) => {
        dispatch(removeItem(task));
    };
    useEffect(()=>{
        console.log(list)
    },[list])
    return (
        <>
            <TextArea rows={1} className='itemHeader' placeholder='enter task name' onChange={(e) => { setName(e.target.value) }} />
            <TextArea className='text' placeholder='enter task' onChange={(e) => { setValue(e.target.value) }} />
            <Button type="text" className='saveButton' onClick={handleAdding}>save</Button>
            <div className='taskContainer'>
            {Object.keys(list).map(task => (
                <Card style={{ 'width': "200px" ,'textAlign':'center'}} key={task}>
                 <button onClick={()=>handleRemoving(task)}>x</button>
                    <h4>{task}</h4>
                    <p>{list[task]}</p>
                </Card>
            ))}
            </div>
            
        </>
    );
};

