import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import '../Styles/Cards.css';

export default function ActionAreaCard(props) {
  let dest = props.img;
  console.log(dest);
  let selected = '/protected/' + props.id
  return (
    <Card sx={{ maxWidth: "fit-content" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="fit-content"
          image={dest}
          alt="movie poster"
          sx={{ width: "100%", height: "fit-content" }}
        />
        {/* <img src={dest} alt="test img" /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.intro}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to = {selected} style={{textDecoration:'none'}}>
        <Button
          size="medium"
          sx={{ background: "#F84464", color: "white" }}
          className = 'BookBtn'
          // onClick={() => {
          //   <AboutMovie img = {dest} desc = {props.desc} />
          // }}
        >
          Book
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
