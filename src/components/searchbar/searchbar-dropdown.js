const Dropdown = ({suggestion, suggestionClicked}) => {
  return (
    <div className="dropdown-item" onClick={() => suggestionClicked(suggestion)}>
      <span>{ suggestion }</span>
    </div>
  )
}

export default Dropdown;
