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

    </div>
    
  )
};

export default App;