
import {  useState } from 'react';
import '../homePage/homePage.css'
import { Input , Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addItem } from '../../featurs/listSlice';
import { Cards } from '../cards/Cards';



export const HomePage = () => {
    const { TextArea } = Input;
    const dispatch = useDispatch();
   
    const handleAdding = () => {
        dispatch(addItem({ name: name, value: value }));
    };
  

    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    
    return (
        <>
            <TextArea rows={1} className='itemHeader' placeholder='enter task name' onChange={(e) => { setName(e.target.value) }} />
            <TextArea className='text' placeholder='enter task' onChange={(e) => { setValue(e.target.value) }} />
            <Button type="text" className='saveButton' onClick={handleAdding}>save</Button>
            <div className='taskContainer'>
         <Cards/>
            </div>
            
        </>
    );
};

