import './Recommended.css'
const Recommended = () => {
  return (
    <fragment>
      <div className="recommended">
        <h2 className="recommended-title">Recommended for you</h2>
        <div className="recommended-flex">
          <button className="btn">All Products</button>
          <button className="btn">Nike</button>
          <button className="btn">Adidas</button>
          <button className="btn">Vans</button>
        </div>
      </div>

    </fragment>
  )
}

export default Recommended