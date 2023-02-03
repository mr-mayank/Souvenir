import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { blue } from '@mui/material/colors';
const settings = ['Logout'];

function ResponsiveAppBar() {
  const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user , setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const logout = () => {
        
    dispatch({ type: 'LOGOUT' });
    navigate('/signin');
    setUser(null);
      
    }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  React.useEffect(() => {
    const token = user?.token ;

    if (token) {

      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
       
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

  return (
    <AppBar position="static" color='inherit'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'flex', xl:'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Souvenir
          </Typography> 
          <Box  sx={{ display: { xs: 'flex', md: 'flex', xl: 'flex' }, mr: 1 }}>
            <Tooltip title="Open settings">
            {user?.result ? (
              <IconButton onClick={handleOpenUserMenu} sx={{ p:'0' }}>
                <Avatar sx={{ bgcolor: blue[300] }} > {user?.result.name.charAt(0)}</Avatar>
              </IconButton>
              ) : (
            <Button component={Link} to="/signin" variant="contained" color="primary">Sign In</Button>
          )}
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick= {logout}>{setting}</Typography>
                </MenuItem>
              ))} 
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;