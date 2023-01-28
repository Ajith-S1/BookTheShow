import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./MovieList";
import '../Styles/AboutMovie.css';
import { Button } from "@mui/material";
import CitySelector from "./CitySelector";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutMovie(props) {
  let movie = props.movies;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      {/* <Cards name = {movie.MovieTitle} intro = {movie.MovieIntro} desc = {movie.MovieDesc} img = {movie.MovieIMG} id = {movie.id} /> */}

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Item >
            <img className="MovieDescPoster" src={movie.MovieIMG} alt={movie.MovieTitle} />
          </Item>
        </Grid>
        <Grid item xs>
          <h3>{movie.MovieTitle}</h3>
          <br />
          <p>{movie.MovieDesc}</p>
          <br />
          {/* <Button 
              size="medium"
              sx={{ background: "#F84464", color: "white" }}
              className = 'BookBtn'
              onClick={ () => {
                // alert("clicked")
              <CitySelector/>
              }}
          >
            Proceed to Book</Button> */}
            <CitySelector id = {movie.id} movieT = {movie.MovieTitle}/>
        </Grid>
      </Grid>
    </Box>
  );
}
