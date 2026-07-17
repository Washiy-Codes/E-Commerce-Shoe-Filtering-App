import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, newPrice, handleAddToCart }) => {
  return (
    <fragment className="card-container">
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div style={{ marginBottom: "1px", backgroundColor: "#1d0392", width: "100%", height: "5px" }}></div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price price-bag">
            <div className="price">
             {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
        <div className='add-to-cart-btn-container'>
          <button className="add-to-cart-btn btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </section>
    </fragment>
  );
};

export default Card;