import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import FinalPop from "../components/FinalPopup";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Home extends Component {
  state = {
    theater: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getTheater = () => {
    axios
      .get(API_URL + "Theater/" + this.props.id + "/")
      .then((res) => this.setState({ theater: res.data }));
    // alert(API_URL+'Theater/'+ this.props.id+'/');
  };

  resetState = () => {
    this.getTheater();
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1, display: "inline-block" }}>
        {this.props.city === this.state.theater.TCity ? (
          <Box
            className="TheaterInfo"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs = {6} >
                    {this.state.theater.TName}
                    <br/>
                    {this.state.theater.TAddress}
                </Grid>
                <Grid item >
                    {this.props.time}
                </Grid>
                <Grid item xs = {3}>
                    <FinalPop val = {this.props.fval} show  = {this.props.fshow} />
                </Grid>
              </Grid>
            </Box>
            {/* <Box style={{gridRow :'1/3'}}>{this.state.theater.TName}
                            <br />
                                {this.state.theater.TAddress}
                            </Box>
                            <Box >{this.props.time}</Box>
                            <Box >
                                <FinalPop val = {this.props.fval} show  = {this.props.fshow} />
                            </Box> */}
          </Box>
        ) : null}
      </Box>
    );
  }
  // return this.state.theater;
}

export default Home;
