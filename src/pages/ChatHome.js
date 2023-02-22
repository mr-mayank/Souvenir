import React, { useEffect } from 'react';
import { Container, createTheme, Grid, Grow, ThemeProvider } from '@mui/material';
import Chat from './Chat.js';
import ChatPage from './ChatPage.js';
import { useDispatch } from 'react-redux';
import { getConversation } from '../actions/convo.js';


const theme = createTheme();

const ChatHome = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
  const user_id = user?.result?._id;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getConversation(user_id));
  },[dispatch]);
    return (
        
<div style={{display:'flex'}}>
            <Chat />
       
        
            <ChatPage />
     
</div>


    );
    }

export default ChatHome;


