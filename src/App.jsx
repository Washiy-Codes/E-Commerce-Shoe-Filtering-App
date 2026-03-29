import Recommended from './Recommended/Recommended'
import Products from './Products/Products'
import Navigation from './Navigation/Navigation'
import './index.css'
import Sidebar from './Sidebar/Sidebar'
const App = () => {
  return (
    <div>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  )
}

export default App