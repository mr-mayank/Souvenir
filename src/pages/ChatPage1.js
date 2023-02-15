import React, { useState } from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText, TextField, Button, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
// import {
//   Paper,
//   Typography,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
//   TextField,
//   Button
// } from "@material-ui/core";

const ChatPage = () => {
  const [followers, setFollowers] = useState([
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    { id: 4, name: "User4" },
    { id: 5, name: "User5" },
    { id: 6, name: "User6" }
  ]);

  const [selectedFollower, setSelectedFollower] = useState(null);
  const [searchText, setSearchText] = useState("");

  const filteredFollowers = followers.filter(follower =>
    follower.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleFollowerSelection = follower => {
    setSelectedFollower(follower);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <TextField
            fullWidth
            label="Search"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <List>
            {filteredFollowers.map(follower => (
              <ListItem
                key={follower.id}
                button
                onClick={() => handleFollowerSelection(follower)}
              >
                <ListItemText primary={follower.name} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper elevation={3} style={{ overflowY: "scroll", height: "90vh" }}>
          {selectedFollower ? (
            <>
              <Typography variant="h5">
                Chatting with {selectedFollower.name}
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Typography variant="body1">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </>
          ) : (
            <Typography variant="h5">Select a Follower to start Chatting</Typography>
          )}
        </Paper>
        <Paper
          elevation={3}
          style={{
            position: "fixed",
            bottom: "10px",
            width: "100%",
            padding: "10px"
          }}
        >
          <TextField fullWidth label="Type here" />
          <IconButton  sx={{ p: '10px' }} onClick={""}>
                                            <Send />
                                        </IconButton>

        </Paper>
      </Grid>
    </Grid>
  );
};

export default ChatPage;
