import React from "react";
import { Line } from "react-chartjs-2";

function Chart(props) {
  const data = [10, 20];

  var myLineChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
}
