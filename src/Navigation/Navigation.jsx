import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Navigation.css";
import Cart from "../cart/cart";

const Navigation = ({ inputValue, handleInputChange, handleClearCart, cartItems, handleRemoveFromCart }) => {
  return (
    <div>
     <nav>
      <div className="nav-input">
        {/* <div className="logo-container">
         <h1>🛒</h1>
       </div> */}
        <input
          className="search-input"
          type="text"
          placeholder="Enter your search shoes."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
      <Cart cartItems={cartItems} handleClearCart={handleClearCart} handleRemoveFromCart={handleRemoveFromCart} />
    </nav>
    <div className="hr"></div>
    </div>
  )
}

export default Navigation