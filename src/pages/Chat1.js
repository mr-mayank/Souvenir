import React, { useState } from 'react';
import { Paper, InputBase, IconButton, List, ListItem, ListItemText, createTheme, ThemeProvider,Divider } from "@mui/material";
import { Send } from "@mui/icons-material";

const theme = createTheme();
const Chat = () => {
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

  const handleUserClick = user => setSelectedUser(user);
  const handleMessageChange = e => setNewMessage(e.target.value);
  const handleSendClick = () => {
    setMessages([...messages, { text: newMessage, from: 'me' }]);
    setNewMessage('');
  };

  return (
    <ThemeProvider theme={theme}>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', height: '100%', overflowY: 'scroll' }}>
        <List>
          {followers.map(follower => (
            <ListItem button key={follower.id} onClick={() => handleUserClick(follower)}>
              <ListItemText primary={follower.name} />
            </ListItem>
          ))}
        </List>
      </div>
      <div style={{ width: '80%' }}>
      
        {selectedUser ? (
          <div>
          
            <h3>{selectedUser.name}</h3>
            <Divider sx={{height: 28,
            margin: 4,}} />
            <div style={{ height: '400px',
                overflowY: 'scroll' }}>
              {messages.map((message, index) => (
                <div key={index} style={{ display: 'flex', padding: '8px' }}>
                  {message.from === 'me' ? (
                    <div style={{ marginLeft: 'auto' }}>
                      <Paper elevation={1}>
                        {message.text}
                      </Paper>
                    </div>
                  ) : (
                    <div style={{ marginRight: 'auto' }}>
                      <Paper elevation={1}>
                        {message.text}
                      </Paper>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', marginTop: theme.spacing(2) }} component="form">
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Type a message"
                value={newMessage}
                onChange={handleMessageChange}
              />
              <IconButton sx={{padding: '10px'}} aria-label="send" onClick={handleSendClick}>
                <Send />
              </IconButton>
            </Paper>
          </div>
        ) : (
          <div>
            <h3>Please select a user</h3>
          </div>
        )}
      </div>
    </div>
    </ThemeProvider>
  );
};

export default Chat;

