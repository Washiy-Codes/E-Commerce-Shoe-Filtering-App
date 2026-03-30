import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Navigation.css";

const Navigation = ({ inputValue, handleInputChange }) => {
  return (
     <nav>
      <div className="nav-input">
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
    </nav>
  )
}

export default Navigation