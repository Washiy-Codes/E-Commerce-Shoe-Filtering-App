import { IoBagCheck } from "react-icons/io5";


const card = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => {
  return (
    <div className='card-container'>
        <div className='card'>
         <img src={img} alt={title}  />
         <div className="card-details">
          <h3 className='title'>{title}</h3>
          </div>
          <div className="card-reviews">
            {star} {star} {star} {star} {star}
            <span className='total-reviews'>{reviews}</span>
          </div>
          <div className="card-prices">
            <div className='price'>
              <del>{prevPrice}</del> {newPrice}
            </div>
          </div>
          <div className="bag">
            <IoBagCheck className='bag-icon' />
          </div>
        </div>
        
      </div>
  )
}

export default card