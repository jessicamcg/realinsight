import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

const ItemValueList = (props) => {
  // YOUR CODE HERE
  const produce = props.produce;

  return (
    <Grid container spacing={1} padding={1}>
      {produce.map((item) => (
        <React.Fragment key={item.value}>
          <Grid item xs={4}>
            {item.name}
          </Grid>
          <Grid item xs={4}>
            ${item.value}
          </Grid>
          <Grid item xs={4}>
            <Button>X</Button>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
    
  )
};

export default ItemValueList;