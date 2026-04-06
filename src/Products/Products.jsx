import './Products.css'

const Products = ({results}) => {
  return (
    <div>
      <div className="products-container">{results}</div>
    </div>
  )
}
export default Products