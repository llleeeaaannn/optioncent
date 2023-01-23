const Dropdown = ({suggestion, suggestionClicked}) => {

  const dropdownStyle = "pl-2 p-1 text-base text-neutral-900 hover:cursor-pointer hover:bg-neutral-300 transition-all";

  return (
    <div className={dropdownStyle} onClick={() => suggestionClicked(suggestion)}>
      <span>{ suggestion }</span>
    </div>
  )
}

export default Dropdown;
