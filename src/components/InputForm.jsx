import React, { useState } from 'react';

import { 
  Box, 
  Grid, 
  Button, 
  TextField, 
  InputLabel,
  OutlinedInput,
  FormControl, 
  InputAdornment 
} from "@mui/material";

const InputForm = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [valueInput, setValueInput] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      props.onSubmit({
        name: nameInput,
        value: valueInput
      })
      setNameInput('');
      setValueInput('');
    } catch (e) {
      console.error(e)
    }
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleValueChange = (e) => {
    setValueInput(e.target.value);
  };

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
        <TextField
          label="Produce"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          size="small"
          required
          value={nameInput}
          onChange={handleNameChange}

        />

        <FormControl 
          sx={{ m: 1, width: '25ch' }} 
          variant="outlined" 
          size="small" 
          required
        >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            inputProps={{ inputMode: 'numeric', pattern: '^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$' }}
            value={valueInput}
            onChange={handleValueChange}

          />
        </FormControl>

        <Button 
          type="submit" 
          variant="outlined" 
          size="large" 
          sx={{ m: 1, width: '10ch' }}
        >
          Submit
        </Button>

      </Grid>
    </Box>
  )
}

export default InputForm;