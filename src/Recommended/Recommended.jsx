import './Recommended.css'
const Recommended = ({handleClick}) => {
  return (
    <fragment>
      <div className="recommended">
        <h2 className="recommended-title">Recommended for you</h2>
        <div className="recommended-flex">
          <button className="btn" onClick={handleClick} value="">
            All Products
          </button>
          <button className="btn" onClick={handleClick} value="Nike">
            Nike
          </button>
          <button className="btn" onClick={handleClick} value="Adidas">
            Adidas
          </button>
          <button className="btn" onClick={handleClick} value="Vans">
            Vans
          </button>
        </div>
      </div>

    </fragment>
  )
}

export default Recommended