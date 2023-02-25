import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

const ItemValueList = (props) => {
  // YOUR CODE HERE
  const produceList = props.produceList;
  const removeProduce = props.removeProduce;

  return (
    <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center" 
        spacing={2}
      >
      {produceList.map((item) => (
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
              onClick={() => removeProduce(item.name)}
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