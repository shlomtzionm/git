import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { addOrEdit, changeIsDog } from '../../features/isDogSlice';
import { useDispatch } from 'react-redux'
import  logo  from "../../logo.png"
import "../topBar/topBar.css"
import FormDialog from '../modal/Modal';

export const TopBar = () =>{


  const dispatch = useDispatch()
 
    return (<>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="stickyTopBar" style={{backgroundColor:"white"}}>
        <Toolbar className='toolBar'>
          <button
          className='topBarButton'
          >
            <MenuIcon/>
          </button>
         <img src={logo} className='logo' />
         <div className='buttons'>
                  <button className='topBarButton' color="inherit" onClick={()=>dispatch(changeIsDog("cats"))}>cats</button>
          <button  className='topBarButton' color="inherit" onClick={()=>dispatch(changeIsDog("dogs"))}>dogs</button>
          <button  className='topBarButton' color="inherit" onClick={()=>dispatch(changeIsDog("home page"))}>home page</button>
          <button  className='topBarButton' color="inherit" onClick={()=>dispatch(addOrEdit("add"))}>add</button>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
    {/* <FormDialog setData={setData} open={open} handleClose={handleClose} data={children}></FormDialog> */}
    
    </>)
}