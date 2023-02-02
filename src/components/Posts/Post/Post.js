import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, CardHeader, Avatar, IconButton } from '@mui/material';
import {Delete} from '@mui/icons-material';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import moment from 'moment';
import { deletePost, likePost } from '../../../actions/posts';
const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));
    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><FavoriteSharpIcon sx={{ color: red[500] }} />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><FavoriteBorderOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
        return <><FavoriteBorderOutlinedIcon fontSize="small" />&nbsp;Like</>;
      };
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.name.charAt(0)}
          </Avatar>
        }
        action={
          user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ?
          <IconButton aria-label="settings" onClick = { () => setCurrentId(post._id) }>
            <EditIcon />
            </IconButton>
            : null}
          
        title={post.name}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{objectFit:'initial'}}
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
        <IconButton aria-label="add to favorites" disabled={!user?.result} onClick={ () => dispatch(likePost(post._id)) }>
          <Likes /> 
        </IconButton>
        {user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ? (
        <IconButton aria-label="share" onClick={ () => dispatch(deletePost(post._id)) }>
          <Delete />
        </IconButton>
        ) : null}
    
        </CardActions>
        </Card>



    );
    }

export default Post;