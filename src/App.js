import React from 'react';
import { Container } from '@mui/material';
import Nav from './components/Nav/Nav.js';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import Signin from './components/SignIn/Signin.js';
import Signup from './components/SignUp/Signup.js';
function App() {
  
  return (
   
    <BrowserRouter>
    <Container maxWidth="lg">
      <Nav />
    <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
      </BrowserRouter>


  );
}

export default App;
