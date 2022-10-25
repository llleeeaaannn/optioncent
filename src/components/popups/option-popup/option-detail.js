const OptionDetail = ({ name, value, hover, info }) => {
  return (
    <div id="detail">
      <span className="detail-name">{name}</span>
      <span className="detail-value">{value}</span>
      { hover &&
        <span className="detail-info">{info}</span>
      }
    </div>
  )
}

export default OptionDetail;
