import './Color.css'
import Input from '../../components/input'

const Color = ({handleChange}) => {
  return (
    <div>
      <h2 className="color-title">Color</h2>

      <div className="color-container">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="shoes1" />
          <span className="all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="shoes1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="shoes1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="shoes1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="shoes1"
          color="green"
        />
      </div>
    </div>
  )
}

export default Color