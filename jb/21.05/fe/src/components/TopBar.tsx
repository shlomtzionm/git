import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button  as MuiButton} from '@mui/material';
import { changeIsDog } from '../features/isDogSlice';
import { useDispatch } from 'react-redux'

export const TopBar = () =>{

 
  const dispatch = useDispatch()
 
    return (<>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            adopt
          </Typography>
          <MuiButton color="inherit" onClick={()=>dispatch(changeIsDog(false))}>cats</MuiButton>
          <MuiButton color="inherit" onClick={()=>dispatch(changeIsDog(true))}>dogs</MuiButton>
        </Toolbar>
      </AppBar>
    </Box>
    
    </>)
}