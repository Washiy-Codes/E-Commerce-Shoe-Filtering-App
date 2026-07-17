import './Color.css'
import Input from '../../components/input'

const Color = ({handleChange}) => {
  return (
    <div>
      <h3 className="color-title">Color</h3>

      <div className="color-container">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="shoes1" />
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="shoes1"
          color="black"
          className="color"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="shoes1"
          color="blue"
          className="color"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="shoes1"
          color="red"
          className="color"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="shoes1"
          color="green"
          className="color"
        />
      </div>
    </div>
  )
}

export default Color