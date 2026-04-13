

const Input = ({handleChange, name, value, title, color}) => {
  return (
    <div>
      <label className="sidebar-label-container">
          <input type="radio" name={name} value={value} onChange={handleChange} />
      <span style={{ color }}>{title}</span>
        </label>
    </div>
  )
}

export default Input