import ListProduct from "./Components/G-Prods/productshop/components/productlist";
import { CartProvider } from "./Components/G-Prods/productshop/context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/G-Prods/productshop/components/cart";
import Navbar from "./Components/G-Prods/productshop/components/navbar";
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
