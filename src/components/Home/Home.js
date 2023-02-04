import { Container, Grid, Grow, Paper, AppBar, TextField, Chip, createTheme, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import Paginate from '../Pagination';
import { Search } from '@mui/icons-material';

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
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
  },
}} container justifyContent="space-between" alignItems="stretch" spacing={3} >
  <Grid item xs={12} sm={6} md={9}>
    <Posts setCurrentId={setCurrentId}/>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <AppBar elevation={6} position='static' color='inherit' sx={{borderRadius: '8px', marginBottom: '1rem', display: 'flex', padding: '16px' }} >
      <TextField sx={{marginBottom: '10px'}} 
       name='search' variant='outlined'
       onKeyPress={handleKEyPress}
       label='Search Post By Title' fullWidth value={search} 
       
       onChange={(e) => setSearch(e.target.value)} />
      <Chip variant="outlined" color='primary' icon={<Search />} sx={{ marginBottom: '1rem', cursor: 'pointer' }} label='Search' onClick={searchPost}  />

    </AppBar>
    <Form currentId = {currentId} setCurrentId={setCurrentId} />
    {
      (!searchQuery) && (
    <Paper elevation={6} sx={{borderRadius:3, marginTop:'0.5rem', padding:'16px' }}>
      <Paginate page={page} />
    </Paper>
      )

    }
  </Grid>
</Grid>
</Container>
</Grow>
</ThemeProvider>
  )
}

export default Home;

