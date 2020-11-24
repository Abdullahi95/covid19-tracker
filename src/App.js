import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import "./App.css";
import { Grid, Box } from "@material-ui/core";
import fetchData from "./api/covidApi";
import Dropdown from "./components/Dropdown";
import LineChart from "./components/LineChart";
import BarChart from "./components/BoxChart";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState("");
  const [isGlobal, setIsGlobal] = useState(true);

  useEffect(() => {
    async function getData() {
      fetchData(country).then((res) => setData(res));
    }
    getData();
  }, [country]);

  function onChange(event) {
    setCountry(event.target.value);
  }

  useEffect(() => {
    if (country !== "") {
      setIsGlobal(false);
    } else {
      setIsGlobal(true);
    }
  }, [country]);

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
          {isGlobal ? <LineChart /> : <BarChart country={country} />}
        </Box>
      </Grid>
    </>
  );
}

export default App;
