import React, { useState } from "react";

import FilterForm from "./components/FilterForm";
import ItemValueList from "./components/ItemValueList";
import InputForm from "./components/InputForm";
import {
  Box, 
  Grid, 
  Snackbar, 
  Alert
} from "@mui/material";

const INITIAL_LIST = [
  { name: "Tomatoes", value: 5.0 },
  { name: "Basil", value: 2.5 },
  { name: "Mozzarella", value: 9.99 },
];

function App() {
  const [produceList, setProduceList] = useState(INITIAL_LIST);
  const [searchList, setSearchList] = useState(produceList);
  const [searchMsg, setSearchMsg] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  /*
    @param item object recieved from InputForm on submit
      uses new item and existing produceList to update state
  */
  const addProduce = (item) => {
    const newProduceList = [item, ...produceList]
    setAlertMsg(`Item added: ${item.name}`)
    setOpen(true);
    setProduceList(newProduceList);
    setSearchMsg('');
    setSearchList(null)
  }

  /*
    @param produceName string recieved from ItemValueList on delete button
      filters through existing produceList in state 
      removes matching produceName/produceList.name
  */
  const removeProduce = (produceName) => {
    const updatedProduceList = [...produceList].filter((item) => item.name !== produceName)
    setAlertMsg(`Item removed: ${produceName}`)
    setOpen(true);
    setProduceList(updatedProduceList);
    setSearchMsg('');
    setSearchList(null);
  }

  /*
    @param searchParams string recieved from FilterForm on submit
      filters through existing produceList in state 
      displays elements from produceList if produceList.name includes the searchParams
      searchMsg is displayed depending on the searchParams and/or the length of result of the filter
  */
  const searchProduceList = (searchParams) => {
    const searchResult = [...produceList].filter((item) => item.name.toLowerCase().includes(searchParams.toLowerCase()))
    setSearchList(searchResult);
    searchResult.length === 0
    ? setSearchMsg(`No search results for ${searchParams}`)
    : setSearchMsg(`Showing search results for : ${searchParams}`)
  }

  /*
    handles reset button to clear search results to display elements in produceList
  */
  const handleReset = () => {
    setSearchList(null);
    setSearchMsg('');
  }

  /*
    from MUI
    handles SnackBar alert
  */
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
      if (reason === "clickaway") {
          return;
      }

      setOpen(false);
      setAlertMsg('')
  };
  

  /*
    using props to pass down actions to handle state at this container level
  */
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
            <FilterForm 
              searchProduceList={searchProduceList} 
              handleReset={handleReset}
            />
          </Grid>
          <Grid item xs={7}>
            <InputForm onSubmit={addProduce} />
          </Grid>
          <Grid item xs={6}>
            <ItemValueList 
              removeProduce={removeProduce} 
              produceList={searchList ? searchList : produceList}
              searchMsg={searchMsg}
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