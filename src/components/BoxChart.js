import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import fetchData from "../api/covidApi";

function BarChart(props) {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    fetchData(props.country).then((res) => setCountryData(res));
  }, [props.country]);

  const data = {
    datasets: [
      {
        label: "Confirmed",
        data: [countryData.confirmed],
        fill: false,
        pointStyle: "line",
        borderColor: "blue",
      },
      {
        label: "Recovered",
        data: [countryData.recovered],
      },
      {
        label: "Deaths",
        data: [countryData.deaths],
        borderColor: "#FF0000",
        fill: "false",
        borderWidth: 0.5,
      },
    ],
  };

  return <Bar data={data}></Bar>;
}

export default BarChart;
