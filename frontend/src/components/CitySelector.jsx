import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import '../Styles/AboutMovie.css';
import { Link } from 'react-router-dom';

const emails = ['Bangalore' ,'Chennai','Delhi','Hyderabad','Mumbai'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  let next = "/Booking/" + selectedValue +'/'+ props.id;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Selected City : {selectedValue}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <Link to={next} style= {{textDecoration:'none'}}>
        <Button
        size="medium"
        sx={{ background: "#F84464", color: "white" }}
        className = 'BookBtn'>next</Button>
      </Link>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function CitySelector(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("None");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
   // setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div sx={{width:'40%'}}>
      {/* <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography> */}
      <br />

      <Button onClick={handleClickOpen}
      size="medium"
      sx={{ background: "#F84464", color: "white" }}
      className = 'BookBtn'
      >
        Proceed to Book
      </Button>
      
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        id = {props.id}
      />
    </div>
  );
}
