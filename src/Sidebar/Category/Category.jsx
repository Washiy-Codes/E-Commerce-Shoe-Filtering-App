import './Category.css'

export const Category = () => {
  return (
    <div>
      <h2 className="category-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="text" />
          <span className="category-span"></span>
          All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="text" />
          <span className="category-span"></span>
          Sneakers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="text" />
          <span className="category-span"></span>
          Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="text" />
          <span className="category-span"></span>
          Sandals
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="text" />
          <span className="category-span"></span>
          Heels
        </label>
      </div>
    </div>
  )
}

export default Category
