import React, { useState } from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText, TextField, Button, IconButton, createTheme, ThemeProvider, Divider } from "@mui/material";
import { Send } from "@mui/icons-material";


const theme = createTheme();

const ChatPage = () => {
const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const handleSendClick = () => {
    setMessages([...messages, { text: newMessage, from: 'me' }]);
    setNewMessage('');
  };

  const handleMessageChange = e => setNewMessage(e.target.value);

  return (
    <ThemeProvider theme={theme}>
     <Grid item xs={9} sx={{width: '70%', margin: '-16px 0px 0px 16px' }}>
        <Paper elevation={3} sx={{ width: 'auto' }}>
        <div>
        <div>
            <h3> selectedUser.name</h3>
            </div>
            <Divider sx={{height: 28,
            margin: 4,}} />
            <div style={{ height: '400px',
                overflowY: 'scroll' }}>
                {messages.map((message, index) => (
                <div key={index} style={{ display: 'flex', padding: '8px' }}>
                    {message.from === 'me' ? (
                        <div style={{ marginLeft: 'auto' }}>
                        <Typography variant="body1" sx={{ bgcolor: 'primary.main', color: 'white', padding: '8px', borderRadius: '8px' }}>
                        {message.text}
                        </Typography>   
                        </div>
                    ) : (
                        <div style={{ marginRight: 'auto' }}>
                        <Typography variant="body1" sx={{ bgcolor: 'secondary.main', color: 'white', padding: '8px', borderRadius: '8px' }}>
                        {message.text}
                        </Typography>
                        </div>
                    )}
                </div>
                ))}
            </div>
            <Divider sx={{height: 28,
            margin: 4,}} />
            <div style={{ display: 'flex', padding: '8px' }}>
                <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message"
                value={newMessage}
                onChange={handleMessageChange}
                />
                <IconButton onClick={handleSendClick}>
                <Send />
                </IconButton>
            </div>
        </div>
        </Paper>
     </Grid>
    </ThemeProvider>
    );
};

export default ChatPage;