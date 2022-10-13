const Expirybar = ({ changeExpiry, expiryDates }) => {
  return (
    <div id="expirybar-container">
      <div className="expirybar">
        { expiryDates.map((date, i) =>
          <span className="expiry" onClick={() => changeExpiry(date)} key={i}>{ date }</span>
        )}
      </div>
    </div>
  )
}

export default Expirybar;
