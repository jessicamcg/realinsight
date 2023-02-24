import React, { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

const INITIAL_LIST = [
  { name: "Tomatoes", value: 5.0 },
  { name: "Basil", value: 2.5 },
  { name: "Mozzarella", value: 9.99 },
];

function App() {
  return <ItemValueList produce={INITIAL_LIST}/>;
}

const ItemValueList = (props) => {
  // YOUR CODE HERE
  const produce = props.produce;

  return (
    <div>
      <Box className = "d-flex justify-content-center my-3" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} xs={6}>
          {produce.map((item) => (
            <>
              <Grid item xs={4}>
                {item.name}
              </Grid>
              <Grid item xs={4}>
                ${item.value}
              </Grid>
              <Grid item xs={4}>
                <Button>X</Button>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </div>
    
  )
};

export default App;