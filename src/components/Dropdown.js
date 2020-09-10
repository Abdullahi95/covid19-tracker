import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../api/covidApi";

function Dropdown(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      fetchCountries().then((data) => setCountries(data));
    }
    getCountries();
  }, []);

  return (
    <>
      <FormControl>
        <NativeSelect onChange={props.ChangeHandler}>
          <option value="">Global</option>
          {countries.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
}

export default Dropdown;
