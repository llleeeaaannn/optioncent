const Dropdown = ({suggestion, suggestionClicked}) => {

  const dropdownStyle = "pl-2 p-1 text-base hover:cursor-pointer hover:bg-slate-300";

  return (
    <div className={dropdownStyle} onClick={() => suggestionClicked(suggestion)}>
      <span>{ suggestion }</span>
    </div>
  )
}

export default Dropdown;
