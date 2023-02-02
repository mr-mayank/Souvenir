import { Container, Grid, Grow, Paper, AppBar, TextField, Chip, createTheme, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import Paginate from '../Pagination';

const theme = createTheme();
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}
function Home() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const history = useNavigate();
  const page = query.get('page') || 1;
  const [search, setSearch] = useState('');
  const searchQuery = query.get('searchQuery');

  const searchPost = () => {
    if(search.trim()) {
      dispatch(getPostsBySearch({search}));
      history(`/posts/search?searchQuery=${search || 'none'}`);
      setSearch('');
    } else {
      history('/');
    }
  }
  const handleKEyPress = (e) => {
    if(e.keyCode === 13) {
      searchPost();
    }
  }
  return (
    <ThemeProvider theme={theme}>
<Grow in>
<Container maxWidth="xl">
<Grid sx={{
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column-reverse',
  },
}} container justifyContent="space-between" alignItems="stretch" spacing={3} >
  <Grid item xs={12} sm={6} md={9}>
    <Posts setCurrentId={setCurrentId}/>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <AppBar position='static' color='inherit'>
      <TextField sx={{ borderRadius:4, 
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
       }} 
       name='search' variant='outlined'
       onKeyPress={handleKEyPress}
       label='Search Memories' fullWidth value={search} 
       
       onChange={(e) => setSearch(e.target.value)} />
        {/* onChange={(e) => history(`/posts/search?searchQuery=${e.target.value || 'none'}`)} /> */}
      
      <Chip sx={{ marginBottom: '1rem', cursor: 'pointer' }} label='Search' onClick={searchPost} variant='outlined' />


    </AppBar>
    <Form currentId = {currentId} setCurrentId={setCurrentId} />
    <Paper elevation={6}>
      {/* <Paginate page={2} setPage={3} numPages={5} /> */}
      <Paginate page={page} />
    </Paper>
  </Grid>
</Grid>
</Container>
</Grow>
</ThemeProvider>
  )
}

export default Home;

