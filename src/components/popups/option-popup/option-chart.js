import { Line } from "react-chartjs-2";

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

  const optionChartStyle = "w-full";

  return (
    <div className={optionChartStyle}>
      <Line data={chartData} options={options} />
    </div>
  )
}

export default OptionChart;
