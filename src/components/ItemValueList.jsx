import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

const ItemValueList = (props) => {
  // YOUR CODE HERE
  const produce = props.produce;

  return (
    <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center" 
        spacing={2}
      >
      {produce.map((item) => (
        <React.Fragment key={item.value}>
          <Grid item xs={5}>
            {item.name}
          </Grid>
          <Grid item xs={5}>
            ${item.value}
          </Grid>
          <Grid item xs={2}>
            <Button 
              type="submit" 
              variant="outlined" 
              color="error" 
              size="large" 
              sx={{ m: 1, width: '5ch' }}
            >
              X
            </Button>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
    
  )
};

export default ItemValueList;