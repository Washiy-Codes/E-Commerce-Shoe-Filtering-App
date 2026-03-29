import './Products.css'
import { LiaStarSolid } from "react-icons/lia";
import { IoBagCheck } from "react-icons/io5";

const Products = () => {
  return (
    <div>
      <div className='card-container'>
        <div className='card'>
          <img src="https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg" alt="PUMA BLACK-OCE" />
        <div className="card-details">
          <h3 className='title'>PUMA BLACK-OCE</h3>
        </div>
          <div className="card-reviews">
            <LiaStarSolid className=' rating-star' />
            <LiaStarSolid className='rating-star' />
            <LiaStarSolid className='rating-star' />
            <LiaStarSolid className='rating-star' />
            <LiaStarSolid className='rating-star' />
            <span className='total-reviews'>(123 reviews)</span>
          </div>
          <div className="card-prices">
            <div className='price'>
              <del>$140,00</del> 900
            </div>
          </div>
          <div className="bag">
            <IoBagCheck className='bag-icon' />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Products