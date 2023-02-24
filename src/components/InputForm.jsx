import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';

const InputForm = () => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={4}>
        <TextField id="outlined-basic" label="Produce" variant="outlined" required size="small"/>
      </Grid>
      <Grid item xs={4}>
        <TextField id="outlined-basic" label="Price" variant="outlined" required size="small"/>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" size="large">Submit</Button>
      </Grid>
    </Grid>
  )
}

export default InputForm;