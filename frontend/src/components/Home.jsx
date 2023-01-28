import React, { Component } from "react";
import MovieList from "./MovieList";
import  Navbar  from './Navbar';
import axios from "axios";
import { API_URL } from '../constants';
import Box from '@mui/material/Box';
import Carousel from './Carousel'
import Copyright from "./Copyright";


class Home extends Component{
    state = {
        movies : []
    };

    componentDidMount() {
        this.resetState();
    }

    getMovies = () => {
        axios.get(API_URL+'Movie/').then(res => this.setState({ movies : res.data }));
    };

    resetState = () => {
        this.getMovies();
    };

    render () {
        return(
            <Box>
                <Navbar/>
                <Carousel />
                <p>Book Movies : </p>
                <MovieList movies = {this.state.movies}
                    resetState = {this.resetState} />
               <footer />
                <Copyright/>
            </Box>
        );
    }
}

export default Home;