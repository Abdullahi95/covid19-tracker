import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import "./App.css";
import { Grid, Box } from "@material-ui/core";
import fetchData from "./api/covidApi";
import Dropdown from "./components/Dropdown";
import Chart from "./components/Chart";

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
        <Grid item className="box-1">
          <Cards text={"Confirmed"} value={data.confirmed} />
        </Grid>
        <Grid item className="box-2">
          <Cards text={"Recovered"} value={data.recovered} />
        </Grid>
        <Grid item className="box-3">
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
      <Grid container justify="center">
        <Box className="box-4">
          <Chart />
        </Box>
      </Grid>
    </>
  );
}

export default App;
