import Input from '../../components/input'
import './Category.css'
 const Category = ({handleChange}) => {
  return (
    <div>
      <h3 className="sidebar-title">Category</h3>
      <div>
        <label name="shoes" className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="shoes" className="all"/>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="shoes"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="shoes"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="shoes"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="shoes"
        />
      </div>
    </div>
  )
}

export default Category
