import React, { useState } from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText, TextField, Button, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

const Chat = () => {
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
      console.log(follower);
    };

    return (
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
   
    );
};

export default Chat;
    
                