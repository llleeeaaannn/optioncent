const Title = () => {

  const titleStyle = "font-GTUltraFine text-4xl text-blue-900 md:text-red-900"
  const titleSearchbarShownStyle = `${titleStyle} md:hidden`

  return (
    <div id="title" className={titleStyle}>
      <h1>OPTIONCENT</h1>
    </div>
  )
}

export default Title;
