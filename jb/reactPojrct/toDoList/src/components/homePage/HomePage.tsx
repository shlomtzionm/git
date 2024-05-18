
import '../homePage/homePage.css';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../featurs/listSlice';
import { Cards } from '../cards/Cards';
import { RootState } from '../../store/store';
import { changeName, changeValue } from '../../featurs/settingSlice';

export const HomePage = () => {
    const { TextArea } = Input;
    const dispatch = useDispatch();
const setting = useSelector((state:RootState)=>state.setting)

    const handleAdding = () => {

        dispatch(addItem({ name:setting.name , value: setting.value }));
        
    };

    return (
        <>
            <TextArea 
                rows={1} 
                className='itemHeader' 
                placeholder='Enter task name'
                onChange={(e) => dispatch(changeName({name:e.target.value}))} 
         value={setting.name}
         />
            <TextArea 
                className='text' 
                placeholder='Enter task' 
                onChange={(e) => dispatch(changeValue({value:e.target.value}))} 
           value={setting.value}
           />
            <Button 
                type="text" 
                className='saveButton' 
                onClick={handleAdding}
            >
                Save
            </Button>
            <div className='taskContainer'>
                <Cards />
            </div>
        </>
    );
};
