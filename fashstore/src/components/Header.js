import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import Addwear from './Addwear';


const Header = () => {
  return (
    <>
    <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >e
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button LinkComponent={<Addwear/>} to="/add" color="inherit">Add westwear</Button>
          <Button color="inherit">Westwears</Button>
        </Toolbar>
      </AppBar>
      
    </>
  )
}

export default Header