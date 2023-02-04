import React, {useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import { Button, TextField,Typography, Paper, createTheme, ThemeProvider } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts.js';
import { Flare } from '@mui/icons-material';

const theme = createTheme();
const Form = ({currentId , setCurrentId}) => {
    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name}));
        }else{
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        }
        clear();

    };
    const clear = () => {

        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
        
    };
    if (!user?.result?.name) {
        return(
            <ThemeProvider theme={theme}>
            <Paper sx={{padding: theme.spacing(2)}}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own Posts and like other's Posts.
                    </Typography>
            </Paper>
            </ThemeProvider>
        );
    }
    return (
        <ThemeProvider theme={theme}>
        <Paper elevation={6} sx={{padding: theme.spacing(2)}} >
            <form autoComplete="off" noValidate onSubmit={handleSubmit} style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}} sx={{    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },}} >
                
                <Typography sx={{mb:'10px'}} variant="h6"> {currentId ? 'Edditing' : 'Creating'} a Post</Typography>
                <TextField sx={{mb:'10px'}} name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField sx={{mb:'10px'}} name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField sx={{mb:'10px'}} name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

                <div style={{widh
                :'97%', margin:'10px 0' }}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button sx={{marginBottom:'10px'}} variant="contained" color="primary" size="large" type="submit"  fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
        </ThemeProvider>


    );
    };

export default Form;