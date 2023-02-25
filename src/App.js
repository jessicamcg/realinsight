import React, { useState } from "react";

import FilterForm from "./components/FilterForm";
import ItemValueList from "./components/ItemValueList";
import InputForm from "./components/InputForm";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

const INITIAL_LIST = [
  { name: "Tomatoes", value: 5.0 },
  { name: "Basil", value: 2.5 },
  { name: "Mozzarella", value: 9.99 },
];

function App() {
  const [produceList, setProduceList] = useState(INITIAL_LIST);
  const [searchList, setSearchList] =useState(produceList);

  const addProduce = (item) => {
    const newProduceList = [item, ...produceList]
    setProduceList(newProduceList);
  }

  const removeProduce = (produceName) => {
    const updatedProduceList = [...produceList].filter((item) => item.name !== produceName)
    setProduceList(updatedProduceList);
  }

  const searchProduceList = (searchParams) => {
    const searchResult = [...produceList].filter((item) => item.name.toLowerCase().includes(searchParams.toLowerCase()))
    setSearchList(searchResult);
  }
  
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
            <ItemValueList removeProduce={removeProduce} produceList={searchList? searchList: produceList}/>
          </Grid>
        </Grid>
      </Box>
  );
}


export default App;