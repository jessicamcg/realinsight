import React, { useState } from "react";
import ItemValueList from "./components/ItemValueList";
import InputForm from "./components/InputForm";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

const INITIAL_LIST = [
  { name: "Tomatoes", value: 5.0 },
  { name: "Basil", value: 2.5 },
  { name: "Mozzarella", value: 9.99 },
];

function App() {
  return (
      <Box 
        sx={{ flexGrow: 1, p:4 }} 
      >
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2} 
        >
          <Grid item xs={7}>
            <InputForm />
          </Grid>
          <Grid item xs={7}>
            <ItemValueList produce={INITIAL_LIST}/>
          </Grid>
        </Grid>
      </Box>
  );
}


export default App;