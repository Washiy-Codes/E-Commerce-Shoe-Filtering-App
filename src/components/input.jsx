

const Input = ({handleChange, name, value, title, color}) => {
  const styles={
    backgroundColor: color
  }
  return (
    <div>
      <label className="sidebar-label-container">
          <input type="radio" name={name} value={value} onChange={handleChange} />
          <span className="checkmark" style={styles}></span>
           {title}
        </label>
    </div>
  )
}

export default Input