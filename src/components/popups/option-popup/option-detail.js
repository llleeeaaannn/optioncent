const OptionDetail = ({ name, value, hover, info }) => {

  const detailStyle = "relative gap-1 p-1";
  const detailNameStyle = "justify-self-start";
  const detailNameHoverStyle = "justify-self-start cursor-pointer";
  const detailValueStyle = "justify-self-end";
  const detailInfoStyle = "absolute top-6 left-1 py-1 px-2 mr-2 rounded bg-slate-300"

  return (
    <div id="detail" className={detailStyle}>
      <span id="detail-name" className={ hover ? detailNameHoverStyle : detailNameStyle }>{name}</span>
      <span className={detailValueStyle}>{value}</span>
      { hover &&
        <span id="detail-info" className={detailInfoStyle}>{info}</span>
      }
    </div>
  )
}

export default OptionDetail;
