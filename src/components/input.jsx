

const Input = ({handleChange, name, value, color, title}) => {
  return (
    <div>
      <label className="sidebar-label-container">
          <input type="radio" name={name} value={value} onChange={handleChange} />
          <span className="category-span" style={{ backgroundColor: color }}></span>
           {title}
        </label>
    </div>
  )
}

export default Input