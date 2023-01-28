import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GetTheater from "../Fetches/GetTheater"; 
import { Button, ListItem } from "@mui/material";
import FinalPop from "./FinalPopup";


export default function ShowList(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const shows = props.shows;
  const city = props.city;
  const MovId = props.id;
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders" >
        {/* <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Inbox" />
        </ListItemButton> */}

        {!shows || shows.length <= 0
          ? // <Cards name = 'None' desc = 'none' img = 'blank' />
            console.log("no data received!")
          : shows.map((show) => (
            show.Mid == MovId ? 
              (<ListItemButton
                selected={selectedIndex === show.id}
                onClick={(event) => handleListItemClick(event, show.id)}
                
              >
                <GetTheater id = {show.Tid} city = {city} />
                {/* <ListItemText 
               primary={<GetTheater id = {show.Tid} city = {city} />} 
                secondary = {show.StartTime}/> */}
                <p>{show.StartTime}</p>
                {/* <Button
                size="medium"
                sx={{ background: "#F84464", color: "white" ,marginLeft:'10%'}}
                className = 'BookBtn'
                onClick={() => {
                  
                }}
                >Book</Button> */}
              <FinalPop val = {show.Seats} show  = {show}/>
              </ListItemButton> ):null
            ))}

        {/* <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam!" />
        </ListItemButton> */}
      </List>
    </Box>
  );
}
