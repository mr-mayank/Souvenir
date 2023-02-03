import React from 'react';
import { Container } from '@mui/material';
import Nav from './components/Navbar/Navbar.js';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Signin from './components/SignIn/Signin.js';
import Signup from './components/SignUp/Signup.js';
function App() {
  
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
   
    <BrowserRouter>
    <Container maxWidth="xl">
      <Nav />
    <br></br>
        <Routes>
          <Route path="/"  element={<Navigate replace to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/signin" exact element={ !user ?  <Signin /> : <Navigate replace to="/posts" /> } />
          <Route path="/signup" exact element={ !user ?  <Signup /> : <Navigate replace to="/posts" /> } />
        </Routes>
      </Container>
      </BrowserRouter>


  );
}

export default App;
