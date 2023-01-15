const OptionChartLoading = () => {

  const chartLoadingStyle = "grid place-content-center w-full h-40";
  const svgStyle = "w-6 h-6";

  return (
    <div className={chartLoadingStyle}>
      <svg className={svgStyle} viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12">
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/>
        <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </path>
      </svg>
    </div>
  )
}

export default OptionChartLoading;
