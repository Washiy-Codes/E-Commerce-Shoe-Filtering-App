

const Input = ({handleChange, name, value, color, title}) => {
  return (
    <div>
      <label className="sidebar-label-container">
          <input type="radio" name={name} value={value} onChange={handleChange} />
          <span className="all" style={{ backgroundColor: color }}></span>
           {title}
        </label>
    </div>
  )
}

export default Input