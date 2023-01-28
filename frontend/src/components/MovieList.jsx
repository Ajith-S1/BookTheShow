import React, { Component } from "react";
import Cards from './Cards';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none',
  }));


class MovieList extends Component {
    render(){
        const movies = this.props.movies;
        return(
            <div className="Movies">
               
            <Box sx={{ flexGrow: 1 ,  margin: '4% 3%'}} >
               <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} 
               justifyContent="center"
               alignItems="center" >
                    { !movies || movies.length <= 0 ? (
                        // <Cards name = 'None' desc = 'none' img = 'blank' />
                        console.log("no data received!")
                        ) : (
                            movies.map(movie => (
                            <Grid item xs={6} sm={4} md={3} >
                            <Item>
                            <Cards name = {movie.MovieTitle} intro = {movie.MovieIntro} desc = {movie.MovieDesc} img = {movie.MovieIMG} id = {movie.id} />
                            </Item>
                            </Grid> 
                        ))
                    )}
                </Grid>
            </Box>
            </div>
        );
    }
}

export default MovieList;