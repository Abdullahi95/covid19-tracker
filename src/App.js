import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import "./App.css";
import { Grid, Box } from "@material-ui/core";
import fetchData from "./api/covidApi";
import Dropdown from "./components/Dropdown";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    async function data() {
      fetchData(country).then((data) => setData(data));
    }
    data();
  }, [country]);

  function onChange(event) {
    setCountry(event.target.value);
  }

  return (
    <>
      <Grid container spacing={2} justify="center" direction="row">
        <Grid item>
          <Cards text={"Confirmed"} value={data.confirmed} />
        </Grid>
        <Grid item>
          <Cards text={"Recovered"} value={data.recovered} />
        </Grid>
        <Grid item>
          <Cards text={"Deaths"} value={data.deaths} />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid>
          <Box m={2}>
            <Dropdown ChangeHandler={onChange} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
