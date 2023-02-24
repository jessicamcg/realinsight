import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

const InputForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("submit");
    } catch (e) {
      console.error(e)
    }
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
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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