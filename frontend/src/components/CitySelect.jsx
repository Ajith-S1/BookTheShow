import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../Styles/CitySelect.css";

export default function BasicSelect() {
  const [City, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box  >
      <FormControl fullWidth className='CitySelector'>
        <InputLabel  id="city-list-items" >City</InputLabel>   
        {/* id="demo-simple-select-label" */}
        <Select
        //   labelId="demo-simple-select-label"
        id="city-list-items"
          value={City}
          label="City"
          onChange={handleChange}
        >
           
           <MenuItem  value = {'Bangalore'} >Bangalore</MenuItem>
            <MenuItem value = {'Hyderabad'} >Hyderabad</MenuItem>
            <MenuItem value = {'Ahmedabad'} >Ahmedabad</MenuItem>
            <MenuItem value = {'Mumbai'} >Mumbai</MenuItem>
            <MenuItem value = {'Delhi'} >Delhi</MenuItem>
            <MenuItem value = {'Kolkata'} >Kolkata</MenuItem>
            <MenuItem value = {'Kochi'} >Kochi</MenuItem>
        
        </Select>
      </FormControl>
    </Box>
  );
}
