import './Sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Color/Color'
const Sidebar = ({ handleChange }) => {
  return (
    <>
     <section className="sidebar">
       <Category handleChange={handleChange} />
       <Price handleChange={handleChange} />
       <Color handleChange={handleChange} />
     </section>

    </>
  )
}

export default Sidebar