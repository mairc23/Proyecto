import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // antes installar con el comando npm install react-router-dom
import './App.css'
import AppRoutes from './routes'
import Home from './pages/home/Home';
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
