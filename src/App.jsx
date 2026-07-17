import {useState} from 'react';
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./data/data";
import Card from "./components/card";
import "./index.css";

function App() {
  const [sidebarFilter, setSidebarFilter] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

const addToCart = (id) => {
    const product = data.find((item) => item.id === id);
    if (product) {
      setCartItems((prevItems) => [...prevItems, product]);
    }
    setToastMessage(`${product.title} has been added to the cart.`);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

   const handleClearCart = () => {
    setCartItems([]);
  };
const handleRemoveFromCart = (indexToRemove) => {
  setCartItems((prevItems) => 
    prevItems.filter((_, index) => index !== indexToRemove)
  );
};


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredItems = data.filter((item) => {
  const search = inputValue.toLowerCase();
  return (
    item.company.toLowerCase() .includes(search) ||
    item.color.toLowerCase() .includes(search) ||
    item.category.toLowerCase() .includes(search)

  );
});
  
  const handleChange = (event) => {
    setSidebarFilter(event.target.value);
  }

  const handleClick = (e) => {
    setSidebarFilter(e.target.value);
  }

  const filteredProducts = (data, selected,  inputValue) => {
    let filtered = data;
    if (inputValue) {
      filtered = filteredItems;
    }
    if (selected) {
      filtered = filtered.filter(({category, color, company, prevPrice, newPrice}) => 
      category === selected || 
      color === selected|| 
      company === selected || 
      prevPrice === selected || 
      newPrice === selected );
    }


    return filtered.map(({img, title, star, reviews, newPrice, company, color, category, index, id}) => (
      <Card 
        key={`${index}-${title}`}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={`$${newPrice}`}
        company={company}
        color={color}
        category={category}
        handleAddToCart={() => addToCart(id)}
      />
    ));
  };

 const products = filteredProducts(data, sidebarFilter, inputValue);

  return (
    <div className="App">
      {toastMessage && (
        <div className="toast">
          {toastMessage}
        </div>
      )}
      <Sidebar handleChange={handleChange} />
      <Navigation inputValue={inputValue} handleInputChange={handleInputChange} handleClearCart={handleClearCart} cartItems={cartItems}
      handleRemoveFromCart={handleRemoveFromCart} />
      <Recommended handleClick = {handleClick}  />
      <Products results = {products}/>
    </div>
  );
}

export default App; 