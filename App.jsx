import ListProduct from "./components/productlist";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/cart";
import Navbar from "./components/navbar";
function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ListProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
