import "./input.css"
const Input = ({handleChange, name, value, title, color, className=""}) => {
  return (
    <div>
      <label className="sidebar-label-container">
          <input type="radio" name={name} value={value} onChange={handleChange} style={{ backgroundColor: color }} className={className}/>
        </label>
        <span style={{ color }}>{title}</span>
    </div>
  )
}

export default Input