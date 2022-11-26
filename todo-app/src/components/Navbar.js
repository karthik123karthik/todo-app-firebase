import * as React from 'react';
import {useState,useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default function ButtonAppBar() {
  const [login,setLogin] =  useState(false);
  const [user,setUser] = useState("");
  const auth = getAuth();


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
          setLogin(true);
          setUser(user);
      } else {

      }
    });
  },[]);


  return (
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
            MY TODO APP
          </Typography>
         <Link to="/signin"> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           { login?<>{user.displayName}</>:"Login"}
          </Typography></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
