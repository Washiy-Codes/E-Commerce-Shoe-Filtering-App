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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredItems = data.filter((item) => {
  const search = inputValue.toLowerCase();
  return (
    item.title.toLowerCase().includes(search) ||
    item.category.toLowerCase().includes(search)
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


    return filtered.map(({img, title, star, reviews, prevPrice, newPrice, company, color, category, index}) => (
      <Card 
        key={`${index}-${title}`}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        company={company}
        color={color}
        category={category}
      />
    ));
  };

 const products = filteredProducts(data, sidebarFilter, inputValue);

  return (
    <div className="App">
      <Sidebar handleChange={handleChange} />
      <Navigation inputValue={inputValue} handleInputChange={handleInputChange} />
      <Recommended handleClick = {handleClick}  />
      <Products results = {products}/>
    </div>
  );
}

export default App; 

