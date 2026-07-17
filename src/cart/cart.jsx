import "./cart.css"
import { useState } from "react";

const Cart = ({cartItems, handleClearCart, handleRemoveFromCart}) => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => (Number(total) + Number(item.newPrice)), 0);
    }
    const getTax = () => {
        const taxRate = 0.1;
        return getTotalPrice() * taxRate;
    }

    return(
    <main>
      <button id="cart-btn" type="button" className="btn" onClick={toggleCart}>
        <span id="show-hide-cart">{isCartVisible ? "Hide" : "Show"}</span> Cart
      </button>
      <div id="cart-container" style={{ display: isCartVisible ? "block" : "none" }}>
        <button className="btn" id="clear-cart-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
        <div id="products-container" >
          {cartItems.map((item, index) => (
            <div key={item.id} className="product-card">
              <div>
               <p className="product-title">{item.title}</p>
               <p className="product-price">${item.newPrice}</p>
                </div>
                <div>
                 <button className="btn remove-from-cart-btn" onClick={() => handleRemoveFromCart(index)}>
                 Remove
                </button>
                </div>
            </div>
          ))}
        </div>
        <div className="total-price">
            <p>Total number of items: {cartItems.length}</p>
            <p>Subtotal: <span id="subtotal">${getTotalPrice().toFixed(1)}</span></p>
            <p>Tax: <span id="tax">${getTax().toFixed(1)}</span></p>
            <p>Total: <span id="total">${(getTotalPrice() + getTax()).toFixed(1)}</span></p>
        </div>
      </div>
      <div id="dessert-card-container"></div>
    </main>
    )
}

export default Cart;