import { useState } from 'react';
import '../homePage/homePage.css';
import { Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addItem } from '../../featurs/listSlice';
import { Cards } from '../cards/Cards';

export const HomePage = () => {
    const { TextArea } = Input;
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [value, setValue] = useState("");

    const handleAdding = () => {
        dispatch(addItem({ name: name, value: value }));
        setName("");
        setValue("");
    };

    return (
        <>
            <TextArea 
                rows={1} 
                className='itemHeader' 
                placeholder='Enter task name' 
                value={name} // Link value to state
                onChange={(e) => setName(e.target.value)} 
            />
            <TextArea 
                className='text' 
                placeholder='Enter task' 
                value={value} // Link value to state
                onChange={(e) => setValue(e.target.value)} 
            />
            <Button 
                type="text" 
                className='saveButton' 
                onClick={handleAdding}
            >
                Save
            </Button>
            <div className='taskContainer'>
                <Cards setName={setName} setValue={setValue} />
            </div>
        </>
    );
};
