import React, { useEffect, useState } from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText, TextField, Button, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useSelector, dispatch, useDispatch } from "react-redux";
import { getConversations } from "../actions/convo";

const Chat = () => {

  const dispatch = useDispatch();
  // const [convo, setConvo] = useState([]);
  // const [message, setMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  // const [convoId, setConvoId] = useState("");
  // const [convoName, setConvoName] = useState("");
  // const [convoMessages, setConvoMessages] = useState([]);
  // const [convoUsers, setConvoUsers] = useState([]);
  // const [convoUser, setConvoUser] = useState("");


  const conversation = useSelector((state) => state.conversations);
  console.log(conversation);


  // const [follower, setFollowers] = useState([]);
  //   {
  //     id: 1,
  //     name: 'User 1'
  //   },
  //   {
  //     id: 2,
  //     name: 'User 2'
  //   },
  //   {
  //     id: 3,
  //     name: 'User 3'
  //   },
  //   {
  //     id: 4,
  //     name: 'User 4'
  //   }
  // ]);
  const follower = useSelector((state) => state.conversations);
  console.log(follower);
 
    const [selectedFollower, setSelectedFollower] = useState(null);
    const [searchText, setSearchText] = useState("");
  
    const filteredFollowers = follower.filter(follower =>
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
    
                