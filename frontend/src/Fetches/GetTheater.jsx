import React, { Component } from "react";
import axios from "axios";
import { API_URL } from '../constants';
import { Box } from "@mui/material";

class Home extends Component{
    state = {
        theater : []
    };

    componentDidMount() {
        this.resetState();
    }

    getTheater = () => {
        axios.get(API_URL+'Theater/'+ this.props.id+'/').then(res => this.setState({ theater : res.data }));
        // alert(API_URL+'Theater/'+ this.props.id+'/');
    };

    resetState = () => {
        this.getTheater();
    };

    render () {
        return(
            <Box sx={{ flexGrow: 1 , display:'inline-block' }}>
            <p sx = {{display:'flex'}}>{this.state.theater.TName}<br/>{this.state.theater.TAddress}</p>
            </Box>
        );
    }
    // return this.state.theater;
}

export default Home;