import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const OptionChart = ({chartData}) => {

  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      title: {
        display: false      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  }

  return (
    <div className="option-popup-chart">
      <Line data={chartData} options={options} />
    </div>
  )
}

export default OptionChart;
