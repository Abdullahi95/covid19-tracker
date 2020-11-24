import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchDailyRate } from "../api/covidApi";

function LineChart() {
  const [dailyRate, setDailyRate] = useState({});

  useEffect(() => {
    async function getData() {
      fetchDailyRate().then((res) => setDailyRate(res));
    }

    getData();
  });

  const data = {
    labels: dailyRate.days,
    datasets: [
      {
        label: "Confirmed",
        data: dailyRate.confirmed,
        fill: false,
        pointStyle: "line",
        borderColor: "blue",
      },
      {
        label: "Deaths",
        data: dailyRate.deaths,
        borderColor: "#FF0000",
        fill: "false",
        borderWidth: 0.5,
      },
    ],
  };

  return <Line data={data} />;
}

export default LineChart;
