import React, { Component } from "react";
import axios from "axios";
import { API_URL } from '../constants';
import AboutMovie from "../components/AboutMovie";
import { Box } from "@mui/material";

class Home extends Component{
    state = {
        movies : []
    };

    componentDidMount() {
        this.resetState();
    }

    getMovies = () => {
        axios.get(API_URL+'Movie/'+ this.props.id+'/').then(res => this.setState({ movies : res.data }));
    };

    resetState = () => {
        this.getMovies();
    };

    render () {
        return(
            <Box>
            {
                this.props.variant == 'desc' ?
            (<AboutMovie movies = {this.state.movies}
            resetState = {this.resetState} />) : (<h3>{this.state.movies.MovieTitle}</h3>)
            }
             </Box>
        );
    }
}

export default Home;