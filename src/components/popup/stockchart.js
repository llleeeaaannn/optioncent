import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const StockChart = ({chartData}) => {

  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      title: {
        display: true,
        text: 'Price History'
      }
    }
  }

  return (
    <Line data={chartData} options={options} />
  )
}

export default StockChart;
