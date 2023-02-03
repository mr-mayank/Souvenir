import { AppBar,  Avatar,  Button,  Toolbar,  Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import { Link, useLocation, useNavigate } from "react-router-dom";
import memories from '../../images/memories.png';
const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user , setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);
    const logout = () => {
        
      dispatch({ type: 'LOGOUT' });
      navigate('/signin');
      setUser(null);
        
      }
      useEffect(() => {
        const token = user?.token ;

        if (token) {

          const decodedToken = decode(token);

          if(decodedToken.exp * 1000 < new Date().getTime()) logout();
           
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
        }, [location]);

    return (
        <AppBar  position="static" color="inherit">
        <div>
          <Typography component={Link} to="/"  variant="h2" align="center">Souvenir</Typography>
          <img src={memories} alt="icon" height="60" />
        </div>
        <Toolbar>
          {user?.result ? (
            <div >
              <Avatar  alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography  variant="h6">{user?.result.name}</Typography>
              <Button variant="contained"color="secondary" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Button component={Link} to="/signin" variant="contained" color="primary">Sign In</Button>
          )}
        </Toolbar>
      </AppBar>

    );
    };

export default Nav;