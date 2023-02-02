import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, CardHeader, Avatar, IconButton } from '@mui/material';
import {Delete} from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deletePost, likePost } from '../../../actions/posts';
const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();

    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick = { () => setCurrentId(post._id) }>
            <EditIcon />
          </IconButton>
        }
        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.selectedFile} title={post.title} 
      />
      <div>
      <Typography variant="body2" color="textSecondary" component="p">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <CardContent>
                <Typography variant="h5" gutterBottom>{post.title}</Typography>
                <Typography variant="body" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions>
        <IconButton aria-label="add to favorites" onClick={ () => dispatch(likePost(post._id)) }>
          <FavoriteIcon  /> {post.likeCount}
        </IconButton>
        <IconButton aria-label="share" onClick={ () => dispatch(deletePost(post._id)) }>
          <Delete />
        </IconButton>
    
        </CardActions>
        </Card>



    );
    }

export default Post;