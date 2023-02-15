import React, { useState } from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText, TextField, Button, IconButton, createTheme, ThemeProvider, Divider } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useDispatch } from "react-redux";

const theme = createTheme();
const ChatHome1 = () => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState(null);
    const [followers, setFollowers] = useState([
      {
        id: 1,
        name: 'User 1'
      },
      {
        id: 2,
        name: 'User 2'
      },
      {
        id: 3,
        name: 'User 3'
      },
      {
        id: 4,
        name: 'User 4'
      }
    ]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleUserClick = (user) => {
        setSelectedUser(user); setMessages([]);
        console.log(user);
        // dispatch({ type: 'SET_SELECTED_USER', payload: user });
    };
    const handleMessageChange = e => setNewMessage(e.target.value);
    const handleSendClick = () => {
      setMessages([...messages, { text: newMessage, from: 'k' }]);
      setNewMessage('');
    };
  
    const [searchText, setSearchText] = useState("");
    const filteredFollowers = followers.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
   
    return (
      <div style={{display:'flex'}}>
  <ThemeProvider theme={theme}>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <TextField
            fullWidth
            label="Search"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <List>
            {filteredFollowers.map(user => (
              <ListItem
                key={user.id}
                button
                onClick={() => handleUserClick(user)}
              >
                <ListItemText primary={user.name} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>


      <Grid item xs={9} sx={{width: '70%', margin: '-16px 0px 0px 16px' }}>
        <Paper elevation={3} sx={{ width: 'auto' }}>
        {selectedUser ? (
          <div>
          <div>
            <h3> {selectedUser.name}</h3>
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
        ) : (
        <div style={{ textAlign:'center',padding: '14px 0px',
        margin: '16px 0px' }}>
            <h3  > Select a user to start chatting</h3>
        </div>
        )}
        </Paper>

     </Grid>
    </ThemeProvider>
    </div>
    );
};

export default ChatHome1;
    
                