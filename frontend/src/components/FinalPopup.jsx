import * as React from 'react';
import { Form, FormGroup, Input, Label } from "reactstrap";
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { API_URL } from '../constants';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const SelectedShow  = props.show;
  const history = useHistory();
  let no_of_seats = 0;
  const handleChange = (event) => {
    no_of_seats = event.target.value;
  }

  const handleSubmit = (event) => {
        event.preventDefault();
        if(no_of_seats > SelectedShow.Seats){
          alert("selected seats exceed the limit !");
          no_of_seats = 0;
        }
        else{
          SelectedShow.Seats = SelectedShow.Seats - no_of_seats;
          axios.put(API_URL + `Show/${SelectedShow.id}/`, SelectedShow).then(() => {
              console.log(API_URL + `Show/${SelectedShow.id}`)
          });
          alert("Booking Success !");
        }
        history.push(`/`);
  }
  return (
    <div >
      <Button onClick={handleOpen}
      size="medium"
      sx={{ background: "#F84464", color: "white" ,marginLeft:'10%',margin:'0 0 0 80%'}}
      className = 'BookBtn'>Book</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Number of Seats
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Avilable seats : {props.val}
          </Typography>
          <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Number of Seats to be Booked</Label>
                <Input type='number' onChange={handleChange}/>
              </FormGroup>
              <input type="submit" />
          </Form>
          
        </Box>
      </Modal>
    </div>
  );
}