import React, { Component } from "react";
import axios from "axios";
import { API_URL } from '../constants';
import { Box } from "@mui/material";
import ShowList from "../components/ShowList";

class Home extends Component{
    state = {
        shows : []
    };

    componentDidMount() {
        this.resetState();
    }

    getShows = () => {
        axios.get(API_URL+'Show/').then(res => this.setState({ shows : res.data }));
    };

    resetState = () => {
        this.getShows();
    };

    render () {
        return(
            <Box>
                <ShowList shows = {this.state.shows}
                    resetState = {this.resetState} city = {this.props.city} id = {this.props.id}/>
            </Box>
        );
    }
}

export default Home;