import React, { useState } from 'react';
import { 
  Box,
  FormControl, 
  InputLabel, 
  OutlinedInput, 
  Button, 
  Grid 
} from '@mui/material';

const FilterForm = (props) => {
  const searchProduceList = props.searchProduceList;
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProduceList(input)
    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleReset = (e) => {
    searchProduceList('')
    setInput('');
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center" 
          spacing={2}
      >
        <FormControl 
          sx={{ m: 1 }} 
          variant="outlined" 
          size="small" 
        >
          <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            label="Search"
            onChange={handleChange}
            value={input}
          />
        </FormControl>

        <Button 
          type="submit" 
          variant="outlined" 
          size="large" 
          sx={{ m: 1 }}
        >
          Search
        </Button>
        <Button 
          onClick={handleReset}
          variant="outlined" 
          size="large" 
          sx={{ m: 1 }}
          color="warning"
        >
          Reset
        </Button>
      </Grid>
    </Box>
  )
}

export default FilterForm