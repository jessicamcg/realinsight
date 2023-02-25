import React, { useState } from "react";

import FilterForm from "./components/FilterForm";
import ItemValueList from "./components/ItemValueList";
import InputForm from "./components/InputForm";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Snackbar, Alert } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

const INITIAL_LIST = [
  { name: "Tomatoes", value: 5.0 },
  { name: "Basil", value: 2.5 },
  { name: "Mozzarella", value: 9.99 },
];

function App() {
  const [produceList, setProduceList] = useState(INITIAL_LIST);
  const [searchList, setSearchList] = useState(produceList);
  const [alertMsg, setAlertMsg] = useState('');

  const addProduce = (item) => {
    const newProduceList = [item, ...produceList]
    setAlertMsg(`Item added: ${item.name}`)
    setOpen(true);
    setProduceList(newProduceList);
    setSearchList(newProduceList)
  }

  const removeProduce = (produceName) => {
    const updatedProduceList = [...produceList].filter((item) => item.name !== produceName)
    setAlertMsg(`Item removed: ${produceName}`)
    setOpen(true);
    setProduceList(updatedProduceList);
    setSearchList(updatedProduceList)
  }

  const searchProduceList = (searchParams) => {
    const searchResult = [...produceList].filter((item) => item.name.toLowerCase().includes(searchParams.toLowerCase()))
    if (searchResult.length === 0) {
      setSearchList(`No results for ${searchParams}`)
    } else {
      setSearchList(searchResult);
    }
  }

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
      if (reason === "clickaway") {
          return;
      }

      setOpen(false);
      setAlertMsg('')
  };
  
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
          <Grid item xs={6}>
            <FilterForm searchProduceList={searchProduceList} />
          </Grid>
          <Grid item xs={7}>
            <InputForm onSubmit={addProduce} />
          </Grid>
          <Grid item xs={6}>
            <ItemValueList 
              removeProduce={removeProduce} 
              produceList={(searchList.length!==produceList.length)||(typeof searchList === 'string') ? searchList : produceList}
            />
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
          >
              {alertMsg}
          </Alert>
        </Snackbar>
      </Box>
  );
}


export default App;