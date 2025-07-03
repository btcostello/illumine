// ./components/LineChart.js

import React from "react";
import { Line } from "react-chartjs-2";

const chartLabels = ["1", "2", "3", "4", "5", "6", "7"];

const chartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 60, 50],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="avChart">
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;