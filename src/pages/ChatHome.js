import React from 'react';
import { Container, createTheme, Grid, Grow, ThemeProvider } from '@mui/material';
import Chat from './Chat.js';
import ChatPage from './ChatPage.js';


const theme = createTheme();

const ChatHome = () => {
    return (
        
<div style={{display:'flex'}}>
            <Chat />
       
        
            <ChatPage />
     
</div>


    );
    }

export default ChatHome;


